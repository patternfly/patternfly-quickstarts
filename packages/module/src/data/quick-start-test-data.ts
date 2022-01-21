import { QuickStart } from '@patternfly/quickstarts';
import { explorePipelinesQuickStart } from './mocks/json/explore-pipeline-quickstart';
import { exploreServerlessQuickStart } from './mocks/json/explore-serverless-quickstart';
import { monitorSampleAppQuickStart } from './mocks/json/monitor-sampleapp-quickstart';

export const allQuickStarts: QuickStart[] = [
  explorePipelinesQuickStart,
  exploreServerlessQuickStart,
  monitorSampleAppQuickStart,
];
