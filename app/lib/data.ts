import { createClient } from '@/app/utils/supabase/client'
import { DatabaseQuestion } from '@/app/types/exam'

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
