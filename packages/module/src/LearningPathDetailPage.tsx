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
import QuickStartTile from './catalog/QuickStartTile';
import { QuickStartContext, QuickStartContextValues } from './utils/quick-start-context';
import { getQuickStartStatus } from './utils/quick-start-utils';
import { QuickStart, QuickStartLearningPath, QuickStartStatus } from './utils/quick-start-types';

// import './LearningPathDetailPage.scss';

type LearningPathDetailpageProps = {
  // learningPath: QuickStartLearningPath;
  // onClick?: () => void;
};

export const LearningPathDetailPage: React.FC<LearningPathDetailpageProps> = (
  {
    // learningPath,
    // onClick = () => {},
  },
) => {
  const {
    learningPathDetailID,
    setLearningPathDetailID,
    learningPaths,
    getLearningPathQuickStarts,
    allQuickStartStates,
  } = React.useContext<QuickStartContextValues>(QuickStartContext);

  const learningPath: QuickStartLearningPath = learningPaths.find((lp) => {
    return lp.name === learningPathDetailID;
  });

  const { displayName, quickStartNames: learningPathQuickStartNames, description } =
    learningPath || {};

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
      <Button onClick={() => setLearningPathDetailID('')}>Back</Button>
      <Divider />
      <div style={{ backgroundColor: '#F5F5F5', padding: '20px' }}>
        <ProgressStepper isVertical style={{ maxWidth: '40%' }}>
          {learningPathQuickStarts.map((quickStart) => {
            const status: QuickStartStatus = getQuickStartStatus(
              allQuickStartStates,
              quickStart.metadata.name,
            );
            const stepperVariant = (status) => {
              if (status === QuickStartStatus.COMPLETE) {
                return 'success';
              }
              if (status === QuickStartStatus.IN_PROGRESS) {
                return 'info';
              }
              return 'pending';
            };
            const isCurrent = status === QuickStartStatus.IN_PROGRESS;
            return (
              <ProgressStep variant={stepperVariant(status)} isCurrent={isCurrent}>
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
