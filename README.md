# CDK TypeScript project with AWS lambda and API Gateway

This CDK stack deploys a sample lambda with API Gateway with Lambda proxy integration. This means that any request to any URL path will be proxied directly to our Lambda function and the response from the function will be returned back to the user. 

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
