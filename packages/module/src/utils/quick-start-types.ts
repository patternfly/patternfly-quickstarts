import {
  AccessReviewResourceAttributes,
  ObjectMetadata,
} from '../ConsoleInternal/module/k8s/types';

export interface QuickStart {
  apiVersion?: string;
  kind?: string;
  metadata: ObjectMetadata;
  spec: QuickStartSpec;
}

export interface QuickStartSpec {
  version?: number;
  displayName: string;
  durationMinutes?: number;
  icon: React.ReactNode;
  description: string;
  prerequisites?: string[];
  introduction?: string;
  tasks?: QuickStartTask[];
  conclusion?: string;
  nextQuickStart?: string[];
  accessReviewResources?: AccessReviewResourceAttributes[];
  link?: QuickStartExternal;
  type?: QuickStartType;
}

export interface QuickStartTask {
  title?: string;
  description?: string;
  review?: QuickStartTaskReview;
  summary?: QuickStartTaskSummary;
  proc?: string;
}

export interface QuickStartTaskReview {
  instructions?: string;
  failedTaskHelp?: string;
}

export interface QuickStartTaskSummary {
  success?: string;
  failed?: string;
}

export type AllQuickStartStates = Record<string, QuickStartState>;

export type QuickStartState = Record<string, string | number | QuickStartStatus>;

export enum QuickStartStatus {
  COMPLETE = 'Complete',
  IN_PROGRESS = 'In Progress',
  NOT_STARTED = 'Not started',
}

export enum QuickStartTaskStatus {
  INIT = 'Initial',
  VISITED = 'Visited',
  REVIEW = 'Review',
  SUCCESS = 'Success',
  FAILED = 'Failed',
}

export interface QuickStartExternal {
  href: string;
  text?: string;
}

export interface QuickStartType {
  text: string;
  color?: 'blue' | 'cyan' | 'green' | 'orange' | 'purple' | 'red' | 'grey';
}
