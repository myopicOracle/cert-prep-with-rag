import { BedrockRuntimeClient, ConverseCommand } from '@aws-sdk/client-bedrock-runtime'

const client = new BedrockRuntimeClient({
    region: process.env.AWS_REGION!,
})

async function testCall() {
    const command = new ConverseCommand({
        modelId: 'us.anthropic.claude-haiku-4-5-20251001-v1:0',
        // modelId: 'google.gemma-3-12b-it',
        // modelId: 'us.amazon.nova-lite-v1:0',
        // modelId: 'us.anthropic.claude-3-5-haiku-20241022-v1:0',
        messages: [
            {
                role: 'user',
                content: [{ text: 'What is Amazon SageMaker?' }],
            },
        ],
    })

    const responseObj = await client.send(command)
    console.log('Full response obj:', JSON.stringify(responseObj, null, 2))
    console.log('Response obj type:', typeof responseObj)

    const responseText = responseObj.output.message.content[0].text
    console.log('LLM response only: ', responseText)
}

testCall()
