import { bedrock } from '@ai-sdk/amazon-bedrock'
import { streamText, generateText, convertToModelMessages } from 'ai'

import { bedrock_models as models } from '@/app/lib/models'
import { role, task, outputFormat, systemGuardrail } from '@/app/lib/prompts'

import { StreamingResponseProps, EnhancedMessageProps } from '@/app/types/api'

const responseModel = bedrock(models.dev_main)
const enhancementModel = bedrock(models.intern)

export async function getStreamingResponse({
    messages,
}: StreamingResponseProps) {
    const t0 = Date.now()
    const convertedMessages = await convertToModelMessages(messages)

    const systemPrompt = `

${role.examTutor}

${task.explainAll}

${outputFormat.concise} ${outputFormat.markdown}

${systemGuardrail.noFabricatedCitations} ${systemGuardrail.noFabricatedFacts}

    `.trim()

    let tPreStream = 0
    let firstChunkLogged = false

    const response = streamText({
        model: responseModel,
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

export async function getEnhancedMessage({ messages }: EnhancedMessageProps) {
    const convertedMessages = await convertToModelMessages(messages)

    const systemPrompt = `

${role.intern}

    `.trim()

    const response = await generateText({
        model: enhancementModel,
        messages: convertedMessages,
        system: systemPrompt,
    })

    return response.text
}
