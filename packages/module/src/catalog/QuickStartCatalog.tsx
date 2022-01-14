import * as React from 'react';
import { Gallery, GalleryItem, Tab, Tabs } from '@patternfly/react-core';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
import { QuickStart, QuickStartLearningPath } from '../utils/quick-start-types';
import { getQuickStartStatus } from '../utils/quick-start-utils';
import QuickStartTile from './QuickStartTile';

import './QuickStartCatalog.scss';
import LearningPathTile from './LearningPathTile';

type QuickStartCatalogProps = {
  quickStarts: QuickStart[];
  learningPaths?: QuickStartLearningPath[];
};

const QuickStartCatalog: React.FC<QuickStartCatalogProps> = ({ quickStarts }) => {
  const {
    activeQuickStartID,
    allQuickStartStates,
    learningPaths: contextLearningPaths,
  } = React.useContext<QuickStartContextValues>(QuickStartContext);

  const [activeTabKey, setActiveTabKey] = React.useState('lpTab');
  const handleTabSelect = (_event, tabKey) => {
    setActiveTabKey(tabKey);
  };

  return (
    <div className="pfext-page-layout__content pfext-is-dark">
      <Tabs isBox defaultActiveKey={activeTabKey} onSelect={handleTabSelect}>
        <Tab title={'Quick Starts'} eventKey={'qsTab'}>
          <Gallery
            className="pfext-quick-start-catalog__gallery"
            hasGutter
            style={{ paddingTop: '20px' }}
          >
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
        </Tab>
        <Tab title={'Learning Paths'} eventKey={'lpTab'}>
          {contextLearningPaths && (
            <Gallery
              className="pfext-quick-start-catalog__gallery"
              hasGutter
              style={{ paddingTop: '20px' }}
            >
              {contextLearningPaths.map((learningPath: QuickStartLearningPath) => {
                const { name: id } = learningPath;

                return (
                  <GalleryItem key={id} className="pfext-quick-start-catalog__gallery-item">
                    <LearningPathTile learningPath={learningPath} />
                  </GalleryItem>
                );
              })}
            </Gallery>
          )}
          {!contextLearningPaths && 'no lps'}
        </Tab>
      </Tabs>
    </div>
  );
};

export default QuickStartCatalog;
