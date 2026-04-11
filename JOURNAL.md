# Journal: Project CloudIQ

> Documents hurdles, inflection points, useful notes, and relevant minutiae.

## Sprint 2: RAG Pipeline

Goal: Establish a working `/api/ask` endpoint.

### [S2-1] AWS Bedrock Client & Identity Verification

**Task**  
Configure local environment to communicate with AWS Bedrock.

**Decision**

Installing the AWS Serverless Application Model (SAM) was recommended for testing scripts and hitting endpoints locally in a "mock" AWS environment, but given the low number of queries I would be making for the next few weeks, I decided to defer this until I would actually be hitting AWS servers with some regularity.

That being said, installing the AWS CLI makes your life easier (although you could go the Cloudshell route or just click around in the Management Console), and the AWS SDK is necessary for making API calls, similar to the OpenAI SDK or Vercel AI SDK.

**Hurdles**

I heard about issues with accessing Anthropic's models on Bedrock, so I submitted a usage report to Anthropic for Claude Haiku 4.5 about a week prior to starting Sprint 1. But what ended up blocking me for almost 2 weeks was Bedrock's default service quotas.

I assumed there'd be no issues since most non-Marketplace models are now technically available on first invocation, but it looks like a combination of high demand for Bedrock inference and new account sandboxing caused my actual service quota to be set to 0. Thankfully the AWS Support Team was pretty helpful in pushing my ticket through the Services Team's queue and getting the sandbox lifted.

It ended up working out because I swapped Sprint 1's original goals with a parallel feature - the Mock Exam UI - but the lesson here is never assume!

<details>

<summary>Notes on installing SDK, setting up IAM access, requesting service quota increases, calling the Bedrock API.</summary>

**Install SDK**

```zsh
npm install @aws-sdk/client-bedrock-runtime
```

[AWS SDK for JavaScript v3](https://github.com/aws/aws-sdk-js-v3) | [Developer Guide](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/) | [API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/introduction/)

**API**

[How to set up environment](https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started-api.html)

[BedrockClient API](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bedrock/)

**Set up Access**

[IAM](https://docs.aws.amazon.com/bedrock/latest/userguide/security-iam.html)

"""

1. On the AWS Management Console Home page, select the IAM service or navigate to the IAM console at https://console.aws.amazon.com/iam/.

2. Select Users or Roles and then select your user or role.

3. In the Permissions tab, choose Add permissions and then choose Add AWS managed policy. Choose the AmazonBedrockFullAccess AWS managed policy.

4. To allow the user or role to subscribe to models, choose Create inline policy and then specify the following permissions in the JSON editor:
   """

_From [AWS Docs](https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started-api.html#gs-api-br-permissions)_

**Request Quota Increase (Starts at Zero)**

https://docs.aws.amazon.com/bedrock/latest/userguide/quotas.html

https://docs.aws.amazon.com/bedrock/latest/userguide/quotas-increase.html

**Tool Use**

Jan 29, 2026: "Amazon Bedrock now supports server-side tools in the Responses API using OpenAI API-compatible service endpoints. Bedrock already supports client-side tool use with the Converse, Chat Completions, and Responses APIs. Now, with the launch of server-side tool use for Responses API, Amazon Bedrock calls the tools directly without going through a client, enabling your AI applications to perform real-time, multi-step actions such as searching the web, executing code, and updating databases within the organizational, governance, compliance, and security boundaries of your AWS accounts. You can either submit your own custom Lambda function to run custom tools or use AWS-provided tools, such as notes and tasks."

https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html

</details>

<details>

<summary>Verifying the connections work.</summary>

**Check if AWS CLI is installed and get version**

```zsh
aws --version

aws-cli/2.34.13 Python/3.14.3 Darwin/24.6.0 exec-env/AmazonQ-For-IDE Version/2.0.0 exe/arm64
```

**Check AWS CLI configuration**

```zsh
aws configure list

NAME : VALUE : TYPE : LOCATION
profile : <not set> : None : None
access_key : 23UV : shared-credentials-file :
secret_key : /gkB : shared-credentials-file :
region : us-east-1 : config-file : ~/.aws/config

```

**Check access to Bedrock API and list Titan models**

```zsh
aws bedrock list-foundation-models --region us-east-1 --by-provider amazon --query 'modelSummaries[?contains(modelId, `titan-embed`) || contains(modelId, `titan-text`)].{ModelId:modelId,Name:modelName}' --output table 2>&1 | head -20
---
| ListFoundationModels |
+----------------------------------+----------------------------------+
| ModelId | Name |
+----------------------------------+----------------------------------+
| amazon.titan-embed-g1-text-02 | Titan Text Embeddings v2 |
| amazon.titan-embed-text-v1:2:8k | Titan Embeddings G1 - Text |
| amazon.titan-embed-text-v1 | Titan Embeddings G1 - Text |
| amazon.titan-embed-text-v2:0:8k | Titan Text Embeddings V2 |
| amazon.titan-embed-text-v2:0 | Titan Text Embeddings V2 |
| amazon.titan-embed-image-v1:0 | Titan Multimodal Embeddings G1 |
| amazon.titan-embed-image-v1 | Titan Multimodal Embeddings G1 |
+----------------------------------+----------------------------------+

```

**Check if Claude Haiku models available**

```zsh
aws bedrock list-foundation-models --region us-east-1 --by-provider anthropic --query 'modelSummaries[?contains(modelId, `haiku`)].{ModelId:modelId,Name:modelName}' --output table
---
| ListFoundationModels |
+----------------------------------------------+--------------------+
| ModelId | Name |
+----------------------------------------------+--------------------+
| anthropic.claude-haiku-4-5-20251001-v1:0 | Claude Haiku 4.5 |
| anthropic.claude-3-haiku-20240307-v1:0:48k | Claude 3 Haiku |
| anthropic.claude-3-haiku-20240307-v1:0:200k | Claude 3 Haiku |
| anthropic.claude-3-haiku-20240307-v1:0 | Claude 3 Haiku |
| anthropic.claude-3-5-haiku-20241022-v1:0 | Claude 3.5 Haiku |
+----------------------------------------------+--------------------+
```

</details>

_Note: Running these covers your bases, but for a quick sanity check for model access you can always open Playgrounds in Bedrock and try chatting with the models you want to invoke, along with the region/response mode you need._

### [S2-2] Build and test Bedrock embedding and RAG invocation functions

**Task**

- Create a reusable AWS Bedrock client with error handling to signal comm channels clear and credentials are all good.
- Write a script to convert text to vector embeddings using Bedrock's InvokeModel API.
- Write a function to pass user queries to Bedrock's Converse API, in this case the Haiku 4.5 FM.
- Validate both functions work correctly before integrating into the larger application.

**Decision**

Bedrock uses two main endpoint families: Mantle and Runtime.

Mantle is the newer engine for OpenAI-compatibility. It's also the one every LLM will recommend because AWS Docs recommends it. Presumably because OpenAI is the most popular inference framework, and Mantle is to OpenAI what the Aurora/RDS marketing push was to Oracle's dominance in DBs. _wink wink_

But since I don't have any legacy OpenAI code to port over, and my goal is to build as much of this on AWS as possible, going with the Runtime engine would be a better choice since it's AWS-native and allows me to learn an inference framework I haven't used before.

The basic breakdown for both is as follows.

_Mantle_

- Distributed inference engine designed specifically for OpenAI-compatible large-scale model serving. Use the OpenAI SDK to call Amazon Bedrock models by simply changing the base_url.
- Primary APIs: `Chat Completions`, `Responses`
- Endpoint Format: `bedrock-mantle.{region}.api.aws`
- Best For: Migrating existing OpenAI-based applications to AWS with minimal code changes or using external tools that expect an OpenAI API format.

_Bedrock_

- The AWS-native, serverless API for invoking models within the AWS ecosystem. Also the default way to use Amazon Bedrock via AWS SDKs or AWS CLI.
- Primary APIs: `InvokeModel`, `Converse`
- Endpoint Format: `bedrock-runtime.{region}.amazonaws.com`
- Best For: Applications built natively on AWS using IAM roles and AWS SDKs, especially those requiring complex features like Guardrails and Agents.

[Ref](https://docs.aws.amazon.com/bedrock/latest/userguide/endpoints.html)

<details>

<summary>Links for further reading.</summary>

[APIs supported by Amazon Bedrock:](https://docs.aws.amazon.com/bedrock/latest/userguide/apis.html)

- [Invoke API](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-invoke.html)
- [Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html)
- [Responses API](https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-mantle.html#bedrock-mantle-responses) / [OpenAI Docs](https://platform.openai.com/docs/api-reference/responses)
- [Chat Completions API](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-chat-completions.html)

[Supported foundation models in Amazon Bedrock:](https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html)

- [List Available Models API](https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-mantle.html#bedrock-mantle-models)

[Inference:](https://docs.aws.amazon.com/bedrock/latest/userguide/inference.html)

- [Learn about use cases for different model inference methods](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-methods.html)
- [How inference works in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-how.html)
- [Influence response generation with inference parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html)
- [Supported Regions and models for running model inference](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-supported.html)
- [Prerequisites for running model inference](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-prereq.html)
- [Generate responses in the console using playgrounds](https://docs.aws.amazon.com/bedrock/latest/userguide/playgrounds.html)
- [Enhance model responses with model reasoning](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-reasoning.html)
- [Optimize model inference for latency](https://docs.aws.amazon.com/bedrock/latest/userguide/latency-optimized-inference.html)
- [Generate responses using OpenAI APIs](https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-mantle.html)
- [Submit prompts and generate responses using the API](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-api.html)
- [Get validated JSON results from models](https://docs.aws.amazon.com/bedrock/latest/userguide/structured-output.html)
- [Use a computer use tool to complete an Amazon Bedrock model response](https://docs.aws.amazon.com/bedrock/latest/userguide/computer-use.html)

</details>
