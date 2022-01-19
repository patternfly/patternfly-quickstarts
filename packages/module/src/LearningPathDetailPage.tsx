import {
  Bullseye,
  Button,
  Divider,
  Grid,
  GridItem,
  Progress,
  ProgressMeasureLocation,
  Stack,
  StackItem,
  Text,
  Title,
  ProgressStepper,
  ProgressStep,
} from '@patternfly/react-core';
import * as React from 'react';
import QuickStartTile from './catalog/QuickStartCatalog/QuickStartTile';
import { QuickStartContext, QuickStartContextValues } from './utils/quick-start-context';
import { getQuickStartStatus } from './utils/quick-start-utils';
import { QuickStart, QuickStartStatus } from './utils/quick-start-types';

// import './LearningPathDetailPage.scss';

type LearningPathDetailpageProps = {
  // learningPath: QuickStartLearningPath;
  // onClick?: () => void;
};

export const LearningPathDetailPage: React.FC<LearningPathDetailpageProps> = () => {
  const {
    getLearningPathQuickStarts,
    allQuickStartStates,
    activeDetailLearningPath,
    onSetActiveDetailLearningPath,
  } = React.useContext<QuickStartContextValues>(QuickStartContext);

  const { displayName, quickStartNames: learningPathQuickStartNames, description } =
    activeDetailLearningPath || {};

  const learningPathQuickStarts: QuickStart[] = getLearningPathQuickStarts(
    learningPathQuickStartNames,
  );

  // //TODO: put duration minutes method in context
  // const learningPathDurationMinutes: number = learningPathQuickStarts.reduce(
  //   (sum, { spec: { durationMinutes } }) => {
  //     return sum + durationMinutes;
  //   },
  //   0,
  // );

  // const removeLPQueryParam = () => {
  //   // TODO wrap this in context method for setting current learning path
  //   removeQueryArgument('learningPath');
  // };
  return (
    <div className="lpdetailpagecontainer" style={{ backgroundColor: 'white' }}>
      <div className="lpdetailpageheader" style={{ padding: '20px' }}>
        <Grid hasGutter>
          <GridItem span={8}>
            <Stack hasGutter>
              <StackItem>
                <Title headingLevel="h3">{displayName}</Title>
              </StackItem>
              <StackItem>
                <Text>{description}</Text>
              </StackItem>
              <StackItem>
                <Text>
                  <b>50 minutes</b>
                </Text>
              </StackItem>
            </Stack>
          </GridItem>
          <GridItem span={4}>
            <Bullseye>
              <Progress
                value={1}
                min={0}
                max={5}
                title="Progress"
                label="1 of 5"
                valueText="1 of 5"
                measureLocation={ProgressMeasureLocation.top}
              />
            </Bullseye>
          </GridItem>
        </Grid>
      </div>
      <Divider />
      <Button onClick={() => onSetActiveDetailLearningPath(null)}>Back</Button>
      <Divider />
      <div style={{ backgroundColor: '#F5F5F5', padding: '20px' }}>
        <ProgressStepper isVertical style={{ maxWidth: '40%' }}>
          {learningPathQuickStarts.map((quickStart) => {
            const status: QuickStartStatus = getQuickStartStatus(
              allQuickStartStates,
              quickStart.metadata.name,
            );
            const stepperVariant = (qsStatus: QuickStartStatus) => {
              if (qsStatus === QuickStartStatus.COMPLETE) {
                return 'success';
              }
              if (qsStatus === QuickStartStatus.IN_PROGRESS) {
                return 'info';
              }
              return 'pending';
            };
            const isCurrent = status === QuickStartStatus.IN_PROGRESS;
            return (
              <ProgressStep
                key={quickStart.metadata.name}
                variant={stepperVariant(status)}
                isCurrent={isCurrent}
              >
                <QuickStartTile
                  quickStart={quickStart}
                  status={getQuickStartStatus(allQuickStartStates, quickStart.metadata.name)}
                  isActive={false}
                />
              </ProgressStep>
            );
          })}
        </ProgressStepper>
      </div>
    </div>
  );
};
