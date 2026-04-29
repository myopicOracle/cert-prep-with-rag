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
        official_link:
            'https://aws.amazon.com/certification/certified-cloud-practitioner/',
        exam_guide_link:
            'https://docs.aws.amazon.com/pdfs/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.pdf',
        cost_usd: 100,
        domains: [
            {
                number: 1,
                name: 'Cloud Concepts',
                weight: 26,
                task_statements: [
                    { number: '1.1', name: 'Define the AWS Cloud and its value proposition' },
                    { number: '1.2', name: 'Identify aspects of AWS Cloud economics' },
                    { number: '1.3', name: 'List the different cloud architecture design principles' },
                ],
            },
            {
                number: 2,
                name: 'Security and Compliance',
                weight: 25,
                task_statements: [
                    { number: '2.1', name: 'Define the AWS shared responsibility model' },
                    { number: '2.2', name: 'Define AWS Cloud security and compliance concepts' },
                    { number: '2.3', name: 'Identify AWS access management capabilities' },
                    { number: '2.4', name: 'Identify resources for security support' },
                ],
            },
            {
                number: 3,
                name: 'Technology',
                weight: 33,
                task_statements: [
                    { number: '3.1', name: 'Define methods of deploying and operating in the AWS Cloud' },
                    { number: '3.2', name: 'Define the AWS global infrastructure' },
                    { number: '3.3', name: 'Identify the core AWS services' },
                    { number: '3.4', name: 'Identify resources for technology support' },
                ],
            },
            {
                number: 4,
                name: 'Billing and Pricing',
                weight: 16,
                task_statements: [
                    { number: '4.1', name: 'Compare and contrast the various pricing models for AWS' },
                    { number: '4.2', name: 'Recognize the various account structures in relation to AWS billing and pricing' },
                    { number: '4.3', name: 'Identify resources available for billing support' },
                ],
            },
        ],
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
        official_link:
            'https://aws.amazon.com/certification/certified-ai-practitioner/',
        exam_guide_link:
            'https://docs.aws.amazon.com/pdfs/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.pdf',
        cost_usd: 100,
        domains: [
            {
                number: 1,
                name: 'Fundamentals of AI and ML',
                weight: 20,
                task_statements: [
                    { number: '1.1', name: 'Explain basic AI concepts and terminologies' },
                    { number: '1.2', name: 'Identify practical use cases for AI' },
                    { number: '1.3', name: 'Describe the ML development lifecycle' },
                ],
            },
            {
                number: 2,
                name: 'Fundamentals of Generative AI',
                weight: 24,
                task_statements: [
                    { number: '2.1', name: 'Explain the basic concepts of generative AI' },
                    { number: '2.2', name: 'Understand the capabilities and limitations of generative AI for solving business problems' },
                    { number: '2.3', name: 'Describe AWS infrastructure and technologies for building generative AI applications' },
                ],
            },
            {
                number: 3,
                name: 'Applications of Foundation Models',
                weight: 28,
                task_statements: [
                    { number: '3.1', name: 'Describe design considerations for applications that use foundation models' },
                    { number: '3.2', name: 'Choose effective prompt engineering techniques' },
                    { number: '3.3', name: 'Describe the training and fine-tuning process for foundation models' },
                    { number: '3.4', name: 'Describe methods to evaluate foundation model performance' },
                ],
            },
            {
                number: 4,
                name: 'Guidelines for Responsible AI',
                weight: 14,
                task_statements: [
                    { number: '4.1', name: 'Explain the development of AI systems that are responsible' },
                    { number: '4.2', name: 'Recognize the importance of transparent and explainable models' },
                ],
            },
            {
                number: 5,
                name: 'Security, Compliance, and Governance for AI Solutions',
                weight: 14,
                task_statements: [
                    { number: '5.1', name: 'Explain methods to secure AI systems' },
                    { number: '5.2', name: 'Recognize governance and compliance regulations for AI systems' },
                ],
            },
        ],
    },
    {
        id: 3,
        level: 'Associate',
        full_name: 'AWS Certified Solutions Architect – Associate',
        short_name: 'Solutions Architect Associate',
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
        domains: [
            {
                number: 1,
                name: 'Design Secure Architectures',
                weight: 30,
                task_statements: [
                    { number: '1.1', name: 'Design secure access to AWS resources' },
                    { number: '1.2', name: 'Design secure workloads and applications' },
                    { number: '1.3', name: 'Determine appropriate data security controls' },
                ],
            },
            {
                number: 2,
                name: 'Design Resilient Architectures',
                weight: 26,
                task_statements: [
                    { number: '2.1', name: 'Design scalable and loosely coupled architectures' },
                    { number: '2.2', name: 'Design highly available and/or fault-tolerant architectures' },
                ],
            },
            {
                number: 3,
                name: 'Design High-Performing Architectures',
                weight: 24,
                task_statements: [
                    { number: '3.1', name: 'Determine high-performing and/or scalable storage solutions' },
                    { number: '3.2', name: 'Design high-performing and elastic compute solutions' },
                    { number: '3.3', name: 'Determine high-performing database solutions' },
                    { number: '3.4', name: 'Determine high-performing and/or scalable network architectures' },
                    { number: '3.5', name: 'Determine high-performing data ingestion and transformation solutions' },
                ],
            },
            {
                number: 4,
                name: 'Design Cost-Optimized Architectures',
                weight: 20,
                task_statements: [
                    { number: '4.1', name: 'Design cost-optimized storage solutions' },
                    { number: '4.2', name: 'Design cost-optimized compute solutions' },
                    { number: '4.3', name: 'Design cost-optimized database solutions' },
                    { number: '4.4', name: 'Design cost-optimized network architectures' },
                ],
            },
        ],
    },
    {
        id: 4,
        level: 'Associate',
        full_name: 'AWS Certified Developer – Associate',
        short_name: 'Developer Associate',
        exam_code: 'DVA-C02',
        duration: 130,
        first_active: '2023-02-28',
        description:
            'Validates proficiency in developing, testing, deploying, and debugging AWS cloud-based applications using AWS SDKs and CI/CD workflows.',
        official_link:
            'https://aws.amazon.com/certification/certified-developer-associate/',
        exam_guide_link:
            'https://d1.awsstatic.com/training-and-certification/docs-dev-assoc/AWS-Certified-Developer-Associate_Exam-Guide.pdf',
        cost_usd: 150,
        domains: [
            {
                number: 1,
                name: 'Development with AWS Services',
                weight: 32,
                task_statements: [
                    { number: '1.1', name: 'Develop code for applications hosted on AWS' },
                    { number: '1.2', name: 'Develop code for AWS Lambda' },
                    { number: '1.3', name: 'Use data stores in application development' },
                ],
            },
            {
                number: 2,
                name: 'Security',
                weight: 26,
                task_statements: [
                    { number: '2.1', name: 'Implement authentication and/or authorization for applications and AWS services' },
                    { number: '2.2', name: 'Implement encryption by using AWS services' },
                    { number: '2.3', name: 'Manage sensitive data in application code' },
                ],
            },
            {
                number: 3,
                name: 'Deployment',
                weight: 24,
                task_statements: [
                    { number: '3.1', name: 'Prepare application artifacts to be deployed to AWS' },
                    { number: '3.2', name: 'Test applications in development environments' },
                    { number: '3.3', name: 'Automate deployment testing' },
                    { number: '3.4', name: 'Deploy code by using AWS Continuous Integration and Continuous Delivery services' },
                ],
            },
            {
                number: 4,
                name: 'Troubleshooting and Optimization',
                weight: 18,
                task_statements: [
                    { number: '4.1', name: 'Assist in a root cause analysis' },
                    { number: '4.2', name: 'Instrument code for observability' },
                    { number: '4.3', name: 'Optimize applications by using AWS services and features' },
                ],
            },
        ],
    },
    {
        id: 5,
        level: 'Associate',
        full_name: 'AWS Certified CloudOps Engineer – Associate',
        short_name: 'CloudOps Engineer Associate',
        exam_code: 'SOA-C03',
        duration: 130,
        first_active: '2025-09-30',
        description:
            'Validates skills in deploying, managing, and operating scalable and fault-tolerant systems on AWS, focusing on automation and monitoring.',
        official_link:
            'https://aws.amazon.com/certification/certified-sysops-admin-associate/',
        exam_guide_link:
            'https://docs.aws.amazon.com/pdfs/aws-certification/latest/cloudops-engineer-associate-03/cloudops-engineer-associate-03.pdf',
        cost_usd: 150,
        domains: [
            {
                number: 1,
                name: 'Monitoring, Logging, Analysis, Remediation, and Performance Optimization',
                weight: 22,
                task_statements: [
                    { number: '1.1', name: 'Implement metrics, alarms, and filters by using AWS monitoring and logging services' },
                    { number: '1.2', name: 'Identify and remediate issues by using monitoring and availability metrics' },
                    { number: '1.3', name: 'Implement performance optimization strategies for compute, storage, and database resources' },
                ],
            },
            {
                number: 2,
                name: 'Reliability and Business Continuity',
                weight: 22,
                task_statements: [
                    { number: '2.1', name: 'Implement scalability and elasticity' },
                    { number: '2.2', name: 'Implement highly available and resilient environments' },
                    { number: '2.3', name: 'Implement backup and restore strategies' },
                ],
            },
            {
                number: 3,
                name: 'Deployment, Provisioning, and Automation',
                weight: 22,
                task_statements: [
                    { number: '3.1', name: 'Provision and maintain cloud resources' },
                    { number: '3.2', name: 'Automate the management of existing resources' },
                ],
            },
            {
                number: 4,
                name: 'Security and Compliance',
                weight: 16,
                task_statements: [
                    { number: '4.1', name: 'Implement and manage security and compliance tools and policies' },
                    { number: '4.2', name: 'Implement strategies to protect data and infrastructure' },
                ],
            },
            {
                number: 5,
                name: 'Networking and Content Delivery',
                weight: 18,
                task_statements: [
                    { number: '5.1', name: 'Implement and optimize networking features and connectivity' },
                    { number: '5.2', name: 'Configure domains, DNS services, and content delivery' },
                    { number: '5.3', name: 'Troubleshoot network connectivity issues' },
                ],
            },
        ],
    },
    {
        id: 6,
        level: 'Associate',
        full_name: 'AWS Certified Data Engineer – Associate',
        short_name: 'Data Engineer Associate',
        exam_code: 'DEA-C01',
        duration: 130,
        first_active: '2024-03-12',
        description:
            'Focuses on the ability to design, build, and maintain data pipelines, covering data ingestion, transformation, storage, and security.',
        official_link:
            'https://aws.amazon.com/certification/certified-data-engineer-associate/',
        exam_guide_link:
            'https://docs.aws.amazon.com/pdfs/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01.pdf',
        cost_usd: 150,
        domains: [
            {
                number: 1,
                name: 'Data Ingestion and Transformation',
                weight: 34,
                task_statements: [
                    { number: '1.1', name: 'Perform data ingestion' },
                    { number: '1.2', name: 'Transform and process data' },
                    { number: '1.3', name: 'Orchestrate data pipelines' },
                    { number: '1.4', name: 'Apply programming concepts' },
                ],
            },
            {
                number: 2,
                name: 'Data Store Management',
                weight: 26,
                task_statements: [
                    { number: '2.1', name: 'Choose a data store' },
                    { number: '2.2', name: 'Understand data cataloging systems' },
                    { number: '2.3', name: 'Manage the lifecycle of data' },
                    { number: '2.4', name: 'Design data models and schema evolution' },
                ],
            },
            {
                number: 3,
                name: 'Data Operations and Support',
                weight: 22,
                task_statements: [
                    { number: '3.1', name: 'Automate data processing by using AWS services' },
                    { number: '3.2', name: 'Analyze data by using AWS services' },
                    { number: '3.3', name: 'Maintain and monitor data pipelines' },
                    { number: '3.4', name: 'Ensure data quality' },
                ],
            },
            {
                number: 4,
                name: 'Data Security and Governance',
                weight: 18,
                task_statements: [
                    { number: '4.1', name: 'Apply authentication mechanisms' },
                    { number: '4.2', name: 'Apply authorization mechanisms' },
                    { number: '4.3', name: 'Ensure data encryption and masking' },
                    { number: '4.4', name: 'Prepare logs for audit' },
                    { number: '4.5', name: 'Understand data privacy and governance' },
                ],
            },
        ],
    },
    {
        id: 7,
        level: 'Associate',
        full_name: 'AWS Certified Machine Learning Engineer – Associate',
        short_name: 'ML Engineer Associate',
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
        domains: [
            {
                number: 1,
                name: 'Data Preparation for Machine Learning',
                weight: 28,
                task_statements: [
                    { number: '1.1', name: 'Ingest and store data' },
                    { number: '1.2', name: 'Transform data and perform feature engineering' },
                    { number: '1.3', name: 'Ensure data integrity and prepare data for modeling' },
                ],
            },
            {
                number: 2,
                name: 'ML Model Development',
                weight: 26,
                task_statements: [
                    { number: '2.1', name: 'Choose a modeling approach' },
                    { number: '2.2', name: 'Train and refine models' },
                    { number: '2.3', name: 'Analyze model performance' },
                ],
            },
            {
                number: 3,
                name: 'Deployment and Orchestration of ML Workflows',
                weight: 22,
                task_statements: [
                    { number: '3.1', name: 'Select deployment infrastructure based on existing architecture and requirements' },
                    { number: '3.2', name: 'Create and script infrastructure based on existing architecture and requirements' },
                    { number: '3.3', name: 'Use automated orchestration tools to set up continuous integration and continuous delivery pipelines' },
                ],
            },
            {
                number: 4,
                name: 'ML Solution Monitoring, Maintenance, and Security',
                weight: 24,
                task_statements: [
                    { number: '4.1', name: 'Monitor model inference' },
                    { number: '4.2', name: 'Monitor and optimize infrastructure and costs' },
                    { number: '4.3', name: 'Secure AWS resources' },
                ],
            },
        ],
    },
    {
        id: 8,
        level: 'Professional',
        full_name: 'AWS Certified Solutions Architect – Professional',
        short_name: 'Solutions Architect Professional',
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
        domains: [
            {
                number: 1,
                name: 'Design Solutions for Organizational Complexity',
                weight: 26,
                task_statements: [
                    { number: '1.1', name: 'Architect network connectivity strategies' },
                    { number: '1.2', name: 'Prescribe security controls' },
                    { number: '1.3', name: 'Design reliable and resilient architectures' },
                    { number: '1.4', name: 'Design a multi-account AWS environment' },
                    { number: '1.5', name: 'Determine cost optimization and visibility strategies' },
                ],
            },
            {
                number: 2,
                name: 'Design for New Solutions',
                weight: 29,
                task_statements: [
                    { number: '2.1', name: 'Design a deployment strategy to meet business requirements' },
                    { number: '2.2', name: 'Design a solution to ensure business continuity' },
                    { number: '2.3', name: 'Determine security controls based on requirements' },
                    { number: '2.4', name: 'Design a strategy to meet reliability requirements' },
                    { number: '2.5', name: 'Design a solution to meet performance objectives' },
                    { number: '2.6', name: 'Determine a cost optimization strategy to meet solution goals and objectives' },
                ],
            },
            {
                number: 3,
                name: 'Continuous Improvement for Existing Solutions',
                weight: 25,
                task_statements: [
                    { number: '3.1', name: 'Determine a strategy to improve overall operational excellence' },
                    { number: '3.2', name: 'Determine a strategy to improve security' },
                    { number: '3.3', name: 'Determine a strategy to improve performance' },
                    { number: '3.4', name: 'Determine a strategy to improve reliability' },
                    { number: '3.5', name: 'Identify opportunities for cost optimizations' },
                ],
            },
            {
                number: 4,
                name: 'Accelerate Workload Migration and Modernization',
                weight: 20,
                task_statements: [
                    { number: '4.1', name: 'Select existing workloads and processes for potential migration' },
                    { number: '4.2', name: 'Determine the optimal migration approach for existing workloads' },
                    { number: '4.3', name: 'Determine a new architecture for existing workloads' },
                    { number: '4.4', name: 'Determine opportunities for modernization and enhancements' },
                ],
            },
        ],
    },
    {
        id: 9,
        level: 'Professional',
        full_name: 'AWS Certified DevOps Engineer – Professional',
        short_name: 'DevOps Engineer Professional',
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
        domains: [
            {
                number: 1,
                name: 'SDLC Automation',
                weight: 22,
                task_statements: [
                    { number: '1.1', name: 'Implement CI/CD pipelines' },
                    { number: '1.2', name: 'Integrate automated testing into CI/CD pipelines' },
                    { number: '1.3', name: 'Build and manage artifacts' },
                    { number: '1.4', name: 'Implement deployment strategies for instance, container, and serverless environments' },
                ],
            },
            {
                number: 2,
                name: 'Configuration Management and IaC',
                weight: 17,
                task_statements: [
                    { number: '2.1', name: 'Define cloud infrastructure and reusable components to provision and manage systems throughout their lifecycle' },
                    { number: '2.2', name: 'Deploy automation to create, onboard, and secure AWS accounts in a multi-account or multi-Region environment' },
                    { number: '2.3', name: 'Design and build automated solutions for complex tasks and large-scale environments' },
                ],
            },
            {
                number: 3,
                name: 'Resilient Cloud Solutions',
                weight: 15,
                task_statements: [
                    { number: '3.1', name: 'Implement highly available solutions to meet resilience and business requirements' },
                    { number: '3.2', name: 'Implement solutions that are scalable to meet business requirements' },
                    { number: '3.3', name: 'Implement automated recovery processes to meet RTO and RPO requirements' },
                ],
            },
            {
                number: 4,
                name: 'Monitoring and Logging',
                weight: 15,
                task_statements: [
                    { number: '4.1', name: 'Configure the collection, aggregation, and storage of logs and metrics' },
                    { number: '4.2', name: 'Audit, monitor, and analyze logs and metrics to detect issues' },
                    { number: '4.3', name: 'Automate monitoring and event management of complex environments' },
                ],
            },
            {
                number: 5,
                name: 'Incident and Event Response',
                weight: 14,
                task_statements: [
                    { number: '5.1', name: 'Manage event sources to process, notify, and take action in response to events' },
                    { number: '5.2', name: 'Implement configuration changes in response to events' },
                    { number: '5.3', name: 'Troubleshoot system and application failures' },
                ],
            },
            {
                number: 6,
                name: 'Security and Compliance',
                weight: 17,
                task_statements: [
                    { number: '6.1', name: 'Implement techniques for identity and access management at scale' },
                    { number: '6.2', name: 'Apply automation for security controls and data protection' },
                    { number: '6.3', name: 'Implement security monitoring and auditing solutions' },
                ],
            },
        ],
    },
    {
        id: 10,
        level: 'Professional',
        full_name: 'AWS Certified Generative AI Developer – Professional',
        short_name: 'GenAI Developer Professional',
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
        domains: [
            {
                number: 1,
                name: 'Foundation Model Integration, Data Management, and Compliance',
                weight: 31,
                task_statements: [
                    { number: '1.1', name: 'Analyze requirements and design GenAI solutions' },
                    { number: '1.2', name: 'Select and configure foundation models' },
                    { number: '1.3', name: 'Implement data validation and processing pipelines for FM consumption' },
                    { number: '1.4', name: 'Design and implement vector store solutions' },
                    { number: '1.5', name: 'Design retrieval mechanisms for FM augmentation' },
                    { number: '1.6', name: 'Implement prompt engineering strategies and governance for FM interactions' },
                ],
            },
            {
                number: 2,
                name: 'Implementation and Integration',
                weight: 26,
                task_statements: [
                    { number: '2.1', name: 'Implement agentic AI solutions and tool integrations' },
                    { number: '2.2', name: 'Implement model deployment strategies' },
                    { number: '2.3', name: 'Design and implement enterprise integration architectures' },
                    { number: '2.4', name: 'Implement FM API integrations' },
                    { number: '2.5', name: 'Implement application integration patterns and development tools' },
                ],
            },
            {
                number: 3,
                name: 'AI Safety, Security, and Governance',
                weight: 20,
                task_statements: [
                    { number: '3.1', name: 'Implement input and output safety controls' },
                    { number: '3.2', name: 'Implement data security and privacy controls' },
                    { number: '3.3', name: 'Implement AI governance and compliance mechanisms' },
                    { number: '3.4', name: 'Implement responsible AI principles' },
                ],
            },
            {
                number: 4,
                name: 'Operational Efficiency and Optimization for GenAI Applications',
                weight: 12,
                task_statements: [
                    { number: '4.1', name: 'Implement cost optimization and resource efficiency strategies' },
                    { number: '4.2', name: 'Optimize application performance' },
                    { number: '4.3', name: 'Implement monitoring systems for GenAI applications' },
                ],
            },
            {
                number: 5,
                name: 'Testing, Validation, and Troubleshooting',
                weight: 11,
                task_statements: [
                    { number: '5.1', name: 'Implement evaluation systems for GenAI' },
                    { number: '5.2', name: 'Troubleshoot GenAI applications' },
                ],
            },
        ],
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
        domains: [
            {
                number: 1,
                name: 'Network Design',
                weight: 30,
                task_statements: [
                    { number: '1.1', name: 'Design a solution that incorporates edge network services to optimize user performance and traffic management for global architectures' },
                    { number: '1.2', name: 'Design DNS solutions that meet public, private, and hybrid requirements' },
                    { number: '1.3', name: 'Design solutions that integrate load balancing to meet high availability, scalability, and security requirements' },
                    { number: '1.4', name: 'Define logging and monitoring requirements across AWS and hybrid networks' },
                    { number: '1.5', name: 'Design a routing strategy and connectivity architecture between on-premises networks and the AWS Cloud' },
                    { number: '1.6', name: 'Design a routing strategy and connectivity architecture that include multiple AWS accounts, AWS Regions, and VPCs to support different connectivity patterns' },
                ],
            },
            {
                number: 2,
                name: 'Network Implementation',
                weight: 26,
                task_statements: [
                    { number: '2.1', name: 'Implement routing and connectivity between on-premises networks and the AWS Cloud' },
                    { number: '2.2', name: 'Implement routing and connectivity across multiple AWS accounts, Regions, and VPCs to support different connectivity patterns' },
                    { number: '2.3', name: 'Implement complex hybrid and multi-account DNS architectures' },
                    { number: '2.4', name: 'Automate and configure network infrastructure' },
                ],
            },
            {
                number: 3,
                name: 'Network Management and Operation',
                weight: 20,
                task_statements: [
                    { number: '3.1', name: 'Maintain routing and connectivity on AWS and hybrid networks' },
                    { number: '3.2', name: 'Monitor and analyze network traffic to troubleshoot and optimize connectivity patterns' },
                    { number: '3.3', name: 'Optimize AWS networks for performance, reliability, and cost-effectiveness' },
                ],
            },
            {
                number: 4,
                name: 'Network Security, Compliance, and Governance',
                weight: 24,
                task_statements: [
                    { number: '4.1', name: 'Implement and maintain network features to meet security and compliance needs and requirements' },
                    { number: '4.2', name: 'Validate and audit security by using network monitoring and logging services' },
                    { number: '4.3', name: 'Implement and maintain confidentiality of data and communications of the network' },
                ],
            },
        ],
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
        official_link:
            'https://aws.amazon.com/certification/certified-security-specialty/',
        exam_guide_link:
            'https://docs.aws.amazon.com/pdfs/aws-certification/latest/security-specialty-03/security-specialty-03.pdf',
        cost_usd: 300,
        domains: [
            {
                number: 1,
                name: 'Detection',
                weight: 16,
                task_statements: [
                    { number: '1.1', name: 'Design and implement monitoring and alerting solutions for an AWS account or organization' },
                    { number: '1.2', name: 'Design and implement logging solutions' },
                    { number: '1.3', name: 'Troubleshoot security monitoring, logging, and alerting solutions' },
                ],
            },
            {
                number: 2,
                name: 'Incident Response',
                weight: 14,
                task_statements: [
                    { number: '2.1', name: 'Design and test an incident response plan' },
                    { number: '2.2', name: 'Respond to security events' },
                ],
            },
            {
                number: 3,
                name: 'Infrastructure Security',
                weight: 18,
                task_statements: [
                    { number: '3.1', name: 'Design, implement, and troubleshoot security controls for network edge services' },
                    { number: '3.2', name: 'Design, implement, and troubleshoot security controls for compute workloads' },
                    { number: '3.3', name: 'Design and troubleshoot network security controls' },
                ],
            },
            {
                number: 4,
                name: 'Identity and Access Management',
                weight: 20,
                task_statements: [
                    { number: '4.1', name: 'Design, implement, and troubleshoot authentication strategies' },
                    { number: '4.2', name: 'Design, implement, and troubleshoot authorization strategies' },
                ],
            },
            {
                number: 5,
                name: 'Data Protection',
                weight: 18,
                task_statements: [
                    { number: '5.1', name: 'Design and implement controls for data in transit' },
                    { number: '5.2', name: 'Design and implement controls for data at rest' },
                    { number: '5.3', name: 'Design and implement controls to protect confidential data, credentials, secrets, and cryptographic key materials' },
                ],
            },
            {
                number: 6,
                name: 'Security Foundations and Governance',
                weight: 14,
                task_statements: [
                    { number: '6.1', name: 'Develop a strategy to centrally deploy and manage AWS accounts' },
                    { number: '6.2', name: 'Implement a secure and consistent deployment strategy for cloud resources' },
                    { number: '6.3', name: 'Evaluate the compliance of AWS resources' },
                ],
            },
        ],
    },
]

export { examMetadata }
