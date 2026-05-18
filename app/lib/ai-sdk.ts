import { bedrock } from '@ai-sdk/amazon-bedrock'
import { streamText, convertToModelMessages } from 'ai'

import { bedrock_models as models } from '@/app/lib/models'
import { StreamingResponseProps } from '@/app/types/api'

const selectedModel = bedrock(models.fast)

export async function getStreamingResponse({
    messages,
}: StreamingResponseProps) {
    const t0 = Date.now()
    const convertedMessages = await convertToModelMessages(messages)

    let tPreStream = 0
    let firstChunkLogged = false

    const response = streamText({
        model: selectedModel,
        messages: convertedMessages,
        system: '',
        onChunk: () => {
            if (firstChunkLogged) return
            firstChunkLogged = true
            console.log(
                `[chat] ttft=${Date.now() - t0}ms preStream=${tPreStream}ms msgCount=${messages.length}`,
            )
        },
    })

    tPreStream = Date.now() - t0

    return response
}
