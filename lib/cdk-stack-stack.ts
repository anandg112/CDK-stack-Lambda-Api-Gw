import * as cdk from '@aws-cdk/core';
import { SSL_OP_NO_QUERY_MTU } from 'constants';
import * as sqs from "@aws-cdk/aws-sqs";
import * as sns from "@aws-cdk/aws-sns";
import * as subs from "@aws-cdk/aws-sns-subscriptions";

export class CdkStackStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'AppQueue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    const topic = new sns.Topic(this, 'AppTopic');

    topic.addSubscription(new subs.SqsSubscription(queue));
  }
}
