import { createClient } from '@/app/utils/supabase/client'

export async function fetchQuestions() {
    try {
        const supabase = createClient()
        const { data, error } = await supabase.from('questions').select('*')

        if (error) {
            throw error
        }

        console.log('Data returned by DB call: ', data)
        console.log('Return type: ', typeof data)
        return data
    } catch (error) {
        console.log('Database ERROR: ', error)
        throw new Error('Failed to fetch questions from database.')
    }
}

// Data returned by DB call:  [
//   {
//     id: '7701b6e4-1e10-4bea-a6ad-84aed7416d1b',
//     task_statement_id: null,
//     scenario: 'A data engineer is tasked with storing infrequently accessed archival data that must be retrievable within minutes for compliance audits, while minimizing costs. The data needs to remain available for at least 7 years.',
//     correct_answer: 'S3 Glacier Flexible Retrieval',
//     wrong_answer_1: 'S3 Standard',
//     wrong_answer_2: 'S3 One Zone-Infrequent Access',
//     wrong_answer_3: 'S3 Glacier Deep Archive',
//     correct_explanation: 'S3 Glacier Flexible Retrieval offers retrieval in minutes to hours (depending on the tier selected) and is cost-effective for data accessed infrequently but requiring quicker access than Deep Archive. It supports long-term retention policies and 99.999999999% durability.',
//     wrong_explanation_1: 'S3 Standard is designed for frequently accessed "hot" data and incurs higher storage costs unsuitable for archival use.',
//     wrong_explanation_2: 'S3 One Zone-IA stores data in a single Availability Zone, reducing durability and making it inappropriate for critical compliance data.',
//     wrong_explanation_3: 'S3 Glacier Deep Archive is the lowest-cost option but requires up to 12 hours for retrieval, which exceeds the minutes requirement for audits.',
//     created_at: '2026-03-28T09:34:17.756956+00:00'
//   },
//   {
//     id: '18869526-a4b9-4277-b6e6-7c6bca963f0e',
//     task_statement_id: null,
//     scenario: 'You need to automatically discover the schema and create metadata tables for semi-structured data files stored in Amazon S3 before running ETL transformations with AWS Glue.',
//     correct_answer: 'AWS Glue Crawler',
//     wrong_answer_1: 'AWS Glue ETL Job',
//     wrong_answer_2: 'AWS Glue Data Catalog',
//     wrong_answer_3: 'AWS Glue DataBrew',
//     correct_explanation: 'AWS Glue Crawlers scan your data sources (like S3), infer schemas, classify data, and automatically populate the Glue Data Catalog with metadata tables.',
//     wrong_explanation_1: 'Glue ETL Jobs execute the actual Spark-based transformation scripts but do not perform schema discovery.',
//     wrong_explanation_2: 'The Glue Data Catalog is the central metadata repository; the Crawler is the tool that discovers and fills it with tables.',
//     wrong_explanation_3: 'DataBrew is a visual data-preparation tool for cleaning and profiling but does not automatically crawl S3 for schema inference and cataloging.',
//     created_at: '2026-03-28T09:40:23.987192+00:00'
//   },
//   {
//     id: '55a9c3a1-14af-4a79-8e2a-f92e714f1246',
//     task_statement_id: null,
//     scenario: 'A team needs a fully managed petabyte-scale data warehouse that supports standard SQL queries, columnar storage for fast analytics, and integration with BI tools like QuickSight while separating storage and compute costs.',
//     correct_answer: 'Amazon Redshift',
//     wrong_answer_1: 'Amazon DynamoDB',
//     wrong_answer_2: 'AWS Glue',
//     wrong_answer_3: 'Amazon Athena',
//     correct_explanation: 'Amazon Redshift is purpose-built for OLAP workloads with massively parallel processing (MPP), columnar compression, Redshift Spectrum for querying S3 directly, and independent scaling of storage/compute.',
//     wrong_explanation_1: 'DynamoDB is a NoSQL key-value database optimized for high-throughput transactional (OLTP) workloads, not complex analytical SQL queries.',
//     wrong_explanation_2: 'Glue is an ETL and data-integration service for preparing and moving data, not a queryable data warehouse.',
//     wrong_explanation_3: 'Athena is serverless for ad-hoc S3 queries but lacks the managed warehouse features, concurrency scaling, and performance optimizations of Redshift for repeated complex analytics.',
//     created_at: '2026-03-28T09:40:23.987192+00:00'
//   }
// ]
// Return type:  object
