# puppeteer-lambda-serverless
 ![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/matthewthomasgb/puppeteer-lambda-serverless?label=version) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/matthewthomasgb/puppeteer-lambda-serverless/main-release) [![Known Vulnerabilities](https://snyk.io/test/github/matthewthomasgb/puppeteer-lambda-serverless/badge.svg?targetFile=package.json)](https://snyk.io/test/github/matthewthomasgb/puppeteer-lambda-serverless?targetFile=package.json)

A sample project running puppeteer in AWS lambda, deployed with serverless. 

[Puppeteer](https://pptr.dev/) is a Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol.

[AWS Lambda](https://aws.amazon.com/lambda/) is a serverless compute service that lets you run code without provisioning or managing servers

[Serverless Framework Open Source](https://www.serverless.com/open-source/) lets you develop and deploy serverless applications to AWS, Azure, GCP & more.

This project uses the fantastic [chrome-aws-lambda](https://github.com/alixaxel/chrome-aws-lambda) library. 

# Quick start
- Clone the project
- `npm i` Install dependencies 
- Open an AWS account, it's free to [sign up](aws.amazon.com/free) although costs may occur when running this project
- Create AWS config and credential files, instructions [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
- Install [serverless](https://www.serverless.com/framework/docs/getting-started/)
- `sls deploy` Deploy the service. 

# Useful commands
- `sls deploy` deploys service
- `npm run lint` code quality analysis with eslint
- `cdk run prettier` code format analysis with prettier

