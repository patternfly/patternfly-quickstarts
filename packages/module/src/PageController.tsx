import * as React from 'react';
import { history } from './ConsoleInternal/components/utils/router';
import { QuickStartContext } from './utils/quick-start-context';

interface PageControllerProps extends React.HTMLProps<HTMLDivElement> {
  catalogPage: React.ReactNode;
  learningPathDetailPage: React.ReactNode;
}

export const PageController: React.FC<PageControllerProps> = ({
  catalogPage,
  learningPathDetailPage,
}) => {
  const validLearningPathFromQueryParam = true;
  // React.useEffect(() => {
  //   history.listen(({ location }) => {
  //     const queryParams = new URLSearchParams(location.search);
  //     learningPathName = queryParams.get('learningPathName');
  //     console.log(learningPathName);
  //   });
  // });

  const { learningPaths, currentLearningPath, setCurrentLearningPath } = React.useContext(
    QuickStartContext,
  );

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const learningPathName = params.get('learningPath') || '';

    const loadedLearningPath = learningPaths.find((lp) => lp.name === learningPathName);

    setCurrentLearningPath(loadedLearningPath);
    console.log('learningPath ACTUAL from loaded from learningPaths', loadedLearningPath);
    console.log('learningPathName from queryParams', learningPathName);
  }, [learningPaths, setCurrentLearningPath]);

  React.useEffect(() => {
    //   use this effect to clear the search when a `clear all` action is performed higher up
    const unlisten = history.listen(({ location }) => {
      const searchParams = new URLSearchParams(location.search);
      const learningPathIDFromParams = searchParams.get('learningPath') || '';
      if (learningPathIDFromParams === '') {
        setCurrentLearningPath(null);
      }
    });
    return () => {
      unlisten();
    };
  }, [setCurrentLearningPath]);

  const hasCurrentLearningPath = currentLearningPath !== undefined;
  return (
    <div>
      I'm the page controller
      {JSON.stringify(currentLearningPath)}
      {console.log('currentLearningPath in PageController', currentLearningPath)}
      {console.log('hasCurrentLearningPath in PageController', hasCurrentLearningPath)}
      {hasCurrentLearningPath ? learningPathDetailPage : catalogPage}
    </div>
  );
};
