#!/bin/bash
set -e
IFS='|'
# get access key through the system manager
access_key_id=$(aws ssm get-parameters --names '/AmplifyCICD/AccessKeyID' --query Parameters[].Value --output text)
secret_access_key=$(aws ssm get-parameters --names '/AmplifyCICD/SecretAccessKey' --query Parameters[].Value --output text)



# AWS Profile setting
aws configure set aws_access_key_id $access_key_id
aws configure set aws_secret_access_key $secret_access_key
aws configure set default.region us-east-1

REACTCONFIG="{\
\"SourceDir\":\"src\",\
\"DistributionDir\":\"build\",\
\"BuildCommand\":\"npm run-script build\",\
\"StartCommand\":\"npm run-script start\"\
}"
AWSCLOUDFORMATIONCONFIG="{\
\"configLevel\":\"project\",\
\"useProfile\":true,\
\"profileName\":\"default\",\
\"region\":\"us-east-1\"\
}"

AMPLIFY="{\
\"projectName\":\"fyp-demo\",\
\"defaultEditor\":\"code\"\,\
\"envName\":\"dev\"\
}"

FRONTEND="{\
\"frontend\":\"javascript\",\
\"framework\":\"react\",\
\"config\":$REACTCONFIG\
}"

PROVIDERS="{\
\"awscloudformation\":$AWSCLOUDFORMATIONCONFIG\
}"

curl -sL https://aws-amplify.github.io/amplify-cli/install | zsh && $SHELL



# Amplify init
amplify init \
--amplify $AMPLIFY \
--frontend $FRONTEND \
--providers $PROVIDERS \
--yes
