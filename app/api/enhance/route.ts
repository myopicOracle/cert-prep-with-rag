import { getEnhancedMessage } from '@/app/lib/ai-sdk'

export async function POST(request: Request) {
    const tRoute = Date.now()
    const { scenario, choices } = await request.json()
    if (typeof scenario !== 'string' || !Array.isArray(choices)) {
        return Response.json(
            { error: 'scenario and choices are required' },
            { status: 400 },
        )
    }

    const rawString = JSON.stringify({ scenario, choices }, null, 2)
    const messages = [
        {
            id: crypto.randomUUID(),
            role: 'user' as const,
            parts: [{ type: 'text' as const, text: rawString }],
        },
    ]

    let message = rawString
    try {
        message = await getEnhancedMessage({ messages })
    } catch (error) {
        console.warn('[enhance] LLM call failed, falling back to raw string', error)
    }

    console.log(`[enhance] routeOverhead=${Date.now() - tRoute}ms`)
    return Response.json({ message })
}
