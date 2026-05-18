import { getStreamingResponse } from '@/app/lib/ai-sdk'

export async function POST(request: Request) {
    const tRoute = Date.now()
    try {
        const { messages } = await request.json()
        if (!Array.isArray(messages) || messages.length === 0) {
            return Response.json(
                { error: 'messages array is required' },
                { status: 400 },
            )
        }
        const streamResponse = await getStreamingResponse({
            messages,
        })

        const response = streamResponse.toUIMessageStreamResponse()

        console.log(`[chat] routeOverhead=${Date.now() - tRoute}ms`)

        return response
    } catch (error) {
        console.error(error)
        return Response.json(
            { error: 'failed to generate explanation' },
            { status: 500 },
        )
    }
}
