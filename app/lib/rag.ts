import { getMatchedDocuments } from '@/app/lib/supabase'
import { getEmbedding } from '@/app/lib/bedrock'

async function getMatches() {
    const query = 'What are the in-scope AWS services and features?'
    console.log(`User asked: "${query}"`)

    console.log(`\nTurning user query into vectors...`)
    const embedding = await getEmbedding(query)

    console.log('\nSearching database for matches...')
    const matchedDocuments = await getMatchedDocuments(embedding)

    console.log(`\n${matchedDocuments.length} matches found.`)

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

async function main() {
    const matches = await getMatches()
    console.log('\nContext for LLM:\n\n', formatAsContext(matches))
}

main()

// User asked: "What are the in-scope AWS services and features?"

// Turning user query into vectors...

// Searching database for matches...

// 5 matches found.

// Context for LLM:

//  Source [1]: Appendix > In-scope AWS services and features: The following list contains AWS services and features that are in scope for the exam. This list is non-exhaustive and is subject to change. AWS offerings appear in categories that align with the offerings' primary functions:

// (Confidence Score: 80%)

// ---

// Source [2]: Appendix > In-scope AWS services and features > Analytics:: - Amazon Athena
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

// (Confidence Score: 63%)

// ---

// Source [3]: Appendix > Storage: > Out-of-scope AWS services and features: The following list contains AWS services and features that are out of scope for the exam. This list is non-exhaustive and is subject to change. AWS offerings that are entirely unrelated to the target job roles for the exam are excluded from this list:

// (Confidence Score: 59%)

// ---

// Source [4]: Appendix > Storage: > Out-of-scope AWS services and features > Application Integration:: - Amazon AppFlow
// - Amazon MQ
// - Amazon Simple Workflow Service (Amazon SWF)

// (Confidence Score: 54%)

// ---

// Source [5]: Target candidate description > Recommended general IT knowledge > Job tasks that are out of scope for the target candidate: - Quantizing models and analyzing the impact on accuracy
// Refer to the Appendix for a list of in-scope AWS services and features and a list of out-of-scope AWS services and features.

// (Confidence Score: 54%)
