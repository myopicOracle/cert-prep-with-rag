import { AnswerChoice } from '@/app/types/exam'

export async function fetchEnhancedBundle({
    scenario,
    choices,
}: {
    scenario: string
    choices: AnswerChoice[]
}): Promise<string> {
    try {
        const response = await fetch('/api/enhance', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ scenario, choices }),
        })
        const data = await response.json()
        return data.message
    } catch (error) {
        console.warn('[enhance] fetch failed, using raw string', error)
        return JSON.stringify({ scenario, choices }, null, 2)
    }
}
