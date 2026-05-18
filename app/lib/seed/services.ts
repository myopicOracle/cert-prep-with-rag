export const services = [
    {
        name: 'acm',
        overview:
            'AWS Certificate Manager provisions, manages, and deploys public and private SSL/TLS certificates for AWS services.',
        deep_dive:
            'Public certificates issued by ACM are free; private CA usage incurs monthly fees; ACM certificates can be attached to CloudFront, ALB, NLB (via ACM), API Gateway, App Runner but NOT directly to EC2 instances; CloudFront requires the certificate to be in us-east-1 (N. Virginia); ACM auto-renews certificates that it issued; imported certificates do not auto-renew; supports RSA 2048/3072/4096 and ECDSA P-256/P-384; DNS or email validation; integrates with Route 53 for one-click DNS validation.',
    },
    {
        name: 'alb',
        overview:
            'Application Load Balancer, a Layer 7 load balancer for HTTP/HTTPS/gRPC traffic.',
        deep_dive:
            'Operates at OSI Layer 7; supports content-based routing via listener rules with conditions: host-header, http-header, http-request-method, path-pattern, query-string, source-ip; default routing algorithm is round robin, can also use least outstanding requests; targets: EC2 instances, IP addresses, Lambda functions, containers; requires at least two subnets in different AZs; supports SSL/TLS termination, SNI for multiple certs, WebSockets, HTTP/2, redirects, fixed responses; integrates with WAF and Cognito for authentication; preserves client IP via X-Forwarded-For header; default idle timeout 60s (max 4000s); supports sticky sessions via cookies.',
    },
    {
        name: 'amazon-q',
        overview:
            'Generative AI-powered assistant for business tasks and AWS questions.',
        deep_dive:
            'Amazon Q Business connects to enterprise data (S3, SharePoint, Salesforce, Confluence, etc.) to answer questions and generate content; Amazon Q in AWS Management Console answers questions about AWS services, troubleshoots, and explains resources; supports IAM Identity Center for user authentication; admin can configure topic-level controls and guardrails; uses retrieval-augmented generation (RAG) over connected data sources.',
    },
    {
        name: 'amazon-q-developer',
        overview:
            'AI coding assistant for developers (formerly CodeWhisperer).',
        deep_dive:
            'Provides real-time code suggestions in IDEs (VS Code, IntelliJ, JetBrains, Visual Studio, AWS Cloud9, Lambda console, AWS Toolkit); supports Python, Java, JavaScript, TypeScript, C#, Go, Rust, PHP, Kotlin, SQL and others; includes security scans to detect vulnerabilities; reference tracker flags suggestions similar to training data with attribution; offers /dev, /transform, /test agents; Free Tier available; Pro tier for enterprise admin controls, customizations on private repos, higher limits.',
    },
    {
        name: 'ams',
        overview:
            'AWS Managed Services provides ongoing management of AWS infrastructure on behalf of enterprises.',
        deep_dive:
            'Offers operational management for AWS workloads including provisioning, patching, monitoring, backup, incident response, security, and compliance; two operating models: AMS Accelerate (works with existing accounts) and AMS Advanced (more prescriptive with landing zone); follows ITIL-based processes for change management; integrates with Service Catalog for self-service provisioning; targeted at large enterprises wanting to outsource cloud operations.',
    },
    {
        name: 'api-gateway',
        overview:
            'Managed service for creating, publishing, and securing REST, HTTP, and WebSocket APIs.',
        deep_dive:
            'Three API types: REST API (full features, caching, API keys, usage plans), HTTP API (cheaper, simpler, lower latency, no built-in caching), WebSocket API (real-time bidirectional); request flow: Method Request -> Integration Request -> Backend -> Integration Response -> Method Response; integrations: Lambda (proxy/non-proxy), HTTP, Mock, AWS Service, VPC Link; mapping templates use Velocity Template Language (VTL) for non-proxy only; authorizers: AWS_IAM, Cognito User Pool, Lambda authorizer; usage plans tie API keys to throttling/quota; stage variables enable canary deployments; cache TTL configurable, invalidate via Cache-Control: max-age=0; CORS must be explicitly enabled.',
    },
    {
        name: 'application-composer',
        overview:
            'Visual builder for designing and building serverless applications with drag-and-drop.',
        deep_dive:
            'Generates infrastructure-as-code CloudFormation/SAM templates from a visual canvas; supports Lambda, API Gateway, Step Functions, DynamoDB, S3, EventBridge, SQS, SNS and other serverless resources; bidirectional sync between canvas and template code; integrated into the AWS Management Console and VS Code via AWS Toolkit; no additional cost for the service itself.',
    },
    {
        name: 'artifact',
        overview:
            'Self-service portal for on-demand access to AWS compliance reports and agreements.',
        deep_dive:
            'Provides downloadable compliance reports (SOC, PCI DSS, ISO, FedRAMP, HIPAA, etc.) under NDA; provides AWS agreements like the Business Associate Agreement (BAA) for HIPAA workloads; only proves AWS infrastructure compliance, not customer workloads (use Audit Manager for that); access controlled via IAM; no charge for the service.',
    },
    {
        name: 'athena',
        overview:
            'Serverless interactive SQL query service for data in Amazon S3.',
        deep_dive:
            'Uses Presto/Trino engine; pay per TB of data scanned; supports CSV, JSON, ORC, Parquet, Avro; partitioning and columnar formats (Parquet, ORC) reduce cost and improve performance; integrates with AWS Glue Data Catalog as the metastore; supports federated queries to RDS, DynamoDB, Redshift, etc.; workgroups isolate queries and enforce data scan limits; Athena for Apache Spark available; results stored in S3; CTAS and INSERT INTO supported.',
    },
    {
        name: 'audit-manager',
        overview:
            'Service that continuously audits AWS usage against compliance frameworks.',
        deep_dive:
            'Uses pre-built frameworks for PCI DSS, GDPR, HIPAA, SOC 2, CIS, NIST, and AWS best practices; collects evidence from AWS Config, Security Hub, CloudTrail, License Manager; differs from AWS Artifact (which only proves AWS infrastructure compliance) by auditing your actual usage; supports custom frameworks; generates assessment reports for auditors; evidence collected continuously and saved in S3.',
    },
    {
        name: 'augmented-ai',
        overview:
            'Amazon A2I provides human review workflows for machine learning predictions.',
        deep_dive:
            'Adds human-in-the-loop step before ML output proceeds; pre-built integrations with Amazon Rekognition (image moderation) and Amazon Textract (key-value extraction); supports custom workflows with any ML model; workforce options: private workforce, Amazon Mechanical Turk, third-party vendors; A2I creates a human review loop based on confidence thresholds; outputs sent to S3.',
    },
    {
        name: 'aurora',
        overview:
            'MySQL- and PostgreSQL-compatible relational database with cloud-native storage.',
        deep_dive:
            'Storage automatically grows from 10 GB to 128 TB in 10 GB increments; storage replicated 6 ways across 3 AZs (2 copies per AZ); up to 15 read replicas with sub-10ms replication lag; failover typically completes in under 30 seconds; up to 5x MySQL and 3x PostgreSQL throughput; supports Aurora Serverless v1/v2 for on-demand auto-scaling capacity; Aurora Global Database replicates to 5 secondary regions with <1s typical replication, RPO ~1s, RTO <1min; Aurora Backtrack rewinds DB without restore (MySQL only); IAM database authentication; data API for serverless HTTP access.',
    },
    {
        name: 'auto-scaling',
        overview:
            'Automatically adjusts EC2 instance capacity in an Auto Scaling group to meet demand.',
        deep_dive:
            'ASG defined by launch template (or legacy launch config), min/desired/max size, and VPC subnets; scaling policies: simple, step, target tracking, predictive, scheduled; target tracking predefined metrics include ASGAverageCPUUtilization, ALBRequestCountPerTarget; default cooldown 300s; lifecycle hooks pause launch/terminate for custom actions (default wait 3600s, max 7200s); health check types: EC2 (default) and ELB; ASGs are regional, span multi-AZ but not multi-Region; cluster placement groups cannot span AZs; can mix instance types and use spot/on-demand mix.',
    },
    {
        name: 'aws-budgets',
        overview:
            'Tool to set custom cost and usage budgets with alert thresholds.',
        deep_dive:
            'Tracks costs, usage, RI/Savings Plans coverage and utilization; supports daily, monthly, quarterly, annual budget periods; alerts via SNS or email when actual or forecasted usage exceeds thresholds; budget actions can automatically apply IAM policies or stop EC2/RDS instances when thresholds hit; first 2 budgets per account free, then $0.02 per budget per day.',
    },
    {
        name: 'aws-cli',
        overview:
            'Unified command-line tool for managing AWS services across platforms.',
        deep_dive:
            'Open-source tool for Linux, macOS, Windows; v2 is the current version with auto-prompt, command completion, SSO support; configure with aws configure for access key/secret/region or use named profiles; can assume IAM roles via profile config; supports MFA; output formats: json, text, table, yaml; pagination handled via --no-paginate or --max-items; CLI uses same API as SDKs.',
    },
    {
        name: 'aws-iq',
        overview:
            'Marketplace connecting customers with AWS Certified third-party experts for project work.',
        deep_dive:
            'Customers post project requests; AWS Certified experts (individuals and firms) respond; experts and customers agree on milestones and pricing; AWS handles invoicing and payments; not for ongoing managed services (use AMS); available in most AWS regions; uses cross-account IAM roles for expert access to customer resources.',
    },
    {
        name: 'backup',
        overview:
            'Centralized service to automate and manage backups across AWS services.',
        deep_dive:
            'Supports backups for EBS, EC2, RDS, Aurora, DynamoDB, EFS, FSx, Storage Gateway, S3, Neptune, DocumentDB, Redshift, VMware workloads; backup plans define frequency, retention, lifecycle to cold storage; backup vaults hold recovery points with optional vault lock for WORM; supports cross-region and cross-account copy; AWS Backup Audit Manager checks compliance; tag-based resource assignment; default retention can exceed the 35-day limit of native automated backups.',
    },
    {
        name: 'bedrock',
        overview:
            'Fully managed service for accessing foundation models from multiple providers via API.',
        deep_dive:
            'Provides API access to FMs from Anthropic (Claude), AI21 (Jurassic), Cohere, Meta (Llama), Mistral, Stability AI (Stable Diffusion), and Amazon (Titan, Nova); supports model customization via fine-tuning and continued pre-training; Knowledge Bases enable RAG with vector stores (OpenSearch Serverless, Aurora, Pinecone, Redis); Agents orchestrate multi-step tasks with tool use; Guardrails filter harmful content; supports provisioned throughput for guaranteed capacity; data is not used to train base models; integrates with PrivateLink for private access.',
    },
    {
        name: 'bedrock-agents',
        overview:
            'Bedrock feature that builds AI agents capable of multi-step reasoning and tool use.',
        deep_dive:
            'Agents break down user requests, plan steps, call APIs (action groups backed by Lambda), and query knowledge bases for RAG; uses OpenAPI schemas or function definitions to describe action groups; orchestration prompts customizable for each phase (pre-processing, orchestration, knowledge-base response, post-processing); supports session state and conversation history; integrates with Bedrock Guardrails; pricing based on underlying FM inference plus knowledge-base storage/queries.',
    },
    {
        name: 'bedrock-guardrails',
        overview:
            'Bedrock feature that applies content filters and policy controls to FM inputs and outputs.',
        deep_dive:
            'Filters harmful content across categories: hate, insults, sexual, violence, misconduct, prompt attacks; denied topics let you block specific subjects; word filters block profanity and custom blocklists; sensitive information filters redact or block PII (names, SSNs, addresses, etc.); contextual grounding checks verify responses against source documents; works with any Bedrock FM and Agents; can also evaluate user prompts and model responses for non-Bedrock models via ApplyGuardrail API.',
    },
    {
        name: 'cdk',
        overview:
            'AWS Cloud Development Kit; framework to define cloud infrastructure in general-purpose programming languages.',
        deep_dive:
            'Supports TypeScript, JavaScript, Python, Java, C#, Go; synthesizes to CloudFormation templates; three construct levels: L1 (raw CFN resources), L2 (curated AWS resource abstractions), L3 (patterns combining multiple resources); cdk init, cdk synth, cdk diff, cdk deploy, cdk destroy commands; uses CloudFormation under the hood, so all CFN limits apply; bootstraps a CDKToolkit stack in each region; supports asset bundling for Lambda code and Docker images; works with CodePipeline for CI/CD via CDK Pipelines construct.',
    },
    {
        name: 'cloud-map',
        overview:
            'Cloud resource discovery service for registering and looking up application resources by name.',
        deep_dive:
            'Service discovery for microservices; register any application resource (EC2, ECS task, RDS, custom IP/URL) with a friendly name; clients discover resources via DNS or API; supports health checks via Route 53 or custom; namespaces can be DNS-public, DNS-private (in a VPC), or HTTP-only API discovery; ECS service discovery integrates natively with Cloud Map; pricing per resource and per discovery API call.',
    },
    {
        name: 'cloud9',
        overview:
            'Cloud-based IDE accessible from a browser for writing, running, and debugging code.',
        deep_dive:
            'Backed by an EC2 instance or SSH-accessible Linux server you own; pre-installed with AWS CLI, SAM CLI, common runtimes (Node.js, Python, PHP, Java, etc.); shared environments allow real-time pair programming; auto-hibernate after 30 minutes idle (default) to reduce EC2 charges; IAM-controlled access via temporary credentials; no additional Cloud9 charge, pay only for EC2 and EBS; AWS announced end of new customer access in 2024 (existing users continue).',
    },
    {
        name: 'cloudformation',
        overview:
            'Infrastructure-as-code service that provisions AWS resources from JSON or YAML templates.',
        deep_dive:
            'Templates have sections: AWSTemplateFormatVersion, Description, Metadata, Parameters, Mappings, Conditions, Transform, Resources (the only required section), Outputs; resources deployed as a stack; failed deploys roll back to last known good state by default; nested stacks allow modular composition; StackSets deploy stacks across multiple accounts and regions in one operation; change sets preview modifications before applying; drift detection compares actual config to template; intrinsic functions: !Ref, !GetAtt, !Sub, !FindInMap, !Join, !If; dynamic references resolve ssm, ssm-secure, and secretsmanager values at deploy time.',
    },
    {
        name: 'cloudfront',
        overview:
            'Global content delivery network that caches content at edge locations near viewers.',
        deep_dive:
            'Origins: S3, ALB, EC2, AWS Elemental, custom HTTP server (including on-prem); supports multiple origins per distribution with cache behaviors; viewer protocol policy: HTTP/HTTPS, redirect HTTP to HTTPS, HTTPS only; origin protocol policy: HTTP only, HTTPS only, Match Viewer; OAC (Origin Access Control) restricts S3 access to CloudFront only; geo-restriction blocks/allows by country; signed URLs (single object) and signed cookies (multiple objects) restrict access; supports Lambda@Edge (Node.js/Python, any of 4 trigger events) and CloudFront Functions (JavaScript, viewer-request/viewer-response only, faster and cheaper); origin failover groups for high availability; custom SSL certs must be in us-east-1 ACM.',
    },
    {
        name: 'cloudhsm',
        overview:
            'Dedicated hardware security module in the cloud for managing your own encryption keys.',
        deep_dive:
            'Single-tenant FIPS 140-2 Level 3 validated HSMs; you manage all keys, AWS has no access; cluster of 1+ HSMs across multiple AZs for HA; supports PKCS#11, JCE, CNG/KSP, OpenSSL dynamic engine APIs; can be used as a custom key store for KMS; symmetric and asymmetric keys; commonly used for offload of SSL/TLS processing, document signing, payment processing, and storing root CA keys; you are responsible for key backups via HSM backups.',
    },
    {
        name: 'cloudshell',
        overview:
            'Browser-based shell pre-authenticated with AWS Management Console credentials.',
        deep_dive:
            'Amazon Linux 2 environment with AWS CLI, Python, Node.js, Java, PowerShell, and common tools pre-installed; 1 GB persistent storage per region in home directory; up to 20 minutes idle before session ends, 12-hour max session; persistent storage retained for 120 days after last use; no additional cost beyond resources you manage; access requires IAM permissions (AWSCloudShellFullAccess).',
    },
    {
        name: 'cloudtrail',
        overview:
            'Service that records AWS account API activity for governance, compliance, and audit.',
        deep_dive:
            'Event types: management events (control plane, enabled by default), data events (S3 object-level, Lambda invoke, DynamoDB item-level, disabled and paid by default), insights events (unusual API activity, paid); Event History shows last 90 days for free without a trail; trails deliver logs continuously to S3 (and optionally to CloudWatch Logs and EventBridge); multi-region and multi-account (organization) trails available; log file integrity validation via SHA-256 digests; CloudTrail Lake provides queryable event store with SQL.',
    },
    {
        name: 'cloudwatch',
        overview:
            'Monitoring and observability service for AWS resources, applications, and on-premises servers.',
        deep_dive:
            'Core components: Metrics, Logs, Alarms, Dashboards, Events (now EventBridge), Synthetics, Application Insights, Container Insights, Contributor Insights; standard metric resolution 60 seconds, high-resolution 1 second; EC2 sends metrics every 5 minutes by default, 1 minute with detailed monitoring (extra cost); CloudWatch Agent collects custom system-level metrics like memory, disk, swap (not natively monitored), supports StatsD and collectd protocols; alarm states: OK, ALARM, INSUFFICIENT_DATA; alarm actions can trigger SNS, Auto Scaling, EC2 stop/terminate/reboot/recover, Systems Manager OpsItems; Logs Insights provides interactive log query language; EMF (Embedded Metric Format) extracts metrics directly from logs.',
    },
    {
        name: 'codebuild',
        overview:
            'Managed build service that compiles source code, runs tests, and produces deployable artifacts.',
        deep_dive:
            'Build instructions in buildspec.yml (must be lowercase, at repo root); phases: install, pre_build, build, post_build, plus reports and artifacts sections; supports caching to S3 or local cache (DOCKER_LAYER, CUSTOM, SOURCE); environment image can be AWS-managed (Amazon Linux, Ubuntu, Windows) or custom from ECR/Docker Hub; environment variables limited to ~5,500 total chars (use SSM Parameter Store or Secrets Manager for larger); integrates with CodePipeline, CodeCommit, GitHub, Bitbucket; supports VPC builds; billed by build minutes.',
    },
    {
        name: 'codecatalyst',
        overview:
            'Unified software development service with project templates, CI/CD, and collaboration tools.',
        deep_dive:
            'Provides project blueprints, source repositories (or connects to GitHub/Bitbucket), workflows (CI/CD), Dev Environments (cloud IDEs in Cloud9/VS Code/JetBrains), issue tracking, and team chat; uses Builder ID identity (not standard AWS IAM); connects to AWS accounts via roles; free tier and standard/enterprise pricing tiers.',
    },
    {
        name: 'codecommit',
        overview:
            'Managed Git-compatible source control hosting service.',
        deep_dive:
            'Fully managed private Git repos; supports HTTPS and SSH access via IAM credentials or Git credentials; encrypted at rest with KMS; no repo size limit; integrates with CodePipeline, CodeBuild, CodeDeploy and triggers via EventBridge/SNS/Lambda; supports approval rule templates for pull requests; AWS announced no new customer onboarding as of mid-2024 (existing users continue).',
    },
    {
        name: 'codedeploy',
        overview:
            'Automated deployment service for EC2, on-premises servers, Lambda, and ECS.',
        deep_dive:
            'Uses AppSpec file (YAML for EC2/on-prem, YAML or JSON for Lambda/ECS) at root of revision; EC2/on-prem deployment configurations: AllAtOnce (fast, downtime), HalfAtATime (50%), OneAtATime (slow, safe), custom; Lambda/ECS use Canary (e.g. Canary10Percent10Minutes) and Linear (e.g. Linear10PercentEvery10Minutes) plus AllAtOnce; lifecycle event hooks for EC2: ApplicationStop, BeforeInstall, AfterInstall, ApplicationStart, ValidateService (Start/DownloadBundle/Install/End are automatic); supports automatic rollback on failure or alarm; requires CodeDeploy Agent on EC2/on-prem instances.',
    },
    {
        name: 'codepipeline',
        overview:
            'Continuous delivery service that automates release pipelines with source, build, test, and deploy stages.',
        deep_dive:
            'Pipelines composed of stages, each containing actions of types: Source, Build, Test, Approval, Deploy, Invoke; supports manual approval actions that pause until approver acts; sources: CodeCommit, S3, ECR, GitHub (via CodeStar connections), Bitbucket; integrates with CodeBuild, CodeDeploy, CloudFormation, ECS, Elastic Beanstalk, Lambda, Step Functions; pipeline execution per change or scheduled; artifacts stored in S3 between stages; V2 pipelines support triggers and variables.',
    },
    {
        name: 'cognito',
        overview:
            'Identity service providing user sign-up/sign-in (User Pools) and AWS resource access (Identity Pools).',
        deep_dive:
            'User Pools: user directory handling authentication, returns JSON Web Tokens (JWTs); supports MFA, password policies, hosted UI, social IdPs (Google/Facebook/Amazon/Apple), SAML 2.0, OIDC; complies with OAuth 2.0 and OIDC; Identity Pools (Federated Identities): exchange ID tokens for temporary AWS credentials via STS to access S3, DynamoDB, etc.; supports authenticated and unauthenticated (guest) identities with separate IAM roles; User Pools and Identity Pools can be used together or independently; Lambda triggers customize auth flows (pre-signup, post-confirmation, pre-token-generation, etc.).',
    },
    {
        name: 'comprehend',
        overview:
            'Natural language processing service that extracts insights from unstructured text.',
        deep_dive:
            'Detects entities (people, places, organizations), key phrases, sentiment (positive/negative/neutral/mixed), language (100+ languages), syntax (parts of speech), PII, and topics; supports custom classification and custom entity recognition models trained on your data; works on raw text, not scanned documents (use Textract first to extract text from images/PDFs); async batch jobs for large document sets stored in S3; real-time API for individual requests.',
    },
    {
        name: 'comprehend-medical',
        overview:
            'HIPAA-eligible NLP service that extracts health data from medical text.',
        deep_dive:
            'Detects medical entities like medications, dosages, frequencies, procedures, anatomy, medical conditions, test names and values; recognizes RxNorm and ICD-10-CM ontology codes; PHI detection for de-identification; processes unstructured clinical notes, discharge summaries, doctor\'s notes; not a substitute for professional medical advice.',
    },
    {
        name: 'compute-optimizer',
        overview:
            'Service that analyzes resource usage and recommends optimal configurations.',
        deep_dive:
            'Analyzes CloudWatch metrics (default 14 days, up to 3 months with enhanced infrastructure metrics) to recommend rightsizing for EC2 instances, Auto Scaling groups, EBS volumes, Lambda functions, ECS services on Fargate, RDS instances; recommendations classified as under-provisioned, over-provisioned, optimized; identifies idle resources; opt-in service, no extra cost for default metrics, paid for enhanced infrastructure metrics; works across single accounts and Organizations.',
    },
    {
        name: 'config',
        overview:
            'Service that records configuration changes to AWS resources and evaluates compliance with rules.',
        deep_dive:
            'Continuously records resource configurations and changes in a configuration history; configuration items snapshot resource state; configuration recorder must be enabled per region; rules evaluate compliance (AWS-managed rules or custom rules backed by Lambda or Guard); conformance packs bundle rules and remediation; aggregators consolidate data across accounts and regions; remediation actions automate fixes via SSM Automation documents; data delivered to S3 and optionally SNS/EventBridge.',
    },
    {
        name: 'control-tower',
        overview:
            'Service for setting up and governing a secure, compliant multi-account AWS environment.',
        deep_dive:
            'Sets up a landing zone using AWS Organizations, IAM Identity Center, Service Catalog, Config, CloudTrail, S3 logging; preventive controls (SCPs) and detective controls (Config rules) called guardrails; Account Factory provisions new accounts using standardized blueprints; supports customizations via CfCT (Customizations for Control Tower); free service but charges accrue for underlying services like Config and CloudTrail.',
    },
    {
        name: 'cost-explorer',
        overview:
            'Interactive tool for visualizing, analyzing, and forecasting AWS costs and usage.',
        deep_dive:
            'Provides up to 13 months of historical data and 12 months of forecasts; filter and group by service, account, tag, region, instance type, and more; granularity: monthly, daily, hourly (last 14 days, extra fee); identifies cost drivers and anomalies; Savings Plans and RI recommendations; supports custom reports; first month of API access free, then $0.01 per paginated API request.',
    },
    {
        name: 'data-catalog',
        overview:
            'AWS Glue Data Catalog; central metadata repository for data stored in AWS.',
        deep_dive:
            'Apache Hive-compatible metastore; stores table definitions, schemas, partitions, and locations for data in S3, Redshift, RDS, etc.; queryable by Athena, Redshift Spectrum, EMR, Glue ETL, Lake Formation; populated by Glue Crawlers, manually, or via API; supports schema versioning and table partitioning; pricing per million objects stored and per million requests; one Data Catalog per region per account.',
    },
    {
        name: 'data-quality',
        overview:
            'AWS Glue Data Quality; service that measures and monitors data quality in data lakes and pipelines.',
        deep_dive:
            'Uses DQDL (Data Quality Definition Language) to define rules like Completeness, Uniqueness, RowCount, ColumnValues; can generate rule recommendations automatically by analyzing sample data; integrates with Glue ETL jobs to fail or quarantine on rule violations; results published to CloudWatch and EventBridge; supports data sources in Glue Data Catalog (S3, RDS, Redshift, etc.); built on open-source Deequ.',
    },
    {
        name: 'databrew',
        overview:
            'AWS Glue DataBrew; visual data preparation tool for cleaning and normalizing data without code.',
        deep_dive:
            'Provides 250+ pre-built transformations (filter, join, pivot, deduplicate, mask PII, etc.); recipes are reusable sequences of steps; supports data sources in S3, Redshift, RDS, Aurora, Snowflake, JDBC; output to S3 or Glue Data Catalog; data profiling identifies anomalies, missing values, distributions; job scheduling for recurring transformations; pricing per session (interactive) and per node-hour for jobs.',
    },
    {
        name: 'datasync',
        overview:
            'Online data transfer service for moving large amounts of data between on-premises and AWS storage.',
        deep_dive:
            'Supports source/destination: on-prem NFS/SMB/HDFS/object storage, S3 (all storage classes), EFS, FSx (Windows, Lustre, NetApp ONTAP, OpenZFS), Azure Files, Google Cloud Storage; up to 10x faster than open-source tools; requires DataSync agent (VM image or hardware appliance) on-premises; supports scheduled tasks, bandwidth throttling, incremental transfers, data integrity verification, encryption in transit (TLS); pay per GB transferred; differs from Storage Gateway (which is for ongoing hybrid storage access, not one-time migration).',
    },
    {
        name: 'dax',
        overview:
            'DynamoDB Accelerator; in-memory write-through cache for DynamoDB delivering microsecond reads.',
        deep_dive:
            'Reduces DynamoDB read latency from single-digit milliseconds to microseconds; cluster of 1-10 nodes across AZs (minimum 3 nodes for production HA); two caches: item cache (GetItem/BatchGetItem, default TTL 5 min) and query cache (Query/Scan, configurable TTL); supports server-side encryption but not TLS in transit; deployed in a VPC, must be accessed from within the VPC; not suitable for strongly consistent reads, write-heavy workloads, or apps not tolerant of eventually consistent data; supports DynamoDB Streams but not Global Tables for the cached table.',
    },
    {
        name: 'deepracer',
        overview:
            '1/18th-scale autonomous race car for learning reinforcement learning hands-on.',
        deep_dive:
            'Trains reinforcement learning models in a simulator using PPO or SAC algorithms with a configurable reward function in Python; race in virtual or physical leagues; integrates with SageMaker for training and S3 for model storage; supports head-to-head, time trial, and object avoidance race types; primarily educational; physical car has 4MP camera and on-board Intel Atom compute.',
    },
    {
        name: 'direct-connect',
        overview:
            'Dedicated private network connection from on-premises to AWS via partner locations.',
        deep_dive:
            'Port speeds: 1, 10, 100 Gbps dedicated; sub-1 Gbps via hosted connections through partners; not encrypted by default (run an IPsec VPN over it for encryption); requires a Customer Gateway router at a Direct Connect location; virtual interfaces (VIFs): Private VIF (to VGW attached to a VPC, max 50 per connection), Public VIF (to public AWS services like S3), Transit VIF (to Direct Connect Gateway associated with Transit Gateways); Direct Connect Gateway enables connections to VPCs in multiple regions; for resiliency: dual lines, dual data centers, or VPN backup; LAG (Link Aggregation Group) bundles up to 4 connections.',
    },
    {
        name: 'directory-service',
        overview:
            'Managed Microsoft Active Directory and directory services in AWS.',
        deep_dive:
            'Three offerings: AWS Managed Microsoft AD (full Microsoft AD, supports trusts with on-prem AD, integrates with RDS for SQL Server, FSx, WorkSpaces), AD Connector (proxy to existing on-prem AD, no directory data stored in AWS), Simple AD (low-cost Samba-based, basic features only); Managed Microsoft AD deployed across 2 AZs; daily automated snapshots retained 5 days; supports schema extensions; can be joined to EC2 instances via Seamless Domain Join.',
    },
    {
        name: 'dms',
        overview:
            'Database Migration Service for migrating and continuously replicating databases to AWS.',
        deep_dive:
            'Supports homogeneous (same engine) and heterogeneous (different engine, requires Schema Conversion Tool/SCT or DMS Schema Conversion) migrations; source/target: Oracle, SQL Server, MySQL, PostgreSQL, MariaDB, Aurora, MongoDB, Redshift, S3, DocumentDB, DynamoDB and others; continuous data replication (CDC) keeps source and target in sync during cutover; replication instance is an EC2 instance running the DMS engine; tasks define what to migrate (full load, CDC, or both); DMS Fleet Advisor inventories on-prem databases; pricing based on replication instance hours plus storage.',
    },
    {
        name: 'dynamodb',
        overview:
            'Serverless NoSQL key-value and document database with single-digit millisecond latency.',
        deep_dive:
            'Tables have partition key (required) and optional sort key (composite primary key); item max size 400 KB; capacity modes: Provisioned (set RCU/WCU with optional auto-scaling) or On-Demand (pay per request); 1 RCU = 1 strongly consistent read of 4 KB/sec or 2 eventually consistent reads; 1 WCU = 1 write of 1 KB/sec; transactions cost 2x reads/writes; secondary indexes: LSI (same partition key, alternate sort key, created at table creation only, max 5, 10 GB per partition key limit) and GSI (different keys, created anytime, max 20, eventually consistent only); DynamoDB Streams capture item-level changes retained 24h; Global Tables provide multi-region active-active replication; TTL auto-deletes expired items within ~48h; PITR allows restore to any second in last 35 days.',
    },
    {
        name: 'ebs',
        overview:
            'Persistent block storage volumes for EC2 instances, zonal in scope.',
        deep_dive:
            'Volumes exist in a single AZ and can only attach to EC2 in the same AZ; SSD types: gp3 (default, baseline 3000 IOPS/125 MB/s independent of size, max 16,000 IOPS), gp2 (IOPS scales with size, max 16,000), io1 (max 64,000 IOPS), io2/io2 Block Express (max 256,000 IOPS, 99.999% durability, 1000 IOPS/GiB); HDD types: st1 (throughput-optimized, 500 MB/s max, big data), sc1 (cold, 250 MB/s max, lowest cost); only io1/io2 support Multi-Attach (up to 16 Nitro instances, same AZ); HDD volumes cannot be boot volumes; snapshots stored in S3 are incremental and can be copied cross-region; encryption via KMS; snapshots can be archived to EBS Snapshots Archive for long-term low-cost storage.',
    },
    {
        name: 'ec2',
        overview:
            'Resizable virtual machine compute capacity in the cloud.',
        deep_dive:
            'Instance families: General Purpose (T, M), Compute Optimized (C), Memory Optimized (R, X, z), Storage Optimized (I, D, H), Accelerated Computing (P, G, F, Inf, Trn), Nitro-based; purchase options: On-Demand, Reserved Instances (1 or 3 yr, Standard/Convertible), Savings Plans (Compute or EC2 Instance), Spot (up to 90% discount, 2-min termination warning), Dedicated Hosts (per-host billing, BYOL), Dedicated Instances (single-tenant hardware), Capacity Reservations; placement groups: cluster (low latency, single AZ), partition (up to 7 partitions/AZ for distributed workloads), spread (max 7 instances/AZ); status checks every minute: system status (AWS-side) and instance status (your config); user data runs on first launch; metadata accessible at 169.254.169.254 (IMDSv2 recommended); termination protection prevents accidental delete.',
    },
    {
        name: 'ecr',
        overview:
            'Fully managed container image registry for Docker and OCI-compatible images.',
        deep_dive:
            'Stores images in private repositories (IAM-controlled) or public repositories (ECR Public Gallery); integrates natively with ECS, EKS, Lambda container images; auth via aws ecr get-login-password piped to docker login; encrypts images at rest with S3 server-side encryption or KMS; supports lifecycle policies to clean old images; image scanning: basic (Clair-based) and enhanced (Inspector with continuous scanning, OS + language packages); cross-region and cross-account replication; pull-through cache for upstream registries (Docker Hub, Quay, etc.).',
    },
    {
        name: 'ecs',
        overview:
            'Fully managed container orchestration service for Docker containers.',
        deep_dive:
            'Launch types: EC2 (manage instances yourself) or Fargate (serverless); cluster contains services and tasks; task definition specifies image, CPU/memory, networking mode, IAM role, volumes, log driver; three IAM roles: container instance role (EC2 only, ecsInstanceRole), task execution role (pulls images, writes logs), task role (permissions inside container); network modes: bridge (default Linux), host, awsvpc (one ENI per task, required for Fargate), none; task placement strategies: binpack, random, spread (default for services across AZs); supports service auto-scaling via target tracking and step scaling; ECS Anywhere runs tasks on customer-managed external instances.',
    },
    {
        name: 'efs',
        overview:
            'Fully managed elastic NFS file system shareable across thousands of Linux instances.',
        deep_dive:
            'POSIX-compliant NFSv4 file system, Linux only (no Windows); regional service replicated across multiple AZs (Standard) or single AZ (One Zone); storage classes: Standard, Infrequent Access (IA), Archive, plus One Zone variants; lifecycle management transitions files after 7/14/30/60/90/180/270/365 days of inactivity; minimum file size for IA transition is 128 KB; throughput modes: Bursting (scales with size), Elastic (auto-scales), Provisioned; performance modes: General Purpose (default) or Max I/O (legacy); mount targets are per-AZ, accessed via DNS name; access points enforce a POSIX user identity and root directory; encrypted at rest with KMS, in transit with TLS via the EFS mount helper.',
    },
    {
        name: 'elastic-beanstalk',
        overview:
            'PaaS that deploys and manages web applications without provisioning infrastructure.',
        deep_dive:
            'Supports Java, .NET, PHP, Node.js, Python, Ruby, Go, Docker; environments: Web Server (HTTP, with optional ALB) or Worker (processes SQS messages); deployment policies: All at Once (downtime, fastest), Rolling (batches, reduced capacity), Rolling with Additional Batch (full capacity, costs extra), Immutable (new ASG, safest, doubles capacity), Traffic Splitting (canary); Blue/Green via Swap Environment URLs (no downtime); customization via .ebextensions/*.config files at app root (YAML/JSON); EB CLI uses eb deploy/init/open commands; application versions limited to 1000 per region (use lifecycle policy to auto-delete old versions); free service, pay only for underlying resources.',
    },
    {
        name: 'elasticache',
        overview:
            'Managed in-memory cache service supporting Redis (Valkey) and Memcached engines.',
        deep_dive:
            'Memcached: multi-threaded, simple key-value, no persistence, no replication, no encryption (until recent versions), horizontal scaling by adding nodes, no Multi-AZ failover; Redis/Valkey: single-threaded, advanced data structures (lists, sets, sorted sets, hashes, streams, pub/sub, geospatial), replication, Multi-AZ with automatic failover, persistence (RDB snapshots, AOF), encryption in-transit and at-rest with KMS, cluster mode for sharding (up to 500 nodes, 1-5 replicas per shard); caching strategies: lazy loading (cache on miss), write-through (update cache on write), TTL-based; common use cases: session store, leaderboards, real-time analytics, rate limiting.',
    },
    {
        name: 'elb',
        overview:
            'Elastic Load Balancing; distributes incoming traffic across multiple targets.',
        deep_dive:
            'Four types: Application Load Balancer (Layer 7, HTTP/HTTPS/gRPC), Network Load Balancer (Layer 4, TCP/UDP/TLS, millions of req/sec, ultra-low latency, static IP/EIP), Gateway Load Balancer (Layer 3 IP, deploys 3rd-party virtual appliances via GENEVE), Classic Load Balancer (legacy); ALB and NLB require at least 2 subnets in different AZs; cross-zone load balancing distributes requests evenly across all targets in all AZs (always on for ALB, optional for NLB/GWLB); deregistration delay (connection draining) default 300s; sticky sessions supported on ALB (app or duration cookies) and NLB (source IP); ALB only does host/path/header-based routing.',
    },
    {
        name: 'emr',
        overview:
            'Managed big data platform running Apache Hadoop, Spark, Hive, Presto, HBase, Flink and more.',
        deep_dive:
            'Cluster types: long-running, transient (terminate after job), instance fleets or instance groups; node types: master (1), core (HDFS storage + compute), task (compute only, often spot); deployment options: EMR on EC2, EMR on EKS, EMR Serverless, EMR on Outposts; supports S3 as durable storage via EMRFS (decouples compute from storage); auto-scaling and managed scaling adjust capacity based on YARN metrics; integrates with Glue Data Catalog, Lake Formation; security via Kerberos, IAM roles, EMR security configurations; pricing per second per instance plus EMR fee.',
    },
    {
        name: 'eventbridge',
        overview:
            'Serverless event bus service for routing events between AWS services, SaaS apps, and custom apps.',
        deep_dive:
            'Successor to CloudWatch Events with broader integrations; event buses: default (AWS service events), custom (your apps), partner (SaaS integrations like Zendesk, Datadog, Shopify); rules match event patterns or run on schedules (rate/cron); supports cross-account and cross-region event delivery via resource policies; over 25 target types: Lambda, Step Functions, SNS, SQS, Kinesis, ECS task, CodePipeline, API destinations (HTTP endpoints), and more; Schema Registry stores event schemas with code-binding generation; Pipes connect single source to single target with optional filtering and transformation; max 300 rules per event bus by default; events retained 24h if undelivered, then DLQ if configured.',
    },
    {
        name: 'fargate',
        overview:
            'Serverless compute engine for containers that runs ECS and EKS tasks without managing servers.',
        deep_dive:
            'Pay per vCPU and memory per second (1-minute minimum); supports ECS and EKS launch type; only awsvpc network mode (each task gets its own ENI and IP); CPU 0.25-16 vCPU, memory 0.5-120 GB in supported combinations; Fargate Spot offers ~70% discount with 2-minute interruption warning (ECS only); storage: 20 GB ephemeral by default, up to 200 GB configurable; supports EFS volumes for persistent storage; no SSH/exec access by default, use ECS Exec; cold starts longer than EC2-based ECS due to provisioning.',
    },
    {
        name: 'firehose',
        overview:
            'Amazon Data Firehose; serverless service that loads streaming data into data stores and analytics tools.',
        deep_dive:
            'Formerly Kinesis Data Firehose; near-real-time delivery (buffer up to 60-900 seconds or 1-128 MB); destinations: S3, Redshift (via S3), OpenSearch Service, Splunk, generic HTTP endpoints, Datadog, New Relic, MongoDB, Snowflake; supports optional Lambda transformation before delivery; can convert JSON to Parquet/ORC for S3 destinations; compression: GZIP, ZIP, Snappy, Hadoop-Snappy; auto-scales, no shards to manage; pricing per GB ingested; differs from Kinesis Data Streams (KDS stores data with replay; Firehose delivers immediately without storage).',
    },
    {
        name: 'firewall-manager',
        overview:
            'Central service to manage WAF, Shield Advanced, security groups, and Network Firewall policies across accounts.',
        deep_dive:
            'Requires AWS Organizations with all features enabled; one Firewall Manager admin account designated; policy types: WAF, Shield Advanced, security group (audit/remediate), Network Firewall, Route 53 Resolver DNS Firewall; automatically applies policies to existing and newly created resources; continuously detects non-compliant resources and remediates; supports hierarchical policies; pricing per policy per region per month.',
    },
    {
        name: 'flink',
        overview:
            'Amazon Managed Service for Apache Flink; serverless stream processing on Apache Flink.',
        deep_dive:
            'Formerly Kinesis Data Analytics for Apache Flink; runs Flink applications in Java, Scala, Python, or SQL; sources: Kinesis Data Streams, MSK, Kafka, Firehose; sinks: Kinesis, Firehose, S3, OpenSearch, DynamoDB, custom; supports stateful processing with checkpoints and savepoints; auto-scales KPU (Kinesis Processing Unit, 1 vCPU + 4 GB) capacity; Studio notebooks for interactive Flink SQL development; common uses: real-time analytics, anomaly detection, streaming ETL, sessionization.',
    },
    {
        name: 'forecast',
        overview:
            'Time-series forecasting service using machine learning (legacy; merged into SageMaker Canvas).',
        deep_dive:
            'Used built-in algorithms like DeepAR+, Prophet, ARIMA, ETS, NPTS, CNN-QR; required target time-series data plus optional related time-series and item metadata; generated point and probabilistic forecasts (P10/P50/P90); common uses: retail demand, financial planning, capacity planning, supply chain; AWS announced end of new customer access in 2024; functionality migrated to Amazon SageMaker Canvas time-series forecasting.',
    },
    {
        name: 'fraud-detector',
        overview:
            'Managed service that builds fraud detection models tailored to your data.',
        deep_dive:
            'Uses ML algorithms developed by Amazon (over 20 years of fraud detection experience); model types: Online Fraud Insights (account registration), Transaction Fraud Insights (account-based transactions), Account Takeover Insights; takes event data (historical fraud labels, customer email, IP, payment method, etc.); rules combine model scores with custom logic to produce outcomes; integrates with SageMaker for custom models; real-time predictions via API.',
    },
    {
        name: 'fsx',
        overview:
            'Family of fully managed file storage services for various file system protocols.',
        deep_dive:
            'Four file systems: FSx for Windows File Server (SMB, NTFS, AD integration, DFS Namespaces, dedup), FSx for Lustre (POSIX, high-performance parallel for HPC/ML, links to S3, scratch or persistent), FSx for NetApp ONTAP (NFS, SMB, iSCSI, snapshots, FlexClone, SnapMirror), FSx for OpenZFS (NFS, snapshots, clones, compression); Lustre throughput up to hundreds of GB/s; Windows can use HDD or SSD, single-AZ or Multi-AZ; default backup retention 7 days, backups stored durably in S3; encryption at rest with KMS and in transit with SMB Kerberos.',
    },
    {
        name: 'glacier',
        overview:
            'S3 Glacier storage classes for low-cost long-term archival storage.',
        deep_dive:
            'Three Glacier-tier S3 storage classes: S3 Glacier Instant Retrieval (millisecond retrieval, min storage 90 days, min object 128 KB, cheaper than Standard-IA if accessed quarterly), S3 Glacier Flexible Retrieval (formerly S3 Glacier; retrieval options Expedited 1-5 min, Standard 3-5 hr, Bulk 5-12 hr; min 90 days; min object 40 KB), S3 Glacier Deep Archive (cheapest; Standard 12 hr, Bulk 48 hr; min 180 days; min object 40 KB); all offer 11 9\'s durability across 3+ AZs (Glacier Flexible Retrieval also offers single-AZ variant); legacy Vault API (Glacier-only) still exists but S3 API access preferred.',
    },
    {
        name: 'glue',
        overview:
            'Serverless ETL and data integration service running on Apache Spark.',
        deep_dive:
            'Components: Data Catalog, Crawlers, ETL jobs (Spark/Python shell/Ray), DataBrew, Data Quality, Glue Studio (visual ETL); Spark jobs run on DPUs (Data Processing Units: 4 vCPU + 16 GB); job bookmarks track processed data to avoid reprocessing; supports streaming ETL from Kinesis and MSK; Glue Workflows orchestrate crawlers, jobs, and triggers; Glue Elastic Views (deprecated) replicated data across stores; pricing per DPU-hour with 1-minute minimum; supports Python and Scala for Spark, Python 3 for Python Shell jobs.',
    },
    {
        name: 'glue-crawler',
        overview:
            'Glue component that discovers data schema and populates the Data Catalog automatically.',
        deep_dive:
            'Connects to S3, RDS, Redshift, DynamoDB, Delta Lake, Iceberg, Hudi, JDBC sources; classifiers identify file format (CSV, JSON, Parquet, ORC, Avro, XML) and schema; can detect partitions in S3 paths; runs on-demand or on a schedule (cron); produces/updates tables in the Data Catalog with column types, partition keys, and serialization library; supports custom classifiers using grok patterns; billed per DPU-hour with 10-minute minimum.',
    },
    {
        name: 'guardduty',
        overview:
            'Managed threat detection service that continuously monitors for malicious activity.',
        deep_dive:
            'Analyzes CloudTrail events (management and S3 data), VPC Flow Logs, DNS logs, EKS audit logs, RDS login activity, Lambda network activity, EBS volume content; uses machine learning, anomaly detection, threat intelligence feeds; finding severity: Low, Medium, High; can be enabled at organization level via delegated administrator; integrates with Security Hub, EventBridge for automated response; protection plans: S3 Protection, EKS Protection, Malware Protection, RDS Protection, Lambda Protection (additional charges); 30-day free trial.',
    },
    {
        name: 'iam',
        overview:
            'Identity and Access Management service for authentication and authorization to AWS resources.',
        deep_dive:
            'Entities: users, groups, roles; policy types: identity-based (attached to users/groups/roles), resource-based (attached to resources like S3 buckets, Lambda functions, KMS keys), permissions boundaries (max permissions), Organizations SCPs (account-level guardrails), session policies (passed at AssumeRole); evaluation logic: explicit deny overrides any allow; without explicit allow, request is implicitly denied; root user has full access by default; IAM is global (not regional); IAM roles use trust policy + permission policy; instance profiles attach roles to EC2; access keys consist of access key ID and secret access key; MFA strongly recommended for users and root; Access Analyzer identifies external access; supports policy versioning (up to 5 versions per managed policy).',
    },
    {
        name: 'iam-access-analyzer',
        overview:
            'Service that identifies resources shared with external principals and validates IAM policies.',
        deep_dive:
            'External access analyzer identifies resources (S3 buckets, IAM roles, KMS keys, Lambda functions, SQS queues, Secrets Manager secrets, etc.) shared outside your zone of trust (account or organization); unused access analyzer finds unused IAM roles, access keys, passwords, services and actions; policy validation provides findings against IAM best practices and grammar; custom policy checks compare new policies against reference; uses provable security (automated reasoning); free for external access analysis, paid for unused access.',
    },
    {
        name: 'iam-identity-center',
        overview:
            'Workforce identity service for SSO across AWS accounts and SAML applications (formerly AWS SSO).',
        deep_dive:
            'Identity sources: built-in Identity Center directory, Active Directory (via AWS Directory Service or AD Connector), external IdP via SAML 2.0 (Okta, Azure AD, Google Workspace); permission sets defined as IAM policies and assigned to users/groups for specific AWS accounts; auto-provisions IAM roles in target accounts; integrates with AWS Organizations; supports SCIM for user provisioning; single sign-on access to AWS console, CLI v2 (aws sso login), and SAML 2.0 cloud apps; replaces AWS SSO branding.',
    },
    {
        name: 'inferentia',
        overview:
            'AWS custom chip purpose-built for high-performance, low-cost machine learning inference.',
        deep_dive:
            'Powers Inf1 (Inferentia1) and Inf2 (Inferentia2) EC2 instances; up to 4x higher throughput and up to 70% lower cost per inference than comparable GPU-based instances; supports TensorFlow, PyTorch, MXNet via AWS Neuron SDK; Inf2 supports models with up to 175B parameters and includes NeuronLink for high-speed chip interconnect; integrates with SageMaker for managed deployment; suited for deep learning inference at scale (NLP, computer vision, recommendation engines).',
    },
    {
        name: 'inspector',
        overview:
            'Automated vulnerability management service for EC2, ECR container images, and Lambda functions.',
        deep_dive:
            'Amazon Inspector v2 (current) continuously scans for software vulnerabilities (CVEs) and unintended network exposure; integrates with EC2 (via SSM Agent), ECR (image scan on push), Lambda (function and layers); CVSS severity scores; findings sent to Security Hub and EventBridge; supports delegated administrator across Organizations; pricing per resource scanned; differs from Inspector Classic which used assessment templates and a separate agent (legacy).',
    },
    {
        name: 'iot-greengrass',
        overview:
            'Open-source edge runtime that brings AWS Lambda and ML inference to edge devices.',
        deep_dive:
            'Greengrass V2 runs as a Java-based runtime on Linux or Windows edge devices; components (modular software units) deployed from cloud or built locally; supports local Lambda execution, ML inference via Greengrass ML components, stream manager, secret manager, local pub/sub messaging via MQTT; integrates with IoT Core for cloud communication; supports offline operation with local data sync when reconnected; OTA component updates from AWS IoT.',
    },
    {
        name: 'kafka',
        overview:
            'Apache Kafka is an open-source distributed event streaming platform.',
        deep_dive:
            'Producers publish to topics partitioned across brokers; consumers read from partitions in consumer groups; offsets track read position per consumer group per partition; replication factor controls fault tolerance; retention configurable by time or size; Kafka Connect framework integrates external data systems; Kafka Streams for stream processing in JVM; KRaft mode replaces ZooKeeper in newer versions; on AWS, run on EC2 (self-managed) or use Amazon MSK (managed).',
    },
    {
        name: 'kendra',
        overview:
            'Intelligent enterprise search service powered by machine learning.',
        deep_dive:
            'Natural language queries return ranked answers, FAQs, and documents; supports 40+ data source connectors: S3, SharePoint, Salesforce, ServiceNow, OneDrive, RDS, Confluence, Box, Slack, Jira, Google Drive, Github, etc.; two editions: Developer (lower cost, dev/test) and Enterprise (HA, multi-AZ); incremental learning improves results based on user feedback and click-through; supports access control via user/group filters; integrates with Lex for chatbots; pricing per index hour plus connector sync hours; Kendra Intelligent Ranking adds semantic ranking to OpenSearch.',
    },
    {
        name: 'kinesis',
        overview:
            'Family of services for collecting, processing, and analyzing real-time streaming data.',
        deep_dive:
            'Four services: Kinesis Data Streams (durable real-time data streaming with shards), Amazon Data Firehose (formerly Kinesis Data Firehose; near-real-time delivery to S3/Redshift/OpenSearch/Splunk), Amazon Managed Service for Apache Flink (formerly Kinesis Data Analytics; stream processing), Kinesis Video Streams (video ingest for ML/analytics); Data Streams provides ordering and replay; Firehose is fully managed with no shard management; use case selection: KDS for ordered low-latency processing with multiple consumers; Firehose for simple delivery to data stores; Flink for complex stream analytics; Video Streams for media.',
    },
    {
        name: 'kinesis-data-streams',
        overview:
            'Kinesis Data Streams; durable, real-time data streaming service organized by shards.',
        deep_dive:
            'Provisioned mode: 1 MB/s or 1000 records/sec write per shard, 2 MB/s read per shard; On-Demand mode: auto-scales 200 MB/s write 400 MB/s read; data retained 24 hours by default, up to 365 days; producers use PutRecord (single, ordered) or PutRecords (batch); consumers via shared throughput (GetRecords, 2 MB/s shared) or Enhanced Fan-Out (2 MB/s per consumer per shard, dedicated); KCL for consumer apps tracks shard checkpoints in DynamoDB; resharding (split/merge) is pairwise; integrates with Lambda, Firehose, MSF Flink, EMR; IteratorAge metric measures consumer lag.',
    },
    {
        name: 'kms',
        overview:
            'Managed service for creating and controlling encryption keys.',
        deep_dive:
            'KMS keys (formerly CMKs): customer-managed (full control), AWS-managed (managed by services like aws/s3), AWS-owned (invisible, no charge); key types: symmetric (256-bit AES-GCM, encrypt/decrypt), asymmetric (RSA or ECC for encrypt/decrypt or sign/verify, never both); symmetric keys never leave KMS unencrypted; customer-managed key auto-rotation: yearly by default (365 days), now also configurable; AWS-managed keys rotate every 365 days automatically; envelope encryption: data key encrypts data, KMS key encrypts data key; max plaintext for direct Encrypt API is 4 KB; custom key stores use CloudHSM for FIPS 140-2 Level 3; key policies + IAM + grants control access; multi-Region keys replicate to other regions with same key material; pricing: $1/key/month + per-request charges.',
    },
    {
        name: 'lake-formation',
        overview:
            'Service that simplifies building, securing, and managing data lakes on S3.',
        deep_dive:
            'Builds on Glue Data Catalog with fine-grained permissions (table, column, row, cell-level); uses tag-based access control (LF-Tags) or named resource grants; integrates with Athena, Redshift Spectrum, EMR, Glue, QuickSight, SageMaker; cross-account data sharing via Resource Access Manager; governed tables (preview) support ACID transactions; data location permissions separate from data access; works with existing Glue Data Catalog without migration.',
    },
    {
        name: 'lambda',
        overview:
            'Serverless compute that runs code in response to events without managing servers.',
        deep_dive:
            'Supports Node.js, Python, Java, .NET, Go, Ruby, custom runtimes via Runtime API, container images up to 10 GB; memory 128 MB to 10,240 MB in 1 MB increments (CPU scales proportionally, 1 vCPU at 1,769 MB); timeout 1-900 seconds (15 minutes); concurrency: account default 1000 concurrent executions (soft limit), reserved concurrency reserves capacity for a function, provisioned concurrency pre-initializes execution environments; /tmp 512 MB by default, configurable up to 10 GB; deployment package: zip up to 50 MB direct upload (250 MB unzipped), container up to 10 GB; VPC access via ENIs (cold start cost mitigated since 2019); Lambda@Edge runs at CloudFront edge locations (Node.js/Python only, must be in us-east-1); function URLs provide HTTPS endpoint without API Gateway.',
    },
    {
        name: 'lex',
        overview:
            'Service for building conversational interfaces (chatbots) using voice and text.',
        deep_dive:
            'Same technology as Amazon Alexa; bots have intents (user goals) with sample utterances and slots (parameters); fulfillment via Lambda function or return parameters to client; supports automatic speech recognition (ASR) and natural language understanding (NLU); deploys to Facebook Messenger, Slack, Twilio SMS, Kik, Twitch, Genesys Cloud CX, Amazon Connect; multi-language support (English, Spanish, French, German, Italian, etc.); V2 introduces bot versioning, multi-language bots, and conversation logs; pricing per text and speech request.',
    },
    {
        name: 'license-manager',
        overview:
            'Service for managing software licenses from vendors like Microsoft, Oracle, SAP across AWS and on-premises.',
        deep_dive:
            'Tracks BYOL (Bring Your Own License) usage by socket, core, vCPU, or instance; hard limits prevent launches that would exceed entitlements, soft limits notify; auto-discovers software via SSM inventory; integrates with EC2, RDS, License Manager linked accounts via Organizations; License Manager User Subscriptions handles per-user licenses (Microsoft Office, Visual Studio); free service.',
    },
    {
        name: 'local-zones',
        overview:
            'AWS infrastructure deployments in major metropolitan areas for low-latency apps.',
        deep_dive:
            'Extensions of an AWS Region with EC2, EBS, VPC subnets, ALB, ECS, EKS, FSx, RDS placed in metro areas (Los Angeles, Boston, Miami, etc.); single-digit millisecond latency to end users in the metro area; opt-in per zone; connected to parent region via AWS backbone; subset of services and instance types available; pricing similar to parent region with some uplift; differs from Outposts (customer premises) and Wavelength (5G carrier networks).',
    },
    {
        name: 'macie',
        overview:
            'Data security service that uses machine learning to discover and protect sensitive data in S3.',
        deep_dive:
            'Continuously evaluates S3 bucket inventory for security/access issues (public access, unencrypted, shared externally); managed data identifiers detect PII (names, addresses, SSN, credit cards), financial info, credentials, health info; custom data identifiers use regex; sensitive data discovery jobs scan specific buckets; findings sent to Security Hub and EventBridge; supports delegated administrator across Organizations; 30-day free trial; pricing per S3 bucket evaluated + GB scanned.',
    },
    {
        name: 'managed-service-for-apache-flink',
        overview:
            'Amazon Managed Service for Apache Flink; serverless stream processing on Apache Flink (same as \'flink\' tag).',
        deep_dive:
            'Formerly Kinesis Data Analytics for Apache Flink; runs Flink applications in Java, Scala, Python (Pyflink), or SQL via Studio notebooks; sources: Kinesis Data Streams, MSK, self-managed Kafka, Firehose; sinks: Kinesis, Firehose, S3, OpenSearch, DynamoDB; supports stateful processing with RocksDB-backed state and S3-backed checkpoints/savepoints; auto-scales KPUs (1 KPU = 1 vCPU + 4 GB + 50 GB storage); common uses: real-time analytics, anomaly detection, streaming ETL, sessionization.',
    },
    {
        name: 'migration-hub',
        overview:
            'Central location to track application migration progress across multiple AWS and partner tools.',
        deep_dive:
            'Aggregates status from AWS Application Migration Service, Database Migration Service, Application Discovery Service, and partner tools (CloudEndure, ATADATA, etc.); Migration Hub Strategy Recommendations analyzes apps and suggests rehost/replatform/refactor strategies; Migration Hub Refactor Spaces helps incrementally refactor monoliths to microservices; Journeys (templates) guide migration phases; network visualization shows dependencies; free to use, pay only for underlying migration tools.',
    },
    {
        name: 'msk',
        overview:
            'Amazon Managed Streaming for Apache Kafka; fully managed Apache Kafka and Kafka Connect.',
        deep_dive:
            'Two cluster types: Provisioned (you choose broker instance types and count) and Serverless (auto-scales, billed per partition-hour and data); supports Kafka versions for ongoing upgrades; brokers deployed across multiple AZs (3 AZs recommended); supports KRaft mode (no ZooKeeper) on newer versions; encryption: TLS in-transit (broker-broker and client-broker), at-rest with KMS; authentication: IAM, SASL/SCRAM (with Secrets Manager), mTLS with ACM PCA; MSK Connect runs Kafka Connect connectors managed; integrates with Kinesis Data Analytics for Flink, Lambda (as event source).',
    },
    {
        name: 'mwaa',
        overview:
            'Managed Workflows for Apache Airflow; managed orchestration service for Apache Airflow DAGs.',
        deep_dive:
            'Runs Airflow 2.x with workers, scheduler, web server, and metadata database all managed by AWS; environment sizes: mw1.small/medium/large determine concurrency and worker count; DAGs, plugins, and requirements.txt stored in an S3 bucket; auto-scales workers based on queue depth (min and max workers configurable); deploys in your VPC for private access to resources; encryption with KMS; integrates with CloudWatch Logs for task and worker logs; supports private and public web server access modes; pricing per environment hour + worker hours + storage.',
    },
    {
        name: 'nacl',
        overview:
            'Network ACLs; stateless firewall at the subnet level controlling inbound and outbound traffic.',
        deep_dive:
            'Operate at subnet level (one NACL per subnet, can be associated with multiple subnets); stateless (return traffic must be explicitly allowed); rules evaluated in order by rule number, lowest first, first match wins; support both allow and deny rules (unlike security groups); default NACL allows all inbound and outbound; custom NACLs deny all by default; separate inbound and outbound rule sets; for ephemeral ports, allow 1024-65535 for client responses; NACL rule number range 1-32766 (lower = higher priority).',
    },
    {
        name: 'nat-gateway',
        overview:
            'Managed NAT service that allows private subnet resources to initiate outbound internet connections.',
        deep_dive:
            'Deployed in a public subnet with an Elastic IP; supports up to 45 Gbps bandwidth, scales automatically; highly available within a single AZ (deploy one per AZ for cross-AZ HA); supports TCP, UDP, ICMP for IPv4; for IPv6 outbound use egress-only internet gateway; cannot be reached from outside the VPC; does not support port forwarding (use NAT instance for that); priced per hour and per GB processed; security groups cannot be attached to NAT Gateways (use NACL on the subnet); does not support fragmentation for TCP/ICMP (only UDP).',
    },
    {
        name: 'neptune',
        overview:
            'Fully managed graph database supporting Property Graph and RDF/SPARQL.',
        deep_dive:
            'Query languages: Apache TinkerPop Gremlin and openCypher (for property graphs), SPARQL (for RDF); deploys with 1 primary + up to 15 read replicas across AZs; storage auto-scales to 128 TB; common uses: social networking, recommendation engines, fraud detection, knowledge graphs, identity resolution; supports Neptune ML for ML predictions on graphs via SageMaker; Neptune Streams capture changes; Neptune Serverless option scales capacity automatically.',
    },
    {
        name: 'network-firewall',
        overview:
            'Managed network firewall for VPCs with stateful inspection and intrusion prevention.',
        deep_dive:
            'Operates at VPC level, filters traffic at subnet boundaries; components: firewall, firewall policy (collection of rule groups), rule groups (stateless or stateful); stateless rules use 5-tuple (source IP, source port, dest IP, dest port, protocol); stateful rules use Suricata-compatible rule syntax for IDS/IPS-style detection; deploys firewall endpoints in dedicated subnets in each AZ; supports domain name filtering, TLS inspection (with cert); integrates with Firewall Manager for centralized management; pricing per firewall endpoint hour + GB processed.',
    },
    {
        name: 'nlb',
        overview:
            'Network Load Balancer; Layer 4 load balancer for TCP, UDP, and TLS traffic.',
        deep_dive:
            'Operates at OSI Layer 4; handles millions of requests/sec at ultra-low latency (microseconds-millisecond); preserves source IP by default; supports static IP addresses and Elastic IPs (one per AZ); routing uses flow hash algorithm based on protocol, source/dest IP and port, and TCP sequence number; supports TLS termination with ACM/IAM certs and SNI; targets: instances, IP addresses, ALB; idle timeout fixed at 350 seconds for TCP (not configurable); active and passive health checks (TCP, HTTP, HTTPS); preserves connection to a single target for the lifetime of the TCP connection; supports cross-zone load balancing (off by default, costs extra data transfer).',
    },
    {
        name: 'opensearch',
        overview:
            'Managed service for OpenSearch and Elasticsearch (legacy) clusters used for search and analytics.',
        deep_dive:
            'Successor to Amazon Elasticsearch Service; deploys OpenSearch (forked from Elasticsearch 7.10) with built-in OpenSearch Dashboards (Kibana fork); cluster types: dedicated master nodes (recommended 3 for HA), data nodes, UltraWarm nodes (S3-backed for warm data), cold storage; UltraWarm + cold reduces storage cost vs hot data nodes; OpenSearch Serverless: auto-scales, billed in OCUs (OpenSearch Compute Units); OpenSearch Ingestion: managed data collector (formerly known as OpenSearch Ingestion); supports VPC and public endpoints; fine-grained access control with IAM, SAML, internal users; integrates with Kinesis Firehose, Logstash, CloudWatch Logs, Lambda for data ingestion.',
    },
    {
        name: 'organizations',
        overview:
            'Service for centrally managing and governing multiple AWS accounts.',
        deep_dive:
            'Management (master) account creates the organization; member accounts grouped into OUs (Organizational Units) hierarchically; SCPs (Service Control Policies) set max permissions across accounts/OUs (do not grant permissions); consolidated billing aggregates charges and shares RIs/Savings Plans discounts across accounts; supports two feature sets: Consolidated Billing only or All Features (required for SCPs); trusted access lets services like Config, CloudTrail, GuardDuty operate across accounts; delegated administrator allows non-management account to administer specific services; tag policies enforce consistent tags; backup policies enforce backup standards; account creation/move/close via API; global service, free.',
    },
    {
        name: 'outposts',
        overview:
            'Fully managed AWS infrastructure delivered to your on-premises facility.',
        deep_dive:
            'Form factors: 42U racks (full rack) and 1U/2U servers; runs same AWS APIs and services on-prem; supported services: EC2, EBS, S3 on Outposts, RDS, EKS, ECS, EMR, ElastiCache, ALB; connected to a parent AWS Region via service link (encrypted VPN over local internet or Direct Connect); AWS manages hardware and software updates; ordered with 3-year commitment, billed monthly with upfront/partial/no-upfront options; suitable for low-latency, data residency, and local data processing requirements.',
    },
    {
        name: 'parameter-store',
        overview:
            'Systems Manager feature for hierarchical storage of configuration data and secrets.',
        deep_dive:
            'Parameter types: String, StringList, SecureString (encrypted with KMS); tiers: Standard (10,000 parameters per region, up to 4 KB per parameter, free) and Advanced ($0.05/parameter/month, up to 8 KB, supports parameter policies and higher throughput); parameter policies: Expiration, ExpirationNotification, NoChangeNotification (Advanced only); hierarchical organization with / paths; versioning automatic; integrates with CloudFormation, Lambda, ECS, CodeBuild via SSM references; cheaper alternative to Secrets Manager for non-rotating values like AMI IDs and config; no built-in secret rotation.',
    },
    {
        name: 'partyrock',
        overview:
            'Amazon PartyRock; playground for building generative AI apps with Amazon Bedrock without code.',
        deep_dive:
            'Web-based interface for drag-and-drop creation of widgets backed by Bedrock foundation models; no AWS account required (uses Amazon.com login or social); free tier with daily usage limits; supports text, chat, image generation widgets; shareable apps via public URLs; educational tool to learn prompt engineering and FM capabilities; not for production use cases.',
    },
    {
        name: 'personalize',
        overview:
            'Real-time personalization and recommendation service powered by machine learning.',
        deep_dive:
            'Uses the same technology as Amazon.com recommendations; recipes (algorithms) include User-Personalization (current default), SIMS (similar items), Personalized-Ranking, Trending-Now, Popularity-Count; ingests user interactions, items metadata, users metadata datasets; creates solutions (trained models) deployed as campaigns for real-time recommendations or batch inference jobs; supports incremental data via PutEvents for real-time learning; pricing per training hour, recommendation request, and data ingestion GB.',
    },
    {
        name: 'polly',
        overview:
            'Text-to-speech service that converts text into lifelike speech in multiple languages and voices.',
        deep_dive:
            'Supports dozens of languages and 60+ voices including Neural TTS (NTTS), Standard, and Generative voices; SSML markup for fine control of pronunciation, emphasis, pauses, breathing; lexicons customize pronunciation of specific words; speech marks identify timing of words/sentences/phonemes; output formats: MP3, OGG Vorbis, PCM; can stream directly or save to S3; Newscaster and Conversational speaking styles (some voices); pricing per million characters synthesized.',
    },
    {
        name: 'privatelink',
        overview:
            'Service for private connectivity between VPCs and AWS services or third-party services without traversing the internet.',
        deep_dive:
            'Powers VPC interface endpoints; uses Elastic Network Interfaces with private IPs in your VPC subnets; supports 100+ AWS services, AWS Marketplace services, and your own services (via VPC endpoint services); endpoint services backed by Network Load Balancer or Gateway Load Balancer; consumer creates interface endpoint pointing to provider service name; supports cross-account and cross-region access (within same region); no internet gateway, NAT, VPN, or Direct Connect required; per-AZ availability with 10 Gbps default bandwidth scaling automatically; charged per endpoint hour + GB processed.',
    },
    {
        name: 'proton',
        overview:
            'Managed deployment service for container and serverless applications with standardized templates.',
        deep_dive:
            'Platform teams create environment templates (shared infrastructure like VPCs) and service templates (apps and pipelines); developers self-service deploy services via console/CLI without infrastructure expertise; templates written in IaC (CloudFormation or Terraform); supports components for extension; manages template versioning and propagates updates across deployed services; integrates with CodePipeline, CodeBuild, CodeStar Connections (GitHub, Bitbucket); free service, pay for underlying resources.',
    },
    {
        name: 'quicksight',
        overview:
            'Cloud-native business intelligence service for interactive dashboards and reports.',
        deep_dive:
            'Two editions: Standard and Enterprise (adds row-level security, AD integration, embedding, hourly refresh, ML insights); SPICE in-memory engine for fast analytics (1 GB free per Enterprise user, charged beyond); connects to RDS, Aurora, Redshift, Athena, S3, OpenSearch, SaaS sources, on-prem databases; supports ML-powered insights (anomaly detection, forecasting, natural-language Q&A); embedded analytics via JavaScript SDK; QuickSight Q provides natural-language querying; per-user pricing (Reader/Author/Admin) or capacity pricing; supports paginated reports.',
    },
    {
        name: 'ram',
        overview:
            'Resource Access Manager; service for sharing AWS resources across accounts.',
        deep_dive:
            'Shareable resources include: Transit Gateways, VPC subnets, Route 53 Resolver rules, License Manager configurations, Aurora clusters, Capacity Reservations, Outposts; share with specific accounts, organizational units, or entire organization (with Organizations enabled); avoids resource duplication and reduces operational overhead; principal can use shared resource as if it were their own; works alongside IAM (consumer still needs IAM permissions to use the resource); free service.',
    },
    {
        name: 'rds',
        overview:
            'Managed relational database service supporting multiple engines.',
        deep_dive:
            'Engines: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, plus Aurora (separate); deployment options: Single-AZ, Multi-AZ DB Instance (synchronous standby in another AZ for failover, not for reads), Multi-AZ DB Cluster (1 writer + 2 readable standbys); automated backups retained 0-35 days, manual snapshots retained indefinitely; storage types: General Purpose SSD (gp2/gp3), Provisioned IOPS SSD (io1/io2), Magnetic (legacy); Read Replicas: up to 15 cross-region and intra-region for MySQL/MariaDB/PostgreSQL/Oracle (engine-dependent); RDS Proxy pools connections for serverless/Lambda workloads; IAM database authentication available; encryption at rest with KMS (set at creation only); enhanced monitoring up to 1-second granularity.',
    },
    {
        name: 'rds-proxy',
        overview:
            'Fully managed database proxy for RDS that pools and shares database connections.',
        deep_dive:
            'Supports MySQL, MariaDB, PostgreSQL, SQL Server, Aurora; reduces failover time by up to 66% by holding application connections; protects DB from connection storms (especially from Lambda); credentials stored in Secrets Manager; IAM authentication supported; pinning may occur with session variables/temp tables/locks (reduces connection reuse); deployed in VPC subnets; pricing per vCPU of the database instance(s) per hour.',
    },
    {
        name: 'redshift',
        overview:
            'Fully managed petabyte-scale data warehouse for OLAP workloads.',
        deep_dive:
            'Cluster of leader node (query planning) + compute nodes (parallel execution); node types: RA3 (managed storage, separates compute/storage), DC2 (dense compute, legacy); columnar storage with compression; massively parallel processing (MPP); Redshift Spectrum queries data in S3 without loading; concurrency scaling adds capacity automatically (1 free hour per day, then paid); Redshift Serverless auto-provisions and scales by RPU (Redshift Processing Units); single-AZ by default, but RA3 supports Multi-AZ; automated backups retained 1-35 days; cross-region snapshot copy; integrates with Glue Data Catalog, Lake Formation, QuickSight; Redshift ML uses SageMaker for in-database ML; data sharing across clusters and accounts.',
    },
    {
        name: 'rekognition',
        overview:
            'Image and video analysis service using deep learning.',
        deep_dive:
            'Pre-trained for face detection/comparison/search, label detection, celebrity recognition, text in images (OCR), content moderation, PPE detection (mask/helmet/gloves), face liveness; Custom Labels trains custom image classification/object detection models with as few as 10 images; supports image input from S3 or bytes, video from Kinesis Video Streams or S3; face collections store face metadata for search (not actual images); pricing per image/minute of video processed plus storage for face collections.',
    },
    {
        name: 'repost',
        overview:
            'AWS re:Post; community Q&A service for AWS technical questions.',
        deep_dive:
            'Replaces AWS Discussion Forums; questions and answers tagged by AWS service; AWS-verified experts and AWS employees provide answers; reputation system rewards contributors; AWS re:Post Private offers a private Q&A community for Enterprise Support customers with integration to their internal communities; free for public re:Post.',
    },
    {
        name: 'route53',
        overview:
            'Highly available DNS and domain registration service.',
        deep_dive:
            'Hosted zone types: public (internet-resolvable) and private (resolvable within associated VPCs); record types: A, AAAA, CNAME, MX, TXT, SRV, NS, SOA, PTR, plus alias records (Route 53-specific, can point to ALB/CloudFront/S3 website/API Gateway/VPC endpoint/Global Accelerator at zone apex, free); routing policies: Simple, Weighted, Latency, Failover (active-passive), Geolocation, Geoproximity (requires traffic flow), Multi-Value Answer (up to 8 random healthy), IP-based; health checks: HTTP/HTTPS/TCP, with optional string matching, inversion, calculated checks, CloudWatch alarm checks; DNSSEC supported for domain registration and DNS service; Route 53 Resolver provides inbound/outbound endpoints for hybrid DNS; supports DNS query logging to CloudWatch Logs.',
    },
    {
        name: 's3',
        overview:
            'Object storage service offering industry-leading scalability, durability, and availability.',
        deep_dive:
            'Buckets are global namespace, regional in residency; 11 9\'s durability across 3+ AZs (One Zone classes: single AZ); object size 0 bytes to 5 TB (single PUT max 5 GB, multipart upload required above); multipart upload recommended for objects > 100 MB; storage classes: Standard, Standard-IA (30-day min, 128 KB min), One Zone-IA (single AZ, 30-day min), Intelligent-Tiering (auto-moves between tiers), Glacier Instant Retrieval (90-day, 128 KB), Glacier Flexible Retrieval (90-day, 40 KB, 1-5 min/3-5 hr/5-12 hr), Glacier Deep Archive (180-day, 12 hr/48 hr), Express One Zone (single AZ, ultra-low latency); encryption: SSE-S3 (default, AES-256), SSE-KMS, SSE-C (customer-provided), DSSE-KMS (dual-layer), client-side; versioning suspendable but not removable once enabled; MFA Delete adds extra auth for delete; replication: CRR and SRR (replicates only objects created after rule); strong read-after-write consistency for all operations; access via bucket policies, ACLs (legacy), IAM, access points; presigned URLs for time-limited access.',
    },
    {
        name: 's3-object-lock',
        overview:
            'S3 feature that prevents object deletion or overwrite for a fixed period or indefinitely (WORM).',
        deep_dive:
            'Two retention modes: Governance mode (users with s3:BypassGovernanceRetention can override) and Compliance mode (no one, including root user, can override or shorten retention); Legal Hold places indefinite hold independent of retention period; must be enabled at bucket creation (cannot be added later via console, requires AWS Support for existing buckets); requires versioning enabled; commonly used for regulatory compliance (SEC 17a-4, FINRA, CFTC); does not affect object permissions, only deletion/overwrite.',
    },
    {
        name: 'sagemaker',
        overview:
            'Fully managed platform for building, training, and deploying machine learning models.',
        deep_dive:
            'Components: Studio (web IDE), Notebook Instances (legacy Jupyter), Training jobs, Endpoints, Batch Transform, Pipelines (CI/CD for ML), Model Registry, Feature Store, Model Monitor, Clarify, Debugger, Ground Truth, Data Wrangler, Autopilot, Canvas, JumpStart, Neo, HyperParameter Tuning; training data formats: CSV, Protobuf RecordIO, JSON, Libsvm, JPEG, PNG; input modes: File (download to volume first) and Pipe (stream from S3, requires RecordIO, faster); inference options: real-time endpoints (persistent HTTPS), serverless inference, asynchronous inference (large payloads, long-running), Batch Transform (offline scoring); Managed Spot Training up to 90% savings; built-in algorithms include XGBoost, Linear Learner, K-Means, DeepAR, BlazingText, Image Classification, Object Detection, Random Cut Forest.',
    },
    {
        name: 'sagemaker-batch-transform',
        overview:
            'SageMaker feature for offline inference on entire datasets without a persistent endpoint.',
        deep_dive:
            'Designed for batch scoring of large datasets in S3; input/output formats: CSV, JSON, RecordIO; supports input/output filtering and joining of input with predictions; auto-scales compute for the duration of the job then terminates (no idle costs); suitable for use cases not requiring sub-second latency (nightly scoring, ETL pipelines); billed per instance-hour for transformation duration; differs from real-time endpoints which run continuously.',
    },
    {
        name: 'sagemaker-built-in-algorithms',
        overview:
            'Pre-built ML algorithms packaged in SageMaker containers ready for training and deployment.',
        deep_dive:
            'Includes: XGBoost (gradient boosted trees), Linear Learner (regression/binary/multiclass), K-Means (clustering), K-Nearest Neighbors, Factorization Machines, PCA (dimensionality reduction), Random Cut Forest (anomaly detection), DeepAR Forecasting (time series), BlazingText (Word2Vec, text classification), Image Classification, Object Detection, Semantic Segmentation, Object2Vec, Sequence-to-Sequence, IP Insights, LDA and NTM (topic modeling), Neural Topic Model; most expect RecordIO-Protobuf or CSV input; supported on training instances and managed spot training; documentation specifies hyperparameters and instance types per algorithm.',
    },
    {
        name: 'sagemaker-canvas',
        overview:
            'No-code visual interface for building ML models from tabular, image, and text data.',
        deep_dive:
            'Targets business analysts without ML expertise; supports classification, regression, time-series forecasting, image and text classification; uses SageMaker Autopilot under the hood for AutoML; data sources: S3, Redshift, Snowflake, RDS, local files, Salesforce, Databricks, plus Athena; users can share trained models to SageMaker Studio for further refinement; generative AI integration with Bedrock for text generation/summarization; billed per workspace session and training hours.',
    },
    {
        name: 'sagemaker-clarify',
        overview:
            'SageMaker feature that detects bias in data/models and explains predictions.',
        deep_dive:
            'Pre-training bias metrics: Class Imbalance (CI), Difference in Proportions of Labels (DPL), Kullback-Leibler Divergence (KL), Jensen-Shannon Divergence (JS); post-training bias metrics evaluate model predictions; explainability via SHAP (Shapley Additive exPlanations) values for global and per-instance feature attribution; integrates with Model Monitor for ongoing bias and explainability monitoring; supports tabular, NLP, and computer vision data; outputs reports to S3.',
    },
    {
        name: 'sagemaker-data-wrangler',
        overview:
            'Visual data preparation tool in SageMaker Studio for ML workflows.',
        deep_dive:
            '300+ built-in transformations (handle missing values, encode categoricals, normalize, parse dates, custom PySpark/Python/SQL); imports from S3, Athena, Redshift, Snowflake, Databricks, EMR, Feature Store; data quality and insights report generates bias/correlation/anomaly analysis; exports prepared data as SageMaker Pipeline, Python script, Feature Store ingestion job, or training job; runs on managed ml.m5.4xlarge by default; billed per hour of instance use.',
    },
    {
        name: 'sagemaker-debugger',
        overview:
            'SageMaker feature that monitors training jobs in real-time to detect problems and optimize models.',
        deep_dive:
            'Captures tensors (weights, gradients, biases, activations) during training and saves to S3; built-in rules detect common problems like vanishing/exploding gradients, overfitting, underfitting, dead ReLU, loss not decreasing, low GPU utilization; custom rules supported; profiling captures CPU, GPU, memory, I/O metrics to identify training bottlenecks; supports TensorFlow, PyTorch, MXNet, XGBoost; results visualized in SageMaker Studio; helps debug training failures and reduce training time/cost.',
    },
    {
        name: 'sagemaker-deepar',
        overview:
            'SageMaker built-in algorithm for forecasting one-dimensional time series using recurrent neural networks.',
        deep_dive:
            'Supervised algorithm trained on a collection of related time series; produces probabilistic forecasts (point and quantile predictions); supports related (covariate) and categorical features; common uses: demand forecasting, financial planning, capacity planning; input format: JSON Lines (start, target, optional cat and dynamic_feat); hyperparameters include context_length, prediction_length, num_layers, num_cells, learning_rate, epochs; supports CPU and GPU instances.',
    },
    {
        name: 'sagemaker-elastic-inference',
        overview:
            'Service that attaches low-cost GPU-powered acceleration to EC2/SageMaker/ECS instances for ML inference.',
        deep_dive:
            'Reduces inference cost by up to 75% by attaching fractional GPU only when needed instead of a full GPU instance; supports TensorFlow, PyTorch, MXNet, ONNX (via MXNet/PyTorch); accelerator types: eia2.medium/large/xlarge with different memory/throughput; AWS announced end of new customer access in 2023, customers should migrate to Inferentia-powered Inf1/Inf2 instances.',
    },
    {
        name: 'sagemaker-endpoints',
        overview:
            'SageMaker real-time inference endpoints; persistent HTTPS endpoints for low-latency predictions.',
        deep_dive:
            'Endpoint types: real-time (always-on, billed per instance-hour, sub-second latency), serverless inference (auto-scales to zero, pay per request, cold starts possible), asynchronous inference (large payloads up to 1 GB, long inference time up to 1 hour, requests queued); multi-model endpoints host thousands of models on a single endpoint, models loaded on demand from S3; multi-container endpoints run multiple containers behind one endpoint; auto-scaling supported via Application Auto Scaling on invocations per instance or custom metrics; production variants enable A/B testing and canary deployments; shadow testing routes copies of traffic without affecting users.',
    },
    {
        name: 'sagemaker-feature-store',
        overview:
            'Centralized repository for storing, sharing, and managing ML features across training and inference.',
        deep_dive:
            'Two stores: Online (low-latency real-time inference, single-digit ms reads from a key-value store) and Offline (historical training data stored in S3 as Parquet, queryable via Athena); ingestion via streaming or batch (SageMaker Processing/Glue); supports feature groups with record identifier and event time; integrates with Data Wrangler, Pipelines, Studio; enables time-travel queries for point-in-time-correct training data; avoids training/serving skew; pricing per online write/read and offline storage.',
    },
    {
        name: 'sagemaker-ground-truth',
        overview:
            'Data labeling service that produces high-quality training datasets using human annotators.',
        deep_dive:
            'Workforce options: Amazon Mechanical Turk (public), private workforce (your employees), vendor workforce (AWS Marketplace vendors); supports image classification, object detection, semantic segmentation, text classification, named entity recognition, video object tracking, 3D point cloud; uses active learning to auto-label easy examples reducing human effort and cost; Ground Truth Plus offers fully managed labeling service (AWS provides workforce and project management); outputs to S3 in augmented manifest format directly consumable by SageMaker training.',
    },
    {
        name: 'sagemaker-hyperparameter-tuning',
        overview:
            'SageMaker Automatic Model Tuning; finds the best model version by optimizing hyperparameters.',
        deep_dive:
            'Search strategies: Bayesian (default, learns from prior trials), Random (independent samples), Grid (exhaustive), Hyperband (early-stopping for deep learning); supports continuous, integer, and categorical hyperparameters; objective metric must be emitted by the training algorithm to CloudWatch Logs; warm start initializes a new tuning job from prior jobs to reduce cost; parallel and sequential trial execution; integrates with built-in algorithms and custom training scripts; billed per training job hour.',
    },
    {
        name: 'sagemaker-jumpstart',
        overview:
            'SageMaker hub of pre-trained foundation models and solution templates for one-click deployment.',
        deep_dive:
            'Includes hundreds of pre-trained models for text, vision, tabular tasks from Hugging Face, PyTorch Hub, TensorFlow Hub, plus proprietary models; foundation models include Llama, Falcon, Stable Diffusion, FLAN-T5, BloomZ for direct deployment or fine-tuning; solution templates provide end-to-end ML workflows (fraud detection, demand forecasting, churn prediction); fine-tune models with your data via Studio UI; deploy to real-time or async endpoints; supports private model hubs for organization-curated models.',
    },
    {
        name: 'sagemaker-model-cards',
        overview:
            'SageMaker feature for documenting ML model information, intended use, and performance.',
        deep_dive:
            'Centralizes model documentation: intended use, model owner, training datasets, evaluation metrics, ethical considerations, caveats; integrates with Model Registry to attach cards to registered model versions; supports approval workflows and lineage tracking; helps satisfy governance and regulatory requirements (e.g., model risk management); cards stored in JSON and viewable in Studio.',
    },
    {
        name: 'sagemaker-model-monitor',
        overview:
            'SageMaker feature that monitors deployed models for data and prediction quality degradation.',
        deep_dive:
            'Four monitor types: Data Quality (statistical drift in input features vs. baseline), Model Quality (prediction accuracy vs. ground truth), Bias Drift (using Clarify metrics), Feature Attribution Drift (SHAP-based); baselines computed from training data; monitoring schedules run on captured inference data (Data Capture must be enabled on endpoint); alerts via CloudWatch metrics and EventBridge; supports built-in statistical analysis and custom containers; output to S3.',
    },
    {
        name: 'sagemaker-model-registry',
        overview:
            'SageMaker centralized catalog for versioning, approving, and deploying ML models.',
        deep_dive:
            'Model package groups contain versioned model packages; approval states: Approved, Rejected, PendingManualApproval; supports cross-account sharing; integrates with Pipelines for automated registration; CloudFormation and IaC support; tracks model lineage including training data, training job, hyperparameters, metrics; can trigger downstream deployment via EventBridge on approval; supports custom metadata.',
    },
    {
        name: 'sagemaker-neo',
        overview:
            'SageMaker feature that optimizes ML models for deployment on edge devices and cloud instances.',
        deep_dive:
            'Compiles models trained with TensorFlow, PyTorch, MXNet, ONNX, XGBoost, scikit-learn for target hardware: Intel/AMD/ARM CPUs, NVIDIA GPUs, Inferentia, edge devices (Raspberry Pi, Jetson, smartphones); typically 2x performance improvement with no accuracy loss by applying hardware-specific optimizations; compiled models can be deployed via SageMaker endpoints or downloaded for edge deployment; integrates with IoT Greengrass for edge model deployment via SageMaker Edge Manager (deprecated in 2024).',
    },
    {
        name: 'sagemaker-pipelines',
        overview:
            'SageMaker native CI/CD service for orchestrating ML workflows from data prep to deployment.',
        deep_dive:
            'Define pipelines as Python DAGs using SageMaker Python SDK; step types: ProcessingStep, TrainingStep, TransformStep, TuningStep, ModelStep, ConditionStep, CallbackStep, LambdaStep, EMRStep; supports parameterization for reuse; integrates with Model Registry, Feature Store, Clarify, Model Monitor; lineage tracking shows data and model provenance; supports caching to skip redundant steps; execution via Studio UI, SDK, EventBridge schedules; integrates with CodeCommit/CodePipeline for full CI/CD.',
    },
    {
        name: 'sagemaker-processing',
        overview:
            'SageMaker feature for running data preprocessing, postprocessing, and model evaluation jobs.',
        deep_dive:
            'Runs preprocessing/postprocessing scripts on managed infrastructure with full Spark or scikit-learn containers, or custom containers; built-in processors: SKLearnProcessor, PySparkProcessor, XGBoostProcessor; auto-scales instances for the job duration; input/output via S3; commonly used for ETL, feature engineering, model evaluation, bias and explainability analysis; integrates with Pipelines as ProcessingStep; billed per instance-second.',
    },
    {
        name: 'sagemaker-training',
        overview:
            'SageMaker managed training service for running ML training jobs at any scale.',
        deep_dive:
            'Supports built-in algorithms, deep learning frameworks (TensorFlow, PyTorch, MXNet, Hugging Face), and custom containers; instance types: ml.m/c/r (CPU), ml.p/g (GPU), ml.trn1 (Trainium), ml.inf (Inferentia); distributed training via SageMaker Distributed Data Parallel (SMDDP) and Model Parallel (SMP) libraries, or framework-native (Horovod, PyTorch DDP); managed Spot Training saves up to 90% with automatic checkpointing; supports warm pools to reduce instance startup time; output models saved to S3; integrates with HPO, Experiments, Debugger; supports incremental training and transfer learning.',
    },
    {
        name: 'sam',
        overview:
            'AWS Serverless Application Model; framework for building serverless applications using simplified syntax.',
        deep_dive:
            'Extension of CloudFormation with transform AWS::Serverless-2016-10-31; resource types: AWS::Serverless::Function (Lambda + role + event sources), AWS::Serverless::Api (API Gateway), AWS::Serverless::HttpApi, AWS::Serverless::StateMachine (Step Functions), AWS::Serverless::Application, AWS::Serverless::LayerVersion, AWS::Serverless::SimpleTable; SAM CLI commands: sam init (scaffold), sam build (package code+deps), sam local invoke/start-api (local testing), sam package, sam deploy (one-click deploy with guided prompts), sam sync (faster iterations); under the hood transforms to native CloudFormation; can mix SAM and CFN resources in same template.',
    },
    {
        name: 'savings-plans',
        overview:
            'Flexible pricing model offering compute discounts for 1- or 3-year commitments to consistent usage.',
        deep_dive:
            'Three types: Compute Savings Plans (most flexible, applies to EC2 across any region/family/size/OS/tenancy plus Fargate and Lambda, up to 66% off), EC2 Instance Savings Plans (commit to a specific instance family in a region, up to 72% off, regardless of AZ/size/OS/tenancy), SageMaker Savings Plans (up to 64% off SageMaker instance usage); commitment in $/hour; payment options: All Upfront, Partial Upfront, No Upfront (lowest discount); compared to RIs: SPs apply automatically to matching usage, don\'t require reservation of specific configurations; can\'t be sold or modified; Cost Explorer recommends Savings Plans.',
    },
    {
        name: 'scp',
        overview:
            'Service Control Policies; Organizations policies that set maximum permissions for accounts and OUs.',
        deep_dive:
            'Attached to root, OUs, or individual accounts; do NOT grant permissions, only set the maximum boundary; for an action to succeed, both the IAM policy AND the SCP (and any permissions boundary) must allow it; do not affect the management (master) account; default FullAWSAccess SCP allows everything; common SCP patterns: deny specific regions, deny disabling logging (CloudTrail/Config), deny root user actions, restrict instance types, require encryption; require All Features mode in Organizations (cannot use with Consolidated Billing only).',
    },
    {
        name: 'secrets-manager',
        overview:
            'Service for managing and rotating secrets like database credentials and API keys.',
        deep_dive:
            'Secrets encrypted with KMS; native automatic rotation for RDS, Redshift, DocumentDB via AWS-provided Lambda templates; custom rotation via your own Lambda function for other secrets (OAuth tokens, third-party APIs); rotation schedule configurable; cross-region replication for DR; resource-based policies control cross-account access; retrieve via GetSecretValue API or client-side caching libraries (Java/Python/.NET); $0.40 per secret per month + $0.05 per 10,000 API calls; differs from Parameter Store (which is cheaper but lacks built-in rotation).',
    },
    {
        name: 'security-groups',
        overview:
            'Stateful virtual firewall at the instance/ENI level controlling inbound and outbound traffic.',
        deep_dive:
            'Attached to ENIs (not instances directly); stateful (return traffic automatically allowed); support only allow rules, no deny; default SG allows all outbound and inbound from same SG; newly created SG allows all outbound and no inbound; can reference other SGs as source/destination by ID for dynamic membership; default limit: 60 inbound + 60 outbound rules per SG, 5 SGs per ENI; bound to a single VPC; evaluates all rules to determine if traffic is allowed (unlike NACLs which evaluate in order); when allowing communication between two instances, use private IP addresses, not public/Elastic IPs.',
    },
    {
        name: 'security-hub',
        overview:
            'Service that aggregates security findings from multiple AWS services into a single dashboard.',
        deep_dive:
            'Aggregates from GuardDuty, Inspector, Macie, IAM Access Analyzer, Firewall Manager, Systems Manager Patch Manager, plus 60+ partner integrations; runs automated compliance checks against standards: AWS Foundational Security Best Practices (FSBP), CIS AWS Foundations Benchmark, PCI DSS, NIST 800-53; findings in standard AWS Security Finding Format (ASFF); cross-region aggregation; delegated administrator in Organizations; integrates with EventBridge for automation; pricing per finding ingested + check evaluated.',
    },
    {
        name: 'service-catalog',
        overview:
            'Service for managing catalogs of approved IT services for users to self-provision.',
        deep_dive:
            'Products are CloudFormation templates (or Terraform via Service Catalog Engine); portfolios group products and are shared with users/groups/roles; constraints control how products are deployed (launch, notification, template, stack set, tag update); supports shared portfolios across accounts/OUs via AWS Organizations; integrates with Service Catalog AppRegistry for application metadata; AWS Marketplace integration; commonly used for self-service IT in enterprises; free service, pay for provisioned resources.',
    },
    {
        name: 'service-quotas',
        overview:
            'Central service for viewing and managing AWS service quotas (formerly limits).',
        deep_dive:
            'Successor to the AWS Trusted Advisor service limits feature; supports both adjustable and non-adjustable quotas; request quota increases via console or API (RequestServiceQuotaIncrease); some quotas auto-approve based on account history; cross-region template (Service Quotas requests applied uniformly via Quota Request Template + Organizations); CloudWatch alarms on quota utilization (e.g., 80% threshold); applies to most services including EC2, VPC, Lambda, S3, DynamoDB, ELB.',
    },
    {
        name: 'shield',
        overview:
            'DDoS protection service for AWS resources.',
        deep_dive:
            'Two tiers: Shield Standard (free, automatic for all AWS customers, protects against common network/transport layer DDoS, integrated with CloudFront/Route 53/Global Accelerator) and Shield Advanced ($3,000/month, 1-year commitment); Shield Advanced adds: protection for ELB/EC2/EIP/Route 53/CloudFront/Global Accelerator, 24/7 Shield Response Team (SRT) access, cost protection for scaling during attacks, AWS WAF included at no extra cost, attack diagnostics and reports, integrates with Firewall Manager for centralized policies.',
    },
    {
        name: 'snowball',
        overview:
            'Petabyte-scale data transport device for offline data migration to AWS (legacy series).',
        deep_dive:
            'Original Snowball (50 TB or 80 TB usable, now mostly succeeded by Snowball Edge); shipped to your location, you load data, return to AWS for ingestion to S3; encrypts data with KMS, includes E-Ink shipping label and tamper-evident enclosure; for ongoing or multi-petabyte migrations consider Snowmobile (deprecated) or Snowcone; current Snow Family is primarily Snowball Edge (Storage Optimized, Compute Optimized) and Snowcone.',
    },
    {
        name: 'snowball-edge',
        overview:
            'Snowball device with onboard compute and storage for edge processing or data transfer.',
        deep_dive:
            'Two configurations: Storage Optimized (210 TB NVMe or 80 TB HDD usable) and Compute Optimized (42 TB or 28 TB with GPU); runs EC2 instances and Lambda functions locally; supports S3-compatible object storage, NFS, and block storage; clusterable (3-16 devices for HA); ideal for disconnected environments (ships, factories, military) and data migration; encrypted at rest; managed via AWS OpsHub GUI or CLI.',
    },
    {
        name: 'snowcone',
        overview:
            'Smallest member of the Snow Family for portable edge computing and data transfer.',
        deep_dive:
            'Two models: HDD Snowcone (8 TB HDD) and SSD Snowcone (14 TB NVMe); weighs ~2.1 kg, ruggedized, dust/water-resistant; runs EC2 compute and supports DataSync agent for transfers; can be battery-powered or used in vehicles, drones, IoT scenarios; suitable for small-scale data collection in disconnected/limited-connectivity environments; ships device with data via DataSync or by physical return to AWS.',
    },
    {
        name: 'sns',
        overview:
            'Fully managed publish/subscribe messaging service for pub-sub and notifications.',
        deep_dive:
            'Topic types: Standard (unlimited throughput, best-effort ordering, at-least-once delivery) and FIFO (300 messages/sec or 10 MB/sec, exact ordering, exactly-once via dedup, can only deliver to SQS FIFO); subscribers: SQS, Lambda, Firehose, HTTP/S, Email, SMS, mobile push (APNS, FCM, ADM, Baidu); message filtering via subscription filter policies (JSON, max 5 attributes, conditionals: exact, anything-but, prefix, numeric range, exists, AND/OR); message size up to 256 KB (use Extended Client Library for larger via S3); cross-region/cross-account topic subscriptions supported; SSE with KMS; DLQ via SQS for failed deliveries; message retries with delivery policy.',
    },
    {
        name: 'spark',
        overview:
            'Apache Spark; open-source distributed processing engine for big data workloads on AWS.',
        deep_dive:
            'Available on AWS via Amazon EMR, Glue ETL, EMR on EKS, EMR Serverless, Athena Spark, SageMaker Processing; supports batch processing, streaming (Structured Streaming), SQL (Spark SQL), ML (MLlib), and graph processing (GraphX); APIs in Scala, Java, Python (PySpark), R, SQL; integrates with S3 via EMRFS, Glue Data Catalog as Hive metastore, Lake Formation for fine-grained access; commonly used for ETL, data lake processing, ML feature engineering.',
    },
    {
        name: 'spot-instances',
        overview:
            'Unused EC2 capacity available at up to 90% discount versus On-Demand pricing.',
        deep_dive:
            'Priced by AWS based on long-term supply/demand for each instance type/AZ; interruption with 2-minute warning when capacity is needed or price exceeds bid; suitable only for fault-tolerant, flexible workloads (batch, CI/CD, big data, containers); request types: persistent (re-requests on interruption) or one-time; Spot Fleet and EC2 Fleet provision spot capacity across multiple instance types and AZs for diversification; capacity-optimized allocation strategy reduces interruption rate; integrates with Auto Scaling, ECS, EKS, EMR, Batch; Spot Blocks (1-6 hour reserved spot) deprecated.',
    },
    {
        name: 'sqs',
        overview:
            'Fully managed message queue service that decouples microservices and serverless apps.',
        deep_dive:
            'Queue types: Standard (nearly unlimited throughput, at-least-once delivery, best-effort ordering) and FIFO (up to 3000 msg/sec with batching/300 without, exactly-once, strict ordering); message size up to 256 KB (use Extended Client Library to store larger in S3); message retention 1 minute to 14 days (default 4 days); visibility timeout 0 sec to 12 hours (default 30 sec) hides messages from other consumers during processing; long polling (WaitTimeSeconds 1-20s) reduces empty responses and cost vs short polling (default 0); delay queues hide new messages 0-15 min; DLQ moves failed messages after maxReceiveCount; SSE via KMS; FIFO uses message group ID for ordering within group and parallel processing across groups.',
    },
    {
        name: 'sso',
        overview:
            'AWS Single Sign-On (renamed to IAM Identity Center); workforce identity service for SSO.',
        deep_dive:
            'Same as IAM Identity Center (rebranded in 2022); identity sources: built-in directory, Active Directory (AWS Directory Service or AD Connector), external IdP via SAML 2.0; permission sets defined as IAM policies and assigned to users/groups for specific AWS accounts; auto-provisions short-lived IAM roles in target accounts; integrates with AWS Organizations; supports SCIM for automated user provisioning from IdPs like Okta, Azure AD; SSO access to AWS console, CLI v2 (aws sso login), and SAML/OIDC business apps.',
    },
    {
        name: 'stable-diffusion',
        overview:
            'Stability AI\'s Stable Diffusion text-to-image foundation models available via Amazon Bedrock.',
        deep_dive:
            'Generates images from text prompts; available models on Bedrock include Stable Diffusion XL (SDXL) and Stable Image variants; supports image-to-image (img2img), inpainting, outpainting via API parameters; output formats PNG/JPEG; common parameters: prompt, negative_prompt, cfg_scale, seed, steps, style_preset; billed per generated image; usable through Bedrock InvokeModel API, integrates with Bedrock Agents and Guardrails.',
    },
    {
        name: 'step-functions',
        overview:
            'Serverless orchestration service that coordinates workflows of AWS services using state machines.',
        deep_dive:
            'Two workflow types: Standard (long-running up to 1 year, exactly-once, at-least-once on retry, billed per state transition) and Express (high-throughput up to 100K/sec, at-most-once or at-least-once, max 5 minutes, billed per invocation + duration); state types: Task (do work via Lambda, ECS, SNS, SQS, DynamoDB, etc.), Choice (branching), Parallel, Map (iterate), Wait, Pass, Succeed, Fail; defined in Amazon States Language (ASL, JSON-based) or via Workflow Studio drag-and-drop; input/output processing filters: InputPath, Parameters, ResultSelector, ResultPath, OutputPath; supports error handling with Retry and Catch; nested workflows via Map and Parallel; integrates with 200+ AWS services via SDK integration.',
    },
    {
        name: 'storage-gateway',
        overview:
            'Hybrid cloud storage service connecting on-premises environments to AWS storage.',
        deep_dive:
            'Four gateway types: S3 File Gateway (NFS/SMB to S3 with local caching), FSx File Gateway (SMB cache for FSx for Windows), Volume Gateway (iSCSI block storage, cached mode keeps hot data local with S3 backing, or stored mode keeps all data local with async S3 backup), Tape Gateway (iSCSI VTL to S3/Glacier/Deep Archive); deployed as VM (VMware, Hyper-V, KVM, EC2) or hardware appliance; supports Active Directory integration for SMB; encryption in-transit with TLS; data stored encrypted in S3 with SSE; differs from DataSync which is for one-time/scheduled bulk transfer.',
    },
    {
        name: 'sts',
        overview:
            'Security Token Service that issues temporary, limited-privilege credentials for AWS principals.',
        deep_dive:
            'Global service with endpoints in every region (use regional endpoints to reduce latency and for FIPS compliance); key APIs: AssumeRole (cross-account or escalation), AssumeRoleWithSAML (federated SAML), AssumeRoleWithWebIdentity (Cognito, Facebook, Google, Amazon, custom OIDC), GetSessionToken (MFA-enforced sessions), GetFederationToken (federated user, IAM user calling), DecodeAuthorizationMessage (error details); session duration default 1 hour, up to 12 hours for roles (configurable per role); credentials consist of AccessKeyId, SecretAccessKey, SessionToken; supports external ID for cross-account third-party access; session policies further restrict permissions at AssumeRole time.',
    },
    {
        name: 'systems-manager',
        overview:
            'Unified management service providing operational data and automation for AWS and on-premises resources.',
        deep_dive:
            'Capabilities organized into categories: Operations Management (Explorer, OpsCenter, Incident Manager), Application Management (Application Manager, AppConfig, Parameter Store), Change Management (Change Manager, Automation, Maintenance Windows, Change Calendar), Node Management (Fleet Manager, Compliance, Inventory, Session Manager, Run Command, State Manager, Patch Manager, Distributor), Shared Resources (Documents); SSM Agent required on managed nodes (pre-installed on most AMIs); Session Manager provides shell access without SSH/bastion; Patch Manager automates OS patching with baselines and maintenance windows; State Manager enforces desired configuration; Run Command executes commands across fleet; integrates with CloudWatch, Config, IAM, KMS.',
    },
    {
        name: 'textract',
        overview:
            'Service that extracts text, forms, and tables from scanned documents using OCR and ML.',
        deep_dive:
            'Extracts printed text, handwriting, tables, key-value pairs (forms), and structured data from PDFs, images, scanned documents; specialized features: Analyze Document (text+forms+tables), Analyze Expense (invoices/receipts), Analyze ID (driver\'s licenses/passports), Analyze Lending (mortgage documents); Queries feature lets you ask natural-language questions; Detect Document Text for basic OCR; sync API for single-page documents, async API for multi-page PDFs from S3; integrates with A2I for human review; pricing per page, varies by feature.',
    },
    {
        name: 'timestream',
        overview:
            'Fully managed serverless time-series database for IoT and operational applications.',
        deep_dive:
            'Purpose-built for time-series data with automatic tiering: in-memory store for fast point-in-time queries, magnetic store for historical analysis; SQL-compatible query language with time-series-specific functions; integrates with Kinesis Data Streams, MSK, Grafana, QuickSight; scheduled queries pre-aggregate data; multi-measure records reduce ingestion costs vs single-measure; pricing per writes (per million), reads (per GB scanned), and storage; common uses: IoT telemetry, DevOps metrics, stock prices, click-stream analytics.',
    },
    {
        name: 'titan',
        overview:
            'Amazon Titan; family of foundation models from Amazon available via Bedrock.',
        deep_dive:
            'Titan Text models (G1 Express, Lite, Premier) for text generation, summarization, Q&A, classification; Titan Embeddings (text and multimodal) for vector embeddings used in RAG and semantic search; Titan Image Generator for text-to-image generation with built-in invisible watermark; Titan Multimodal Embeddings for image+text vector search; supports fine-tuning with custom data; integrates with Bedrock Guardrails, Agents, Knowledge Bases; trained with responsible AI considerations.',
    },
    {
        name: 'trainium',
        overview:
            'AWS custom chip purpose-built for high-performance, cost-effective ML training.',
        deep_dive:
            'Powers Trn1 and Trn1n EC2 instances; up to 50% lower training cost than comparable GPU-based instances; supports PyTorch, TensorFlow, JAX via AWS Neuron SDK; Trn1n adds 1600 Gbps EFAv2 networking for distributed training; supports BF16, FP32, TF32, FP8 data types; Trainium2 (Trn2) available with improved performance; integrates with SageMaker for managed training; suited for training large transformer/LLM models, computer vision, recommendation systems.',
    },
    {
        name: 'transit-gateway',
        overview:
            'Regional network transit hub that connects VPCs, on-premises networks, and Direct Connect.',
        deep_dive:
            'Hub-and-spoke replacement for complex VPC peering meshes; supports up to 5,000 attachments per Transit Gateway; attachments: VPC, VPN, Direct Connect Gateway, Transit Gateway Peering (cross-region), Connect (SD-WAN); route tables on TGW control which attachments can communicate; supports multicast; cross-account sharing via RAM; integrates with Direct Connect for hybrid via Transit VIF; supports up to 50 Gbps per VPC attachment, 1.25 Gbps per VPN tunnel; pricing per attachment hour + GB processed; appliance mode for stateful traffic inspection.',
    },
    {
        name: 'translate',
        overview:
            'Real-time and batch language translation service powered by neural machine translation.',
        deep_dive:
            'Supports 75+ languages; real-time TranslateText API for single requests, async StartTextTranslationJob for batch documents in S3; supports HTML, plain text, Word, PowerPoint, Excel, XLIFF; custom terminology applies your domain-specific glossary; formality customization (formal/informal) for some languages; profanity masking for customer-facing apps; active custom translation lets you train brand-voice models with parallel data; pricing per million characters translated.',
    },
    {
        name: 'trusted-advisor',
        overview:
            'Service that inspects AWS environment against best practices in five categories.',
        deep_dive:
            'Categories: Cost Optimization, Performance, Security, Fault Tolerance, Service Limits (now in Service Quotas), Operational Excellence; checks include idle EC2/ELB/RDS, underutilized resources, security group concerns, MFA on root, S3 bucket permissions, Service Limits utilization; Basic/Developer Support plans get 7 core checks; Business/Enterprise/Enterprise On-Ramp Support plans get all 100+ checks plus weekly notifications and API access; integrates with CloudWatch, EventBridge, SNS, Organizations.',
    },
    {
        name: 'vpc',
        overview:
            'Virtual Private Cloud; logically isolated virtual network within AWS.',
        deep_dive:
            'Regional resource that spans all AZs in a region; CIDR block /16 to /28, can add secondary CIDRs; subnets are AZ-scoped (one AZ per subnet); public subnet routes 0.0.0.0/0 to Internet Gateway; private subnet has no IGW route (uses NAT Gateway for outbound); reserved IP addresses: first 4 and last 1 of every subnet (5 total); default VPC has IGW, public subnet per AZ, and main route table; gateways: Internet Gateway (IPv4/IPv6 internet), Egress-Only Internet Gateway (IPv6 outbound only), Virtual Private Gateway (Site-to-Site VPN/Direct Connect target), Customer Gateway (your end of VPN), NAT Gateway, Carrier Gateway (Wavelength), Transit Gateway; supports VPC peering, Transit Gateway, VPC endpoints, VPC sharing via RAM; flow logs capture traffic metadata to S3/CloudWatch Logs/Kinesis Firehose.',
    },
    {
        name: 'vpc-endpoint',
        overview:
            'Private connection from a VPC to AWS services or VPC endpoint services without traversing the public internet.',
        deep_dive:
            'Two types: Gateway endpoints (free, only S3 and DynamoDB, added as route in route table, no cross-region or on-prem access) and Interface endpoints (powered by PrivateLink, charged per hour per AZ + GB, ENI with private IP in subnet, supports cross-region and on-premises access via Direct Connect/VPN, 100+ AWS services); Gateway Load Balancer endpoints for third-party appliance traffic inspection; endpoint policies restrict which actions can be performed via the endpoint; allows VPC resources to connect to AWS services without public IPs.',
    },
    {
        name: 'vpc-peering',
        overview:
            'One-to-one networking connection between two VPCs that routes traffic privately.',
        deep_dive:
            'Free to set up, no bandwidth bottleneck or single point of failure; supports cross-region and cross-account peering; CIDRs must not overlap; non-transitive (VPC A peered to B, B peered to C; A cannot reach C through B); requires route table updates in both VPCs; DNS resolution across peering optional; supports IPv4 and IPv6 (separate config); limited scalability for many VPCs (use Transit Gateway instead beyond ~10 VPCs); security groups can reference peered VPC\'s security groups (same region only).',
    },
    {
        name: 'vpn',
        overview:
            'AWS Site-to-Site VPN service that connects on-premises networks to a VPC over encrypted IPsec tunnels.',
        deep_dive:
            'Connection consists of a Customer Gateway (your on-prem device, physical or software) and a Virtual Private Gateway (attached to VPC) or Transit Gateway; two redundant IPsec tunnels per VPN connection (each up to 1.25 Gbps); supports BGP (dynamic) or static routing; encryption AES-128/256 with PFS; AWS Client VPN provides OpenVPN-based remote user access (authenticated via AD, SAML, or mutual TLS); accelerated VPN routes traffic over AWS Global Accelerator for better performance; alternative to Direct Connect with lower setup time and cost but lower bandwidth and higher latency.',
    },
    {
        name: 'waf',
        overview:
            'Web Application Firewall protecting web apps from common exploits at HTTP/HTTPS layer.',
        deep_dive:
            'Deploys on CloudFront, ALB, API Gateway, AppSync, Cognito user pools, App Runner; web ACLs contain rules with statements: IP set match, geographic match, size constraint, SQLi attack, XSS attack, string match, regex pattern, label match, rate-based (track requests per 5-min window per IP); managed rule groups from AWS and AWS Marketplace cover OWASP Top 10, bot control, account takeover, etc.; rule actions: Allow, Block, Count, CAPTCHA, Challenge; supports rate limiting, geo-blocking, header inspection, body inspection (up to 64 KB); logging to S3/CloudWatch Logs/Kinesis Firehose; AWS WAF Bot Control identifies and manages bot traffic.',
    },
    {
        name: 'wavelength',
        overview:
            'AWS infrastructure deployed at telecom 5G network edge for ultra-low latency mobile/edge apps.',
        deep_dive:
            'Wavelength Zones embed AWS compute (EC2) and storage (EBS) inside telecom carrier 5G networks (Verizon US, Vodafone UK/Germany, KDDI Japan, SK Telecom Korea); single-digit millisecond latency to 5G mobile devices; subset of EC2 instance types and EBS gp2 volumes available; carrier gateway routes traffic to carrier network and internet; ideal for AR/VR, ML inference at edge, real-time gaming, connected vehicles; differs from Local Zones (metro areas not on 5G) and Outposts (on customer premises).',
    },
    {
        name: 'well-architected-tool',
        overview:
            'Service that helps review AWS workloads against the AWS Well-Architected Framework.',
        deep_dive:
            'Evaluates workloads against the six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability, plus the Performance Pillar; users answer questions about a workload and receive risk assessments (High/Medium Risk Issues); lenses extend the framework for specific domains (Serverless, SaaS, IoT, ML, Financial Services, HPC, Analytics); supports custom lenses; integrates with Trusted Advisor and JIRA; free service.',
    },
    {
        name: 'xgboost',
        overview:
            'XGBoost; gradient boosted decision tree algorithm available as a SageMaker built-in algorithm.',
        deep_dive:
            'Supervised algorithm for classification, regression, and ranking; SageMaker provides XGBoost as built-in algorithm and as framework container for bring-your-own scripts; expects CSV or libsvm input by default, also Parquet and RecordIO-Protobuf; key hyperparameters: num_round, max_depth, eta (learning rate), subsample, colsample_bytree, scale_pos_weight, objective (binary:logistic, reg:squarederror, multi:softmax, etc.); supports distributed training and GPU acceleration; built-in early stopping; commonly used for tabular data tasks like churn, fraud, demand forecasting.',
    },
    {
        name: 'xray',
        overview:
            'Distributed tracing service for analyzing and debugging production applications and microservices.',
        deep_dive:
            'Captures request traces as they flow through application components; segments represent work done by a service, subsegments represent finer-grained operations (downstream calls, function-level); traces grouped by trace ID; X-Ray Daemon agent buffers segments and sends to X-Ray API; daemon deployment: install on EC2/on-prem, enable active tracing on Lambda, enable on Elastic Beanstalk, run container in ECS; required IAM permissions: PutTraceSegments, PutTelemetryRecords; service graph visualizes service dependencies, latencies, error rates; supports filter expressions to query traces, annotations (indexed) and metadata (not indexed) for custom data; SDK available for Java, Node.js, Python, .NET, Ruby, Go; integrates with CloudWatch Application Insights and CloudWatch ServiceLens.',
    },
]
