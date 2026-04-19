export async function POST(request: Request) {
    const body = await request.json()
    console.log('Incoming payload: ', body)

    const query = body.query
    console.log('Query: ', query)

    if (!query || typeof query !== 'string') {
        return Response.json(
            { error: !query ? 'query is required' : 'query must be a string' },
            { status: 400 },
        )
    }

    return Response.json({ received: query })
}
