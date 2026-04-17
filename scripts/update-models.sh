#!/bin/bash

echo '# Bedrock Model List' > models/model-list.md \
&& echo "Last updated: $(date)" >> models/model-list.md \
&& echo -e "\n| Provider | Name | ID | Input | Output | Stream | Type | Status |" >> models/model-list.md \
&& echo "| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |" >> models/model-list.md \
&& aws bedrock list-foundation-models --region us-east-1 --query 'sort_by(modelSummaries, &providerName)[*].[providerName, modelName, modelId, join(`, `, inputModalities), join(`, `, outputModalities), responseStreamingSupported, join(`, `, inferenceTypesSupported), modelLifecycle.status]' --output text | sed 's/\t/ | /g' | sed 's/^/| /' | sed 's/$/ |/' >> models/model-list.md
