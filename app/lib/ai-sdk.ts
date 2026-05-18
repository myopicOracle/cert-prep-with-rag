import { bedrock } from '@ai-sdk/amazon-bedrock'
import { streamText, convertToModelMessages } from 'ai'

import { bedrock_models as models } from '@/app/lib/models'
import { role, outputFormat, systemGuardrail } from '@/app/lib/prompts'

import { StreamingResponseProps } from '@/app/types/api'

const selectedModel = bedrock(models.fast)

export async function getStreamingResponse({
    messages,
}: StreamingResponseProps) {
    const t0 = Date.now()
    const convertedMessages = await convertToModelMessages(messages)

    const systemPrompt = `

${role.examTutor}

${outputFormat.concise} ${outputFormat.markdown}

${systemGuardrail.noFabricatedCitations} ${systemGuardrail.noFabricatedFacts}

    `.trim()

    let tPreStream = 0
    let firstChunkLogged = false

    const response = streamText({
        model: selectedModel,
        messages: convertedMessages,
        system: systemPrompt,
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
