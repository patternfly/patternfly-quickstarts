import { Button } from '@patternfly/react-core';
import * as React from 'react';
import { QuickStartContext, QuickStartContextValues } from './utils/quick-start-context';

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
  const { learningPathDetailID, setLearningPathDetailID, learningPaths } = React.useContext<
    QuickStartContextValues
  >(QuickStartContext);

  const learningPath = learningPaths.find((lp) => {
    return lp.name === learningPathDetailID;
  });

  return (
    <div>
      LearningPathDetailPage
      {learningPath?.displayName}
      <Button onClick={() => setLearningPathDetailID('')}>Back</Button>
    </div>
  );
};
