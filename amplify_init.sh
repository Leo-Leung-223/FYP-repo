#!/bin/bash
set -e
IFS='|'
# get access key through the system manager
access_key_id=$(aws ssm get-parameters --names '/AmplifyCICD/AccessKeyID' --query Parameters[].Value --output text)
secret_access_key=$(aws ssm get-parameters --names '/AmplifyCICD/SecretAccessKey' --query Parameters[].Value --output text)
chmod 777 ./sumerian_exports_0ef6a5810f964ec6bebdee28cde0055e.json

export homepagescene=./sumerian_exports_0ef6a5810f964ec6bebdee28cde0055e.json

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
\"projectName\":\"fypdemo\",\
\"envName\":\"dev\",\
\"defaultEditor\":\"code\"\,\
\
}"

FRONTEND="{\
\"frontend\":\"javascript\",\
\"framework\":\"react\",\
\"config\":$REACTCONFIG\
}"

PROVIDERS="{\
\"awscloudformation\":$AWSCLOUDFORMATIONCONFIG\
}"

# Amplify init
amplify init \
--amplify $AMPLIFY \
--frontend $FRONTEND \
--providers $PROVIDERS \
--yes
