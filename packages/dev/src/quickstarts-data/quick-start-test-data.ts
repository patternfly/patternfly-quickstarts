import { QuickStart } from '@patternfly/quickstarts';

// instructional examples
import template from './yaml/template.yaml';
import external from './yaml/external.yaml';

// localization examples
import csDemo from './localized/cs/demo.yaml';
import enDemo from './localized/en/demo.yaml';

// json examples
import { explorePipelinesQuickStart } from './json/explore-pipeline-quickstart';
import { exploreServerlessQuickStart } from './json/explore-serverless-quickstart';
import { monitorSampleAppQuickStart } from './json/monitor-sampleapp-quickstart';

// real-world examples
import addHealthchecksQuickstart from './yaml/add-healthchecks-quickstart.yaml';
import installAssociatePipelineQuickstart from './yaml/install-associate-pipeline-quickstart.yaml';
import nodeWithS2i from './yaml/node-with-s2i.yaml';
import sampleApplicationQuickstart from './yaml/sample-application-quickstart.yaml';
import serverlessApplicationQuickstart from './yaml/serverless-application-quickstart.yaml';
import springWithS2i from './yaml/spring-with-s2i.yaml';

// In-app documentation examples
import exampleHelpTopics from './yaml/in-app-documentation/example-topics.yaml';

export const allQuickStarts: QuickStart[] = [
  template,
  external,

  explorePipelinesQuickStart,
  exploreServerlessQuickStart,
  monitorSampleAppQuickStart,

  addHealthchecksQuickstart,
  installAssociatePipelineQuickstart,
  nodeWithS2i,
  sampleApplicationQuickstart,
  serverlessApplicationQuickstart,
  springWithS2i,
];

export const localizedQuickStarts: QuickStart[] = [csDemo, enDemo];

export const helpTopics = exampleHelpTopics;
