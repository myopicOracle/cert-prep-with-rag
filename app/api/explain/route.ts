import { getStreamingResponse } from '@/app/lib/ai-sdk'

export async function POST(request: Request) {
    const { messages } = await request.json()

    const streamResponse = await getStreamingResponse({
        messages,
    })

    const response = streamResponse.toUIMessageStreamResponse()

    return response
}
