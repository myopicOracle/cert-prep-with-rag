import { bedrock } from '@ai-sdk/amazon-bedrock'
import { streamText, convertToModelMessages } from 'ai'

import { bedrock_models as models } from '@/app/lib/models'
import { StreamingResponseProps } from '@/app/types/components'

const selectedModel = bedrock(models.fast)

export async function getStreamingResponse({
    messages,
}: StreamingResponseProps) {
    const convertedMessages = await convertToModelMessages(messages)

    let firstChunkLogged = false

    const response = streamText({
        model: selectedModel,
        messages: convertedMessages,
        system: '',
        providerOptions: {
            openai: { reasoningEffort: 'minimal' },
        },
        onChunk: () => {
            if (firstChunkLogged) return
            firstChunkLogged = true
        },
    })

    return response
}
