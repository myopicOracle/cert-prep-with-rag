import { getMatchedDocuments } from '@/app/lib/supabase'
import { getEmbedding, getChatResponse } from '@/app/lib/bedrock'

async function getMatches(query: string) {
    console.log(`User asked: "${query}"`)

    console.log(`\nTurning user query into vectors...`)
    const embedding = await getEmbedding(query)

    console.log('\nSearching database for matches...')
    const matchedDocuments = await getMatchedDocuments(embedding)

    console.log(`\n${matchedDocuments.length} matches found.`)
    // console.log(matchedDocuments)

    return matchedDocuments
}

function formatAsContext(matches: any[]) {
    // prettier-ignore
    if (matches) {
        return matches
            .map((match, index) => (
                `Source [${index + 1}]: ${match.content}\n\n(Confidence Score: ${Math.round(match.similarity * 100)}%)`
            ))
            .join('\n\n---\n\n')
    } else {
        return 'No additional information.'
    }
}

export async function getRagResponse(query: string) {
    const matches = await getMatches(query)
    const context = formatAsContext(matches)
    // console.log('\nContext provided to LLM:\n\n', context)

    const rolePreamble = `You are an AWS certification exam prep assistant.`
    const metadataPreamble = `Each source in the context begins with a breadcrumb path (e.g. 'Section > Subsection: content'). Use this breadcrumb to understand the context of each source.`
    const taskStatement = `Answer questions using only the provided context from AWS documentation.`
    const formatCondition = `Be concise and direct. Avoid unnecessary headers or filler.`
    const guardrailCondition = `If the context doesn't contain enough information to answer, say so.`
    const transparencyCondition = `Always cite which source or sources your answer is drawn from.`

    const systemPrompt = [
        rolePreamble,
        metadataPreamble,
        taskStatement,
        formatCondition,
        guardrailCondition,
        transparencyCondition,
    ].join(' ')

    const messages = [
        {
            role: 'user',
            content: [{ text: `Question: ${query}\n\nContext: ${context}` }],
        },
    ]

    const response = await getChatResponse(messages, systemPrompt)
    console.log('\nLLM Response: ', response)

    if (response) {
        messages.push({
            role: 'assistant',
            content: [{ text: response }],
        })
    }

    const chatHistory =
        // prettier-ignore
        messages
            .map((message, index) => {
                const role = message.role
                const text = message.content[0].text

                return `Message ${index+1} [${role}]: ${text}`
            })
            .join("\n\n---\n\n")

    // console.log(chatHistory)

    return response
}

const query = 'What are the in-scope AWS services and features?'
getRagResponse(query)

// User asked: "What are the in-scope AWS services and features?"

// Turning user query into vectors...

// Searching database for matches...

// 5 matches found.

// LLM Response:  # In-Scope AWS Services and Features

// Based on the provided context, I can share the following information:

// ## What We Know

// The exam includes **in-scope AWS services and features** that are organized by category according to their primary functions. However, the context provided is incomplete.

// ## Specific Example: Analytics Services

// From **Source [2]**, the Analytics category includes these in-scope services:

// - Amazon Athena
// - Amazon Data Firehose
// - Amazon EMR
// - AWS Glue
// - AWS Glue DataBrew
// - AWS Glue Data Quality
// - Amazon Kinesis
// - AWS Lake Formation
// - Amazon Managed Service for Apache Flink
// - Amazon OpenSearch Service
// - Amazon QuickSight
// - Amazon Redshift

// ## Important Notes

// According to **Source [1]**, this list is:
// - **Non-exhaustive** - meaning there are more services included beyond what's listed
// - **Subject to change** - the list may be updated

// ## Limitation

// The provided context does not contain the complete list of all in-scope services across all categories. To get the full comprehensive list of in-scope AWS services and features for your specific exam, you would need to refer to the complete Appendix section of the official AWS certification exam guide.
