/*
 * You can obtain an updated list of models available for inference from your
 * region by running: 'aws bedrock list-foundation-models --region <REGION>'
 *
 * Replace <REGION> with your permissioned region, i.e. 'us-east-1'
 *
 * Full list: `app/models/model-list.md`
 * s
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

async function testConverse() {
    const command = new ConverseCommand({
        modelId: models.fast,
        // modelId: models.general,
        messages: [
            {
                role: 'user',
                content: [{ text: 'What is Amazon SageMaker? Explain in under 50 words.' }],
            },
        ],
    })

    const responseObj = await client.send(command)
    console.log('Full response obj:', JSON.stringify(responseObj, null, 2))
    console.log('Response obj type:', typeof responseObj)

    const responseText = responseObj.output.message.content[0].text
    console.log('LLM response only: ', responseText)
}

async function testInvoke() {}

testConverse()
testInvoke()
