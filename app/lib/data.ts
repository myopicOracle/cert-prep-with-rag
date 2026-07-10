import { createClient } from '@/app/utils/supabase/client'
import { DatabaseQuestion } from '@/app/types/exam'
import { Flashcard } from '@/app/types/flashcard'
import { Quiz } from '@/app/types/quiz'
import { Service } from '@/app/types/service'

export async function fetchQuestions(): Promise<DatabaseQuestion[]> {
    const supabase = createClient()
    const { data, error } = await supabase.from('questions_full').select('*')

    if (error) {
        throw new Error('Failed to fetch questions from database.')
    }

    // console.log('Data returned by DB call:', data)
    // console.log('Return type:', typeof data)
    return data
}

export async function fetchQuestionsByExam(
    examCode: string,
): Promise<DatabaseQuestion[]> {
    const supabase = createClient()
    const { data, error } = await supabase
        .from('questions_full')
        .select('*')
        .eq('exam_code', examCode)

    if (error) {
        throw new Error(`Failed to fetch questions for exam: ${examCode}`)
    }

    // console.log('Data returned by DB call:', data)
    // console.log('Return type:', typeof data)
    return data
}

export async function fetchQuestionsByExamSet(
    examCode: string,
    setLetter: string,
): Promise<DatabaseQuestion[]> {
    const supabase = createClient()
    const { data, error } = await supabase
        .from('questions_full')
        .select('*')
        .eq('exam_code', examCode)
        .eq('set_letter', setLetter)

    if (error) {
        throw new Error(
            `Failed to fetch questions for exam ${examCode}, set ${setLetter}`,
        )
    }

    return data
}

export async function fetchAvailableExamCodes(): Promise<string[]> {
    const supabase = createClient()
    const { data, error } = await supabase
        .from('questions_full')
        .select('exam_code')
        .not('exam_code', 'is', null)
        .not('set_letter', 'is', null)

    if (error) {
        throw new Error('Failed to fetch available exam codes.')
    }

    return Array.from(new Set(data.map((row) => row.exam_code as string)))
}

export async function fetchSetLettersByExam(
    examCode: string,
): Promise<string[]> {
    const supabase = createClient()
    const { data, error } = await supabase
        .from('questions_full')
        .select('set_letter')
        .eq('exam_code', examCode)
        .not('set_letter', 'is', null)

    if (error) {
        throw new Error(`Failed to fetch sets for exam: ${examCode}`)
    }

    const uniqueSets = Array.from(
        new Set(data.map((row) => row.set_letter as string)),
    )
    return uniqueSets.sort()
}

export async function fetchQuestionsByDomain(
    examCode: string,
    domainNumber: number,
): Promise<DatabaseQuestion[]> {
    const supabase = createClient()
    const { data, error } = await supabase
        .from('questions_full')
        .select('*')
        .eq('exam_code', examCode)
        .eq('domain_number', domainNumber)

    if (error) {
        throw new Error(
            `Failed to fetch questions for domain ${domainNumber} in ${examCode}`,
        )
    }

    // console.log('Data returned by DB call:', data)
    // console.log('Return type:', typeof data)
    return data
}

export async function fetchQuestionsByTaskStatement(
    examCode: string,
    domainNumber: number,
    taskStatementNumber: string,
): Promise<DatabaseQuestion[]> {
    const supabase = createClient()
    const { data, error } = await supabase
        .from('questions_full')
        .select('*')
        .eq('exam_code', examCode)
        .eq('domain_number', domainNumber)
        .eq('task_statement_number', taskStatementNumber)

    if (error) {
        throw new Error(
            `Failed to fetch questions for task statement ${taskStatementNumber}`,
        )
    }

    // console.log('Data returned by DB call:', data)
    // console.log('Return type:', typeof data)
    return data
}

export async function fetchFlashcardsByExam(
    examCode: string,
): Promise<Flashcard[]> {
    const supabase = createClient()
    const { data, error } = await supabase
        .from('flashcards')
        .select('*')
        .eq('exam_code', examCode)

    if (error) {
        throw new Error(`Failed to fetch flashcards for exam: ${examCode}`)
    }

    return data
}

export async function fetchAvailableFlashcardExamCodes(): Promise<string[]> {
    const supabase = createClient()
    const { data, error } = await supabase
        .from('flashcards')
        .select('exam_code')
        .not('exam_code', 'is', null)

    if (error) {
        throw new Error('Failed to fetch available flashcard exam codes.')
    }

    return Array.from(new Set(data.map((row) => row.exam_code as string)))
}

export async function fetchServices(): Promise<Service[]> {
    const supabase = createClient()
    const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('name', { ascending: true })

    if (error) {
        throw new Error('Failed to fetch services from database.')
    }

    return data
}

export async function fetchQuizzesByExam(examCode: string): Promise<Quiz[]> {
    const supabase = createClient()
    const { data, error } = await supabase
        .from('quizzes')
        .select('*')
        .eq('exam_code', examCode)

    if (error) {
        throw new Error(`Failed to fetch quizzes for exam: ${examCode}`)
    }

    return data
}

export async function fetchAvailableQuizExamCodes(): Promise<string[]> {
    const supabase = createClient()
    const { data, error } = await supabase
        .from('quizzes')
        .select('exam_code')
        .not('exam_code', 'is', null)

    if (error) {
        throw new Error('Failed to fetch available quiz exam codes.')
    }

    return Array.from(new Set(data.map((row) => row.exam_code as string)))
}
