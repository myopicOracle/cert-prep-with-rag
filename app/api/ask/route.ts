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
        const { assistantResponse, citations } = await getRagResponse(userQuery)
        return Response.json({ assistantResponse, citations })
    } catch (error) {
        console.error(error)
        return Response.json({ error: 'failed to generate response' }, { status: 500 })
    }
}

/* Test: 
 
 {"query": "What are the in-scope AWS services?"}
 
 {
  "assistantResponse": "# In-Scope AWS Services for MLA-C01\n\nBased on the AWS Certified Machine Learning Engineer - Associate (MLA-C01) Exam Guide, the in-scope services are organized by category:\n\n**Analytics:**\nAmazon Athena, Amazon Data Firehose, Amazon EMR, AWS Glue, AWS Glue DataBrew, AWS Glue Data Quality, Amazon Kinesis, AWS Lake Formation, Amazon Managed Service for Apache Flink, Amazon OpenSearch Service, Amazon QuickSight, Amazon Redshift\n\n**Compute:**\nAWS Batch, Amazon EC2, AWS Lambda, AWS Serverless Application Repository\n\n**Storage:**\nAmazon EBS, Amazon EFS, Amazon FSx, Amazon S3, Amazon S3 Glacier, AWS Storage Gateway\n\n**Application Integration:**\nAmazon EventBridge, Amazon MWAA, Amazon SNS, Amazon SQS, AWS Step Functions\n\n**Management and Governance:**\nAWS Auto Scaling, AWS Chatbot, AWS CloudFormation, AWS CloudTrail, Amazon CloudWatch, Amazon CloudWatch Logs, AWS Compute Optimizer, AWS Config, AWS Organizations, AWS Service Catalog, AWS Systems Manager, AWS Trusted Advisor\n\n**Note:** This list is non-exhaustive and subject to change. For a complete list including additional service categories, refer to the official exam guide appendix.",
  "citations": [
    {
      "sourceURL": "https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf",
      "breadcrumb": "AWS Certified Machine Learning Engineer - Associate (MLA-C01) Exam Guide > Appendix: In-scope AWS services and features"
    },
    {
      "sourceURL": "https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf",
      "breadcrumb": "AWS Certified Machine Learning Engineer - Associate (MLA-C01) Exam Guide > Appendix: In-scope AWS services and features > Analytics:"
    },
    {
      "sourceURL": "https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf",
      "breadcrumb": "AWS Certified Machine Learning Engineer - Associate (MLA-C01) Exam Guide > Appendix: In-scope AWS services and features > Management and Governance:"
    },
    {
      "sourceURL": "https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf",
      "breadcrumb": "AWS Certified Machine Learning Engineer - Associate (MLA-C01) Exam Guide > Appendix: In-scope AWS services and features > Compute:"
    },
    {
      "sourceURL": "https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf",
      "breadcrumb": "AWS Certified Machine Learning Engineer - Associate (MLA-C01) Exam Guide > Appendix: In-scope AWS services and features > Application Integration:"
    },
    {
      "sourceURL": "https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf",
      "breadcrumb": "AWS Certified Machine Learning Engineer - Associate (MLA-C01) Exam Guide > Appendix: Out-of-scope AWS services and features"
    },
    {
      "sourceURL": "https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf",
      "breadcrumb": "AWS Certified Machine Learning Engineer - Associate (MLA-C01) Exam Guide > Appendix: Out-of-scope AWS services and features > Frontend Web and Mobile:"
    },
    {
      "sourceURL": "https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf",
      "breadcrumb": "AWS Certified Machine Learning Engineer - Associate (MLA-C01) Exam Guide > Appendix: In-scope AWS services and features > Storage:"
    },
    {
      "sourceURL": "https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf",
      "breadcrumb": "AWS Certified Machine Learning Engineer - Associate (MLA-C01) Exam Guide > Appendix: Out-of-scope AWS services and features > Network and Content Delivery:"
    },
    {
      "sourceURL": "https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf",
      "breadcrumb": "AWS Certified Machine Learning Engineer - Associate (MLA-C01) Exam Guide > Appendix: Out-of-scope AWS services and features > Compute:"
    }
  ]
}
 
 */
