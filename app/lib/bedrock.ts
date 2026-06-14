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
import { bedrock_models as models } from '@/app/lib/models'

const client = new BedrockRuntimeClient({
    region: process.env.AWS_REGION!,
})

export async function getChatResponse(messages: any, systemPrompt?: string) {
    const system = systemPrompt ? [{ text: systemPrompt }] : undefined

    const command = new ConverseCommand({
        // modelId: models.fast,
        modelId: models.prod_main,
        // modelId: models.prod_pro,
        messages,
        system,
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
