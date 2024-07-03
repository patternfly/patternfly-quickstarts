import * as React from 'react';
import { Gallery, GalleryItem } from '@patternfly/react-core';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
import { QuickStart } from '../utils/quick-start-types';
import { getQuickStartStatus } from '../utils/quick-start-utils';
import QuickStartTile from './QuickStartTile';

interface QuickStartCatalogProps {
  quickStarts: QuickStart[];
}

const QuickStartCatalog: React.FC<QuickStartCatalogProps> = ({ quickStarts }) => {
  const { activeQuickStartID, allQuickStartStates } = React.useContext<QuickStartContextValues>(
    QuickStartContext,
  );

  return (
    <div>
      <Gallery hasGutter>
        {quickStarts.map((quickStart) => {
          const {
            metadata: { name: id },
          } = quickStart;

          return (
            <GalleryItem key={id}>
              <QuickStartTile
                quickStart={quickStart}
                isActive={id === activeQuickStartID}
                status={getQuickStartStatus(allQuickStartStates, id)}
              />
            </GalleryItem>
          );
        })}
      </Gallery>
    </div>
  );
};

export default QuickStartCatalog;
