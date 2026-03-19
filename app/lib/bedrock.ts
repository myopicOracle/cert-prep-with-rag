import {
    BedrockRuntimeClient,
    ConverseCommand,
} from '@aws-sdk/client-bedrock-runtime'

const client = new BedrockRuntimeClient({
    region: process.env.AWS_REGION!,
})

async function testCall() {
    const command = new ConverseCommand({
        modelId: 'us.amazon.nova-lite-v1:0',
        // modelId: 'us.anthropic.claude-haiku-4-5-20251001-v1:0',
        // modelId: 'us.anthropic.claude-3-5-haiku-20241022-v1:0',
        // modelId: 'google.gemma-3-12b-it',
        messages: [
            {
                role: 'user',
                content: [{ text: 'What is Amazon SageMaker?' }],
            },
        ],
    })

    const response = await client.send(command)

    console.log(JSON.stringify(response, null, 2))
}

testCall()
