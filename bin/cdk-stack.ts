#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkStackStack } from '../lib/cdk-stack-stack';

const app = new cdk.App();
new CdkStackStack(app, 'CdkStackStack');
