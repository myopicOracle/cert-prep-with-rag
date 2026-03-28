const questions = [
    {
        scenario:
            'A data engineer is tasked with storing infrequently accessed archival data that must be retrievable within minutes for compliance audits, while minimizing costs. The data needs to remain available for at least 7 years.',
        correct_answer: 'S3 Glacier Flexible Retrieval',
        wrong_answer_1: 'S3 Standard',
        wrong_answer_2: 'S3 One Zone-Infrequent Access',
        wrong_answer_3: 'S3 Glacier Deep Archive',
        correct_explanation:
            'S3 Glacier Flexible Retrieval offers retrieval in minutes to hours (depending on the tier selected) and is cost-effective for data accessed infrequently but requiring quicker access than Deep Archive. It supports long-term retention policies and 99.999999999% durability.',
        wrong_explanation_1:
            'S3 Standard is designed for frequently accessed "hot" data and incurs higher storage costs unsuitable for archival use.',
        wrong_explanation_2:
            'S3 One Zone-IA stores data in a single Availability Zone, reducing durability and making it inappropriate for critical compliance data.',
        wrong_explanation_3:
            'S3 Glacier Deep Archive is the lowest-cost option but requires up to 12 hours for retrieval, which exceeds the minutes requirement for audits.',
    },
    {
        scenario:
            'You need to automatically discover the schema and create metadata tables for semi-structured data files stored in Amazon S3 before running ETL transformations with AWS Glue.',
        correct_answer: 'AWS Glue Crawler',
        wrong_answer_1: 'AWS Glue ETL Job',
        wrong_answer_2: 'AWS Glue Data Catalog',
        wrong_answer_3: 'AWS Glue DataBrew',
        correct_explanation:
            'AWS Glue Crawlers scan your data sources (like S3), infer schemas, classify data, and automatically populate the Glue Data Catalog with metadata tables.',
        wrong_explanation_1:
            'Glue ETL Jobs execute the actual Spark-based transformation scripts but do not perform schema discovery.',
        wrong_explanation_2:
            'The Glue Data Catalog is the central metadata repository; the Crawler is the tool that discovers and fills it with tables.',
        wrong_explanation_3:
            'DataBrew is a visual data-preparation tool for cleaning and profiling but does not automatically crawl S3 for schema inference and cataloging.',
    },
    {
        scenario:
            'A team needs a fully managed petabyte-scale data warehouse that supports standard SQL queries, columnar storage for fast analytics, and integration with BI tools like QuickSight while separating storage and compute costs.',
        correct_answer: 'Amazon Redshift',
        wrong_answer_1: 'Amazon DynamoDB',
        wrong_answer_2: 'AWS Glue',
        wrong_answer_3: 'Amazon Athena',
        correct_explanation:
            'Amazon Redshift is purpose-built for OLAP workloads with massively parallel processing (MPP), columnar compression, Redshift Spectrum for querying S3 directly, and independent scaling of storage/compute.',
        wrong_explanation_1:
            'DynamoDB is a NoSQL key-value database optimized for high-throughput transactional (OLTP) workloads, not complex analytical SQL queries.',
        wrong_explanation_2:
            'Glue is an ETL and data-integration service for preparing and moving data, not a queryable data warehouse.',
        wrong_explanation_3:
            'Athena is serverless for ad-hoc S3 queries but lacks the managed warehouse features, concurrency scaling, and performance optimizations of Redshift for repeated complex analytics.',
    },
]

const services = [
    {
        name: 's3',
        overview:
            'Amazon S3 is scalable object storage for data lakes, backups, static websites, and big data workloads.',
        deep_dive:
            'S3 offers 99.999999999% durability across multiple Availability Zones, multiple storage classes (Standard, Intelligent-Tiering, Standard-IA, Glacier Flexible Retrieval, Glacier Deep Archive), lifecycle policies for automatic tiering, versioning, server-side encryption (SSE-S3, SSE-KMS), bucket policies, and seamless integration with Lambda, Glue, and Redshift for modern data pipelines.',
    },
    {
        name: 'glue',
        overview:
            'AWS Glue is a serverless ETL service that simplifies discovering, preparing, and combining data for analytics and ML.',
        deep_dive:
            'Glue includes Crawlers for automatic schema discovery and cataloging, visual ETL with Glue Studio, Spark-based Jobs for transformations, the central Data Catalog (Hive Metastore compatible), DataBrew for no-code data preparation, and native connectors to S3, Redshift, DynamoDB, RDS, and more. It scales automatically and integrates with Lake Formation for governance.',
    },
    {
        name: 'redshift',
        overview:
            'Amazon Redshift is a fully managed petabyte-scale cloud data warehouse optimized for complex SQL analytics.',
        deep_dive:
            'Redshift uses columnar storage and massively parallel processing (MPP) for high performance. Key features include RA3 nodes (storage-compute separation), Redshift Spectrum for querying S3 data without loading, materialized views, concurrency scaling, federated queries to operational databases, integration with Glue Data Catalog and QuickSight, and automated backups/snapshots.',
    },
    {
        name: 'dynamodb',
        overview:
            'Amazon DynamoDB is a serverless NoSQL key-value and document database built for high-scale applications.',
        deep_dive:
            'DynamoDB delivers single-digit millisecond latency at any scale with automatic partitioning and global tables for multi-region replication. It supports on-demand or provisioned capacity, DynamoDB Streams for change data capture, DAX for in-memory acceleration, PartiQL for SQL-like queries, and tight integration with Lambda and Kinesis for event-driven data pipelines.',
    },
    {
        name: 'lambda',
        overview:
            'AWS Lambda is serverless compute that runs code in response to events without managing servers.',
        deep_dive:
            'Lambda supports 8+ languages, scales instantly to thousands of concurrent executions, and charges only for compute time. It integrates natively with 200+ AWS services (S3 events, DynamoDB streams, SNS, SQS), offers Layers for reusable code, Provisioned Concurrency for low-latency workloads, Function URLs, and is commonly used in data pipelines for real-time transformations and orchestration with Step Functions.',
    },
]

export { questions, services }
