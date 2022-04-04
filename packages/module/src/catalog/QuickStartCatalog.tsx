import * as React from 'react';
import { Gallery, GalleryItem } from '@patternfly/react-core';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
import { QuickStart } from '../utils/quick-start-types';
import { getQuickStartStatus } from '../utils/quick-start-utils';
import QuickStartTile from './QuickStartTile';

import './QuickStartCatalog.scss';

type QuickStartCatalogProps = {
  quickStarts: QuickStart[];
};

const QuickStartCatalog: React.FC<QuickStartCatalogProps> = ({ quickStarts }) => {
  const { activeQuickStartID, allQuickStartStates } = React.useContext<QuickStartContextValues>(
    QuickStartContext,
  );

  return (
    <div className="pfext-page-layout__content">
      <Gallery className="pfext-quick-start-catalog__gallery" hasGutter>
        {quickStarts.map((quickStart) => {
          const {
            metadata: { name: id },
          } = quickStart;

          return (
            <GalleryItem key={id} className="pfext-quick-start-catalog__gallery-item">
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
