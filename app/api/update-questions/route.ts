import { createClient } from '@supabase/supabase-js'
import fs from 'fs/promises'
import path from 'path'

const FILE_NAME = 'clf-c02-set-a.json'
const FILE_DIR = 'data/generated-questions/'
const SOURCE_FILE = FILE_DIR.concat(FILE_NAME)

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
)

async function seedQuestions() {
    const questionSeed = await loadQuestionsFromFile()
    const taskStatements = await fetchTaskStatements()
    const questionRows = buildQuestionRows(questionSeed, taskStatements)

    const { error } = await supabase.from('questions').insert(questionRows)

    if (error) {
        throw error
    }

    return questionRows.length
}

export async function GET() {
    try {
        const questionCount = await seedQuestions()

        return Response.json({
            message: 'Database seeding was successful',
            source: SOURCE_FILE,
            questions: questionCount,
        })
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}

// helper functions below

async function loadQuestionsFromFile() {
    const filePath = path.join(process.cwd(), SOURCE_FILE)
    const fileContent = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(fileContent)
}

async function fetchTaskStatements() {
    const { data, error } = await supabase
        .from('task_statements')
        .select('id, number, domains(number, exams(code))')

    if (error) {
        throw error
    }

    return data
}

function buildQuestionRows(questionSeed: any[], taskStatements: any[]) {
    const questionRows = []

    for (const q of questionSeed) {
        let taskStatementId = null

        for (const ts of taskStatements) {
            const domain = ts.domains
            const exam = domain.exams

            if (
                exam.code === q.exam_code &&
                domain.number === q.domain_number &&
                ts.number === q.task_statement_number
            ) {
                taskStatementId = ts.id
                break
            }
        }

        questionRows.push({
            task_statement_id: taskStatementId,
            scenario: q.scenario,
            correct_answer: q.correct_answer,
            wrong_answer_1: q.wrong_answer_1,
            wrong_answer_2: q.wrong_answer_2,
            wrong_answer_3: q.wrong_answer_3,
            correct_explanation: q.correct_explanation,
            wrong_explanation_1: q.wrong_explanation_1,
            wrong_explanation_2: q.wrong_explanation_2,
            wrong_explanation_3: q.wrong_explanation_3,
            service_tags: q.service_tags,
        })
    }

    return questionRows
}

// last update: 2026-05-17
// {"message":"Database seeding was successful","services":3,"questions":5}
