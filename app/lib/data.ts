import { createClient } from '@/app/utils/supabase/client'
import { DatabaseQuestion } from '@/app/types/exam'

export async function fetchQuestions(): Promise<DatabaseQuestion[]> {
    const supabase = createClient()
    const { data, error } = await supabase.from('questions').select('*')

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
