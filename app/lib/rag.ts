import { getMatchedDocuments } from '@/app/lib/supabase'
import { getEmbedding, getChatResponse } from '@/app/lib/bedrock'

type Citation = {
    sourceURL: string
    breadcrumb: string
}

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

function buildCitations(matches: any[]) {
    return matches.map((match) => {
        const headings = [
            match.metadata?.h1,
            match.metadata?.h2,
            match.metadata?.h3,
            match.metadata?.h4,
        ]

        const filteredHeadings = headings.filter(
            (heading) => heading !== null && heading !== undefined,
        )

        const breadcrumb = filteredHeadings.join(' > ')

        return {
            sourceURL: match.source_url,
            breadcrumb: breadcrumb,
        }
    })
}

function buildSystemPrompt() {
    const rolePreamble = `You are an AWS certification exam prep assistant.`
    const metadataPreamble = `Each source in the context begins with a breadcrumb path (e.g. 'Section > Subsection: content'). Use this breadcrumb to understand the context of each source.`
    const taskStatement = `Prioritize the provided context when available. If the context is insufficient, supplement with your knowledge of AWS services.`
    const responseStyle = `Be concise and direct. Avoid unnecessary headers or filler.`
    const transparencyCondition = `If as source was used, always cite which source or sources your answer is drawn from.`

    return [
        rolePreamble,
        metadataPreamble,
        taskStatement,
        responseStyle,
        transparencyCondition,
    ].join(' ')
}

function formatChatHistory(messages: any[]) {
    return messages
        .map((message, index) => {
            const role = message.role
            const text = message.content[0].text

            return `Message ${index + 1} [${role}]: ${text}`
        })
        .join('\n\n---\n\n')

    // console.log(chatHistory)
}

function filterCitations(citations: any, response: any) {
    const sourceMatches = response
        ? [...response.matchAll(/Source \[(\d+)\]/g)]
        : []
    const usedSourceNumbers = sourceMatches.map((match) => parseInt(match[1]))
    const uniqueSourceNumbers = [...new Set(usedSourceNumbers)]

    const usedIndices = uniqueSourceNumbers.map((num) => num - 1)

    const filteredCitations = []
    if (usedIndices.length > 0) {
        for (const index of usedIndices) {
            filteredCitations.push(citations[index])
        }
    } else {
        filteredCitations.push(...citations)
    }

    return filteredCitations
}

export async function getRagResponse(query: string) {
    const matches = await getMatches(query)
    const context = formatAsContext(matches)
    const citations = buildCitations(matches)

    const systemPrompt = buildSystemPrompt()

    const messages = [
        {
            role: 'user',
            content: [{ text: `Question: ${query}\n\nContext: ${context}` }],
        },
    ]

    const response = await getChatResponse(messages, systemPrompt)

    if (response) {
        messages.push({
            role: 'assistant',
            content: [{ text: response }],
        })
    }

    const filteredCitations = filterCitations(citations, response)

    console.log('\nLLM Response: ', response)
    console.log('\nCitations: ', filteredCitations)

    return {
        assistantResponse: response,
        citations: filteredCitations,
    }
}

// getRagResponse('What are the in-scope AWS services and features?')

// User asked: "What are the in-scope AWS services and features?"

// Turning user query into vectors...

// Searching database for matches...

// 10 matches found.

// response--- # In-Scope AWS Services and Features for MLA-C01

// The in-scope services for the AWS Certified Machine Learning Engineer - Associate (MLA-C01) exam are organized by category:

// **Analytics** [Source 2]:
// Amazon Athena, Amazon Data Firehose, Amazon EMR, AWS Glue, AWS Glue DataBrew, AWS Glue Data Quality, Amazon Kinesis, AWS Lake Formation, Amazon Managed Service for Apache Flink, Amazon OpenSearch Service, Amazon QuickSight, Amazon Redshift

// **Compute** [Source 4]:
// AWS Batch, Amazon EC2, AWS Lambda, AWS Serverless Application Repository

// **Storage** [Source 8]:
// Amazon EBS, Amazon EFS, Amazon FSx, Amazon S3, Amazon S3 Glacier, AWS Storage Gateway

// **Application Integration** [Source 6]:
// Amazon EventBridge, Amazon MWAA, Amazon SNS, Amazon SQS, AWS Step Functions

// **Management and Governance** [Source 3]:
// AWS Auto Scaling, AWS Chatbot, AWS CloudFormation, AWS CloudTrail, Amazon CloudWatch, Amazon CloudWatch Logs, AWS Compute Optimizer, AWS Config, AWS Organizations, AWS Service Catalog, AWS Systems Manager, AWS Trusted Advisor

// **Note:** This list is non-exhaustive and subject to change [Source 1].

// citations--- [
//   {
//     sourceURL: 'https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf',
//     breadcrumb: 'AWS Certified Machine Learning Engineer - Associate (MLA-C01) Exam Guide > Appendix: In-scope AWS services and features'
//   },
//   {
//     sourceURL: 'https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf',
//     breadcrumb: 'AWS Certified Machine Learning Engineer - Associate (MLA-C01) Exam Guide > Appendix: In-scope AWS services and features > Analytics:'
//   },
//   {
//     sourceURL: 'https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf',
//     breadcrumb: 'AWS Certified Machine Learning Engineer - Associate (MLA-C01) Exam Guide > Appendix: In-scope AWS services and features > Management and Governance:'
//   },
//   {
//     sourceURL: 'https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf',
//     breadcrumb: 'AWS Certified Machine Learning Engineer - Associate (MLA-C01) Exam Guide > Appendix: In-scope AWS services and features > Compute:'
//   },
//   {
//     sourceURL: 'https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf',
//     breadcrumb: 'AWS Certified Machine Learning Engineer - Associate (MLA-C01) Exam Guide > Appendix: Out-of-scope AWS services and features > Frontend Web and Mobile:'
//   },
//   {
//     sourceURL: 'https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf',
//     breadcrumb: 'AWS Certified Machine Learning Engineer - Associate (MLA-C01) Exam Guide > Appendix: In-scope AWS services and features > Application Integration:'
//   },
//   {
//     sourceURL: 'https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf',
//     breadcrumb: 'AWS Certified Machine Learning Engineer - Associate (MLA-C01) Exam Guide > Appendix: Out-of-scope AWS services and features > Network and Content Delivery:'
//   },
//   {
//     sourceURL: 'https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf',
//     breadcrumb: 'AWS Certified Machine Learning Engineer - Associate (MLA-C01) Exam Guide > Appendix: In-scope AWS services and features > Storage:'
//   },
//   {
//     sourceURL: 'https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf',
//     breadcrumb: 'AWS Certified Machine Learning Engineer - Associate (MLA-C01) Exam Guide > Appendix: Out-of-scope AWS services and features > Management and Governance:'
//   },
//   {
//     sourceURL: 'https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf',
//     breadcrumb: 'AWS Certified Machine Learning Engineer - Associate (MLA-C01) Exam Guide > Appendix: Out-of-scope AWS services and features'
//   }
// ]
