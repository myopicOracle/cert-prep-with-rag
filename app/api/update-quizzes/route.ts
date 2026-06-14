import { createClient } from '@supabase/supabase-js'
import fs from 'fs/promises'
import path from 'path'

const FILE_DIR = 'data/generated-quizzes/'

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
)

async function seedQuizzes() {
    const fileNames = await listSeedFiles()
    const quizRows = []

    for (const fileName of fileNames) {
        const quizSeed = await loadQuizzesFromFile(fileName)

        for (const quiz of quizSeed) {
            quizRows.push({
                exam_code: quiz.exam_code,
                domain_number: quiz.domain_number,
                task_statement_number: quiz.task_statement_number,
                question: quiz.question,
                correct_answer: quiz.correct_answer,
                wrong_answer_1: quiz.wrong_answer_1,
                wrong_answer_2: quiz.wrong_answer_2,
                wrong_answer_3: quiz.wrong_answer_3,
                explanation: quiz.explanation,
                service_tags: quiz.service_tags,
            })
        }
    }

    const { error } = await supabase.from('quizzes').insert(quizRows)

    if (error) {
        throw error
    }

    return { files: fileNames.length, quizzes: quizRows.length }
}

export async function GET() {
    try {
        const result = await seedQuizzes()

        return Response.json({
            message: 'Quiz seeding was successful',
            source: FILE_DIR,
            ...result,
        })
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}

// helper functions below

async function listSeedFiles() {
    const dirPath = path.join(process.cwd(), FILE_DIR)
    const entries = await fs.readdir(dirPath)
    return entries.filter((name) => name.endsWith('.json'))
}

async function loadQuizzesFromFile(fileName: string) {
    const filePath = path.join(process.cwd(), FILE_DIR, fileName)
    const fileContent = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(fileContent)
}

// last update: 2026-06-14
// {"message":"Quiz seeding was successful","source":"data/generated-quizzes/","files":6,"quizzes":456}
