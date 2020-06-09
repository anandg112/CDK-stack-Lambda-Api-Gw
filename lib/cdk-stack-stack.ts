import * as cdk from '@aws-cdk/core';
import { SSL_OP_NO_QUERY_MTU } from 'constants';
import * as lambda from "@aws-cdk/aws-lambda";
import * as apigw from "@aws-cdk/aws-apigateway";

export class CdkStackStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_10_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'hello.handler'
    });

    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: hello
    });
  }
}
