import * as React from 'react';
import { QuickStartContext } from './utils/quick-start-context';

interface PageControllerProps extends React.HTMLProps<HTMLDivElement> {
  catalogPage: React.ReactNode;
  learningPathDetailPage: React.ReactNode;
}

export const PageController: React.FC<PageControllerProps> = ({
  catalogPage,
  learningPathDetailPage,
}) => {
  const {
    learningPaths,
    activeDetailLearningPath,
    onSetActiveDetailLearningPath,
  } = React.useContext(QuickStartContext);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const learningPathName = params.get('learningPath') || '';

    const loadedLearningPath = learningPaths.find((lp) => lp.name === learningPathName);

    onSetActiveDetailLearningPath(loadedLearningPath);
  }, [learningPaths, onSetActiveDetailLearningPath]);

  return <div>{activeDetailLearningPath ? learningPathDetailPage : catalogPage}</div>;
};
