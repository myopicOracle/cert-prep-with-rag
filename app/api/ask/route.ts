import { getRagResponse } from '@/app/lib/rag'

export async function POST(request: Request) {
    const body = await request.json()
    const userQuery = body.query

    if (!userQuery || typeof userQuery !== 'string') {
        return Response.json(
            { error: !userQuery ? 'userQuery is required' : 'userQuery must be a string' },
            { status: 400 },
        )
    }

    try {
        const { assistantResponse, citations } = await getRagResponse(userQuery)
        return Response.json({ assistantResponse, citations })
    } catch (error) {
        console.error(error)
        return Response.json({ error: 'failed to generate response' }, { status: 500 })
    }
}
