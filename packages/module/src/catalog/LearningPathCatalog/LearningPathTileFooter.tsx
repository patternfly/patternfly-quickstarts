import * as React from 'react';
import { Progress } from '@patternfly/react-core';
import { QuickStart } from '@quickstarts/utils/quick-start-types';
import { QuickStartContextValues, QuickStartContext } from '@quickstarts/utils/quick-start-context';
import { getQuickStartStatusCount } from '@quickstarts/utils/quick-start-utils';

type LearningPathTileFooterProps = {
  quickStarts: QuickStart[];
};

const LearningPathTileFooter: React.FC<LearningPathTileFooterProps> = ({ quickStarts }) => {
  const { allQuickStartStates } = React.useContext<QuickStartContextValues>(QuickStartContext);

  const statusCount = getQuickStartStatusCount(allQuickStartStates, quickStarts);

  const isLearningPathStarted = statusCount.Complete !== 0;

  return (
    <>
      {!isLearningPathStarted && `${quickStarts.length} quick starts`}
      {isLearningPathStarted && (
        <Progress
          value={(statusCount.Complete / quickStarts.length) * 100}
          title={`${statusCount.Complete} of ${quickStarts.length}`}
        />
      )}
    </>
  );
};

export default LearningPathTileFooter;
