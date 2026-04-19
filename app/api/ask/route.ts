import { getRagResponse } from '@/app/lib/rag'

export async function POST(request: Request) {
    const body = await request.json()
    const userQuery = body.query

    if (!userQuery || typeof userQuery !== 'string') {
        return Response.json(
            { error: !userQuery ? 'userQuery is required' : 'userQuery must be a string' },
            { status: 400 },
        )
    }

    try {
        const assistantResponse = await getRagResponse(userQuery)
        return Response.json({ assistantResponse })
    } catch (error) {
        console.error(error)
        return Response.json({ error: 'failed to generate response' }, { status: 500 })
    }
}

/* Test: 
 
 {"query": "What are the in-scope AWS services?"}
 
 {"assistantResponse":"# In-Scope AWS Services for MLA-C01 Exam\n\nBased on the AWS Certified Machine Learning Engineer - Associate (MLA-C01) Exam Guide, the in-scope services are organized by category:\n\n**Analytics** (Source 2):\nAmazon Athena, Amazon Data Firehose, Amazon EMR, AWS Glue, AWS Glue DataBrew, AWS Glue Data Quality, Amazon Kinesis, AWS Lake Formation, Amazon Managed Service for Apache Flink, Amazon OpenSearch Service, Amazon QuickSight, Amazon Redshift\n\n**Compute** (Source 4):\nAWS Batch, Amazon EC2, AWS Lambda, AWS Serverless Application Repository\n\n**Storage** (Source 8):\nAmazon EBS, Amazon EFS, Amazon FSx, Amazon S3, Amazon S3 Glacier, AWS Storage Gateway\n\n**Application Integration** (Source 5):\nAmazon EventBridge, Amazon MWAA, Amazon SNS, Amazon SQS, AWS Step Functions\n\n**Management and Governance** (Source 3):\nAWS Auto Scaling, AWS Chatbot, AWS CloudFormation, AWS CloudTrail, Amazon CloudWatch, Amazon CloudWatch Logs, AWS Compute Optimizer, AWS Config, AWS Organizations, AWS Service Catalog, AWS Systems Manager, AWS Trusted Advisor\n\nNote: The source indicates this list is non-exhaustive and subject to change (Source 1)."}
 
 */
