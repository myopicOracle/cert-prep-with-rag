import { getMatchedDocuments } from '@/app/lib/supabase'
import { getEmbedding } from '@/app/lib/bedrock'

async function testMatch() {
    const query = 'What is Amazon Sagemaker?'
    const embedding = await getEmbedding(query)
    const matchedDocuments = await getMatchedDocuments(embedding)

    console.log('Embeddings: ', embedding.slice(0, 3))
    console.log('Matched Documents Return Obj: ', matchedDocuments)
}

testMatch()

// [
//   {
//     id: 'c620288e-907a-4665-9615-f5c21418eea4',
//     content: 'Target candidate description: The target candidate should have at least 1 year of experience using Amazon SageMaker and other AWS services for ML engineering. The target candidate also should have at least 1 year of experience in a related role such as a backend software developer, DevOps developer, data engineer, or data scientist.',
//     source_url: 'https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf',
//     service_id: null,
//     metadata: {
//       h1: 'Target candidate description',
//       h2: null,
//       h3: null,
//       h4: null
//     },
//     similarity: 0.531349683162628
//   }
// ]
// Embeddings:  [ -0.06308604031801224, 0.02360827475786209, 0.026029059663414955 ]
// Matched Documents Return Obj:  [
//   {
//     id: 'c620288e-907a-4665-9615-f5c21418eea4',
//     content: 'Target candidate description: The target candidate should have at least 1 year of experience using Amazon SageMaker and other AWS services for ML engineering. The target candidate also should have at least 1 year of experience in a related role such as a backend software developer, DevOps developer, data engineer, or data scientist.',
//     source_url: 'https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf',
//     service_id: null,
//     metadata: {
//       h1: 'Target candidate description',
//       h2: null,
//       h3: null,
//       h4: null
//     },
//     similarity: 0.531349683162628
//   }
// ]
