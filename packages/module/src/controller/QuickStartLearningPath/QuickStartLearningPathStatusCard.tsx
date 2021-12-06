import React from 'react';
import { QuickStart, QuickStartStatus } from '@quickstarts/utils/quick-start-types';
import { QuickStartContext, QuickStartContextValues } from '../../utils/quick-start-context';
import {
  Card,
  CardBody,
  Split,
  SplitItem,
  Bullseye,
  Stack,
  StackItem,
} from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/js/icons/arrow-right-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import EllipsisHIcon from '@patternfly/react-icons/dist/js/icons/ellipsis-h-icon';
import { css } from '@patternfly/react-styles';

type QuickStartLearningPathStatusCardProps = {
  quickStart: QuickStart;
};

const QuickStartLearningPathStatusCard: React.FC<QuickStartLearningPathStatusCardProps> = ({
  quickStart,
}) => {
  const {
    getResource,
    getQuickStartStateById,
    setActiveQuickStart,
    activeQuickStartID,
  } = React.useContext<QuickStartContextValues>(QuickStartContext);

  const {
    metadata: { name: id },
    spec: { displayName, tasks },
  } = quickStart;
  const totalTasks = tasks?.length;
  const isActiveQuickStart = id === activeQuickStartID;
  const { status, taskNumber } = getQuickStartStateById(id);

  const handleClick = () => {
    if (isActiveQuickStart) {
      return false;
    }
    setActiveQuickStart(id);
  };

  const statusIconAndTextMap = {
    [QuickStartStatus.COMPLETE]: {
      text: getResource('Complete'),
      icon: <CheckCircleIcon color="var(--pf-global--success-color--100)" size="sm" />,
      modifier: 'pf-u-success-color-100',
    },
    [QuickStartStatus.IN_PROGRESS]: {
      text: getResource('In progress'),
      icon: <EllipsisHIcon color="var(--pf-global--active-color--100)" size="sm" />,
      modifier: 'pf-u-active-color-100',
    },
    [QuickStartStatus.NOT_STARTED]: {
      text: getResource('Not started'),
      icon: <ArrowRightIcon color="var(--pf-global--active-color--100)" size="sm" />,
      modifier: 'pf-u-color-400',
    },
  };
  const { text, icon, modifier } = statusIconAndTextMap[status];
  return (
    <Card
      className="pfext-quick-start-learning-path__status-card"
      onClick={handleClick}
      isHoverable={!isActiveQuickStart}
    >
      <CardBody className="pf-u-font-size-md">
        <Split>
          <SplitItem isFilled className="pf-u-mr-md">
            <Stack>
              {isActiveQuickStart && (
                <StackItem>{id === activeQuickStartID && 'Current course'}</StackItem>
              )}
              <StackItem>{displayName}</StackItem>
            </Stack>
          </SplitItem>
          <SplitItem>
            <Split>
              <SplitItem
                className={css('pfext-quick-start-learning-path__status-card__status', modifier)}
              >
                {text}
                {status === QuickStartStatus.IN_PROGRESS &&
                  ` (${(taskNumber as number) + 1} of ${totalTasks})`}
              </SplitItem>
              <SplitItem>
                <Bullseye>{icon}</Bullseye>
              </SplitItem>
            </Split>
          </SplitItem>
        </Split>
      </CardBody>
    </Card>
  );
};

export default QuickStartLearningPathStatusCard;
