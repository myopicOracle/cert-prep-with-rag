import { createClient } from '@supabase/supabase-js'
import fs from 'fs/promises'
import path from 'path'

const FILE_DIR = 'data/generated-flashcards/'

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
)

async function seedFlashcards() {
    const fileNames = await listSeedFiles()
    const flashcardRows = []

    for (const fileName of fileNames) {
        const flashcardSeed = await loadFlashcardsFromFile(fileName)

        for (const card of flashcardSeed) {
            flashcardRows.push({
                exam_code: card.exam_code,
                domain_number: card.domain_number,
                term: card.term,
                definition: card.definition,
            })
        }
    }

    const { error } = await supabase.from('flashcards').insert(flashcardRows)

    if (error) {
        throw error
    }

    return { files: fileNames.length, flashcards: flashcardRows.length }
}

export async function GET() {
    try {
        const result = await seedFlashcards()

        return Response.json({
            message: 'Flashcard seeding was successful',
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

async function loadFlashcardsFromFile(fileName: string) {
    const filePath = path.join(process.cwd(), FILE_DIR, fileName)
    const fileContent = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(fileContent)
}

// last update: 2026-06-13
// {"message":"Flashcard seeding was successful","source":"data/generated-flashcards/","files":6,"flashcards":394}
