import { getChatResponse, getEmbedding } from '@/app/lib/bedrock'

const messages = [
    {
        role: 'user',
        content: [{ text: 'What is Amazon SageMaker? Explain in under 50 words.' }],
    },
]

const textToConvert =
    'Amazon SageMaker is often used as an umbrella term encompassing SageMaker Studio, Notebooks, Jumpstart, Canvas, and many more AWS ML services. It is designed for Data Scientists and advanced customization and integration, distinct from AWS Bedrock, which abstracts away a degree of technical complexity.'

async function main() {
    const chatResponse = await getChatResponse(messages)
    console.log('Chat response:', chatResponse)

    const embedding = await getEmbedding(textToConvert)
    // console.log('Embedding array:', embedding.embeddingsByType.float)
    console.log('Embedding length:', embedding.embedding.length)
}

main()
