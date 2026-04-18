/*
 * You can obtain an updated list of models available for inference from your
 * region by running: 'aws bedrock list-foundation-models --region <REGION>'
 *
 * Replace <REGION> with your permissioned region, i.e. 'us-east-1'
 *
 * Full list: `app/models/model-list.md`
 *
 * Cron job: 'npm run update:models'
 */

import {
    BedrockRuntimeClient,
    ConverseCommand,
    InvokeModelCommand,
} from '@aws-sdk/client-bedrock-runtime'

const client = new BedrockRuntimeClient({
    region: process.env.AWS_REGION!,
})

// list all available models with 'aws bedrock list-foundation-models --region <REGION>'
const models = {
    fast: 'google.gemma-3-12b-it',
    general: 'us.anthropic.claude-haiku-4-5-20251001-v1:0',
    pro: 'anthropic.claude-sonnet-4-5-20250929-v1:0',
    eat_ramen_for_next_month: 'anthropic.claude-opus-4-5-20251101-v1:0',
    nova: 'us.amazon.nova-lite-v1:0',
    embedding: 'amazon.titan-embed-text-v2:0',
}

export async function getChatResponse(messages: any) {
    const command = new ConverseCommand({
        modelId: models.fast,
        // modelId: models.general,
        messages,
    })

    const response = await client.send(command)
    // console.log('Full response obj:', JSON.stringify(response, null, 2))
    // console.log('Response obj type:', typeof response)

    const responseText = response.output?.message?.content?.[0]?.text
    // console.log('LLM response only:', responseText)

    return responseText
}

export async function getEmbedding(inputText: string) {
    const command = new InvokeModelCommand({
        modelId: models.embedding,
        contentType: 'application/json',
        accept: 'application/json',
        body: JSON.stringify({
            inputText,
            dimensions: 1024,
            normalize: true,
        }),
    })

    const response = await client.send(command)
    // console.log('Full response obj:', JSON.stringify(response, null, 2))
    // console.log('Response obj type:', typeof response)

    // decode the Uint8Array
    const responseBody = JSON.parse(new TextDecoder().decode(response.body))
    // console.log('Decoded response body:', JSON.stringify(responseBody, null, 2))
    // console.log('Embedding length:', responseBody.embedding.length)

    return responseBody.embedding
}
