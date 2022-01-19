import * as React from 'react';
import { Gallery, GalleryItem } from '@patternfly/react-core';
import { QuickStartLearningPath } from '../../utils/quick-start-types';
import { QuickStartContext } from '../../utils/quick-start-context';
import LearningPathTile from './LearningPathTile';

type LearningPathCatalogProps = {
  learningPaths?: QuickStartLearningPath[];
};

const LearningPathCatalog: React.FC<LearningPathCatalogProps> = () => {
  const { learningPaths: lpsFromContext } = React.useContext(QuickStartContext);
  return (
    <Gallery
      className="pfext-quick-start-catalog__gallery"
      hasGutter
      style={{ paddingTop: '20px' }}
    >
      {lpsFromContext.map((learningPath: QuickStartLearningPath) => {
        const { name } = learningPath;

        return (
          <GalleryItem key={name} className="pfext-quick-start-catalog__gallery-item">
            <LearningPathTile learningPath={learningPath} />
          </GalleryItem>
        );
      })}
    </Gallery>
  );
};

export default LearningPathCatalog;
