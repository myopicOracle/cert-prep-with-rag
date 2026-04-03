const examMetadata = [
    {
        id: 1,
        level: 'Foundational',
        full_name: 'AWS Certified Cloud Practitioner',
        short_name: 'Cloud Practitioner',
        exam_code: 'CLF-C02',
        duration: 90,
        first_active: '2023-09-19',
        description:
            'Validates overall knowledge of the AWS Cloud platform, covering basic cloud concepts, security, compliance, technology, and billing.',
        official_link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
        exam_guide_link:
            'https://docs.aws.amazon.com/pdfs/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.pdf',
        cost_usd: 100,
    },
    {
        id: 2,
        level: 'Foundational',
        full_name: 'AWS Certified AI Practitioner',
        short_name: 'AI Practitioner',
        exam_code: 'AIF-C01',
        duration: 90,
        first_active: '2024-08-13',
        description:
            'Demonstrates fundamental knowledge of AI, machine learning, and generative AI concepts, including relevant AWS services and responsible AI usage.',
        official_link: 'https://aws.amazon.com/certification/certified-ai-practitioner/',
        exam_guide_link:
            'https://docs.aws.amazon.com/pdfs/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.pdf',
        cost_usd: 100,
    },
    {
        id: 3,
        level: 'Associate',
        full_name: 'AWS Certified Solutions Architect – Associate',
        short_name: 'Solutions Architect Assoc',
        exam_code: 'SAA-C03',
        duration: 130,
        first_active: '2022-08-30',
        description:
            'Focuses on the design of cost and performance-optimized solutions, validating knowledge across the AWS Well-Architected Framework.',
        official_link:
            'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
        exam_guide_link:
            'https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS-Certified-Solutions-Architect-Associate_Exam-Guide.pdf',
        cost_usd: 150,
    },
    {
        id: 4,
        level: 'Associate',
        full_name: 'AWS Certified Developer – Associate',
        short_name: 'Developer Assoc',
        exam_code: 'DVA-C02',
        duration: 130,
        first_active: '2023-02-28',
        description:
            'Validates proficiency in developing, testing, deploying, and debugging AWS cloud-based applications using AWS SDKs and CI/CD workflows.',
        official_link: 'https://aws.amazon.com/certification/certified-developer-associate/',
        exam_guide_link:
            'https://d1.awsstatic.com/training-and-certification/docs-dev-assoc/AWS-Certified-Developer-Associate_Exam-Guide.pdf',
        cost_usd: 150,
    },
    {
        id: 5,
        level: 'Associate',
        full_name: 'AWS Certified CloudOps Engineer – Associate',
        short_name: 'CloudOps Engineer Assoc',
        exam_code: 'SOA-C03',
        duration: 130,
        first_active: '2025-09-30',
        description:
            'Validates skills in deploying, managing, and operating scalable and fault-tolerant systems on AWS, focusing on automation and monitoring.',
        official_link: 'https://aws.amazon.com/certification/certified-sysops-admin-associate/',
        exam_guide_link:
            'https://docs.aws.amazon.com/pdfs/aws-certification/latest/cloudops-engineer-associate-03/cloudops-engineer-associate-03.pdf',
        cost_usd: 150,
    },
    {
        id: 6,
        level: 'Associate',
        full_name: 'AWS Certified Data Engineer – Associate',
        short_name: 'Data Engineer Assoc',
        exam_code: 'DEA-C01',
        duration: 130,
        first_active: '2024-03-12',
        description:
            'Focuses on the ability to design, build, and maintain data pipelines, covering data ingestion, transformation, storage, and security.',
        official_link: 'https://aws.amazon.com/certification/certified-data-engineer-associate/',
        exam_guide_link:
            'https://docs.aws.amazon.com/pdfs/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01.pdf',
        cost_usd: 150,
    },
    {
        id: 7,
        level: 'Associate',
        full_name: 'AWS Certified Machine Learning Engineer – Associate',
        short_name: 'ML Engineer Assoc',
        exam_code: 'MLA-C01',
        duration: 130,
        first_active: '2024-10-01',
        description:
            'Validates expertise in building, deploying, and maintaining machine learning models and pipelines using Amazon SageMaker and AI services.',
        official_link:
            'https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/',
        exam_guide_link:
            'https://docs.aws.amazon.com/pdfs/aws-certification/latest/machine-learning-engineer-associate-01/machine-learning-engineer-associate-01.pdf',
        cost_usd: 150,
    },
    {
        id: 8,
        level: 'Professional',
        full_name: 'AWS Certified Solutions Architect – Professional',
        short_name: 'Solutions Architect Prof',
        exam_code: 'SAP-C02',
        duration: 180,
        first_active: '2022-11-15',
        description:
            'Evaluates the ability to design and deploy complex, multi-tier, and reliable applications on AWS at an enterprise scale.',
        official_link:
            'https://aws.amazon.com/certification/certified-solutions-architect-professional/',
        exam_guide_link:
            'https://d1.awsstatic.com/training-and-certification/docs-sa-pro/AWS-Certified-Solutions-Architect-Professional_Exam-Guide.pdf',
        cost_usd: 300,
    },
    {
        id: 9,
        level: 'Professional',
        full_name: 'AWS Certified DevOps Engineer – Professional',
        short_name: 'DevOps Engineer Prof',
        exam_code: 'DOP-C02',
        duration: 180,
        first_active: '2023-03-07',
        description:
            'Focuses on technical expertise in provisioning, operating, and managing distributed application systems on the AWS platform.',
        official_link:
            'https://aws.amazon.com/certification/certified-devops-engineer-professional/',
        exam_guide_link:
            'https://docs.aws.amazon.com/pdfs/aws-certification/latest/devops-engineer-professional-02/devops-engineer-professional-02.pdf',
        cost_usd: 300,
    },
    {
        id: 10,
        level: 'Professional',
        full_name: 'AWS Certified Generative AI Developer – Professional',
        short_name: 'GenAI Developer Prof',
        exam_code: 'AIP-C01',
        duration: 180,
        first_active: '2025-11-18',
        description:
            'Validates advanced skills in building, deploying, and optimizing high-quality generative AI applications using foundation models and RAG.',
        official_link:
            'https://aws.amazon.com/certification/certified-generative-ai-developer-professional/',
        exam_guide_link:
            'https://docs.aws.amazon.com/pdfs/aws-certification/latest/generative-ai-developer-professional-01/generative-ai-developer-professional-01.pdf',
        cost_usd: 300,
    },
    {
        id: 11,
        level: 'Specialty',
        full_name: 'AWS Certified Advanced Networking – Specialty',
        short_name: 'Advanced Networking',
        exam_code: 'ANS-C01',
        duration: 170,
        first_active: '2022-07-12',
        description:
            'Validates advanced technical skills and experience in designing and implementing AWS and hybrid IT network architectures at scale.',
        official_link:
            'https://aws.amazon.com/certification/certified-advanced-networking-specialty/',
        exam_guide_link:
            'https://d1.awsstatic.com/training-and-certification/docs-adv-networking-spec/AWS-Certified-Advanced-Networking-Specialty_Exam-Guide.pdf',
        cost_usd: 300,
    },
    {
        id: 12,
        level: 'Specialty',
        full_name: 'AWS Certified Security – Specialty',
        short_name: 'Security',
        exam_code: 'SCS-C03',
        duration: 170,
        first_active: '2025-12-02',
        description:
            'Focuses on advanced security topics including incident response, logging, infrastructure security, identity management, and data protection.',
        official_link: 'https://aws.amazon.com/certification/certified-security-specialty/',
        exam_guide_link:
            'https://docs.aws.amazon.com/pdfs/aws-certification/latest/security-specialty-03/security-specialty-03.pdf',
        cost_usd: 300,
    },
]

export { examMetadata }
