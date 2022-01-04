import * as React from 'react';
import { CatalogTile } from '@patternfly/react-catalog-view-extension';
import RocketIcon from '@patternfly/react-icons/dist/js/icons/rocket-icon';
import { FallbackImg } from '@console/shared';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
import { QuickStart, QuickStartLearningPath, QuickStartStatus } from '../utils/quick-start-types';
import { camelize } from '../utils/quick-start-utils';
import QuickStartTileDescription from './QuickStartTileDescription';
import QuickStartTileFooter from './QuickStartTileFooter';
import QuickStartTileFooterExternal from './QuickStartTileFooterExternal';
import QuickStartTileHeader from './QuickStartTileHeader';

import './QuickStartTile.scss';
import { Card } from '@patternfly/react-core';

type LearningPathTileProps = {
  learningPath: QuickStartLearningPath;
  // status: QuickStartStatus;
  // isActive: boolean;
  onClick?: () => void;
};

const LearningPathTile: React.FC<LearningPathTileProps> = ({
  learningPath,
  // status,
  // isActive,
  onClick = () => { },
}) => {
  const { name: id, displayName } = learningPath;

  const { setActiveQuickStart, footer } = React.useContext<QuickStartContextValues>(
    QuickStartContext,
  );

  const ref = React.useRef<HTMLDivElement>(null);

  const handleClick = (_e: React.SyntheticEvent<HTMLElement, Event>) => {
    // Open learning path view
    onClick();
  };

  const offset = 10;
  const lpTileContainerStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 1,
    margin: `0 ${offset}px ${offset}px 0`,
  };
  const lpBottomCardStyle: React.CSSProperties = {
    position: 'absolute',
    left: '0px',
    top: '0px',
    height: '100%',
    width: '100%',
    zIndex: -1,
    transform: `translate(${offset}px, ${offset}px)`,
  };
  // const containerStyle = isLearningPath ? lpTileContainerStyle : {};

  return (
    <div ref={ref} style={lpTileContainerStyle}>
      <CatalogTile
        // @ts-ignore
        component="div"
        style={{
          cursor: 'pointer',
        }}
        icon={null}
        className="pfext-quick-start-tile"
        data-testid={`qs-card-${camelize(displayName)}`}
        // featured={isActive}
        title={
          <QuickStartTileHeader
            name={displayName}
            status={QuickStartStatus.NOT_STARTED}
            // TODO: duration = added duration of all quickstarts in lp
            duration={100}
            // type={type}
            quickStartId={id}
          />
        }
        onClick={handleClick}
        data-test={`tile ${id}`}
        description={<QuickStartTileDescription description={displayName} />}
      />
      <Card isFlat style={lpBottomCardStyle} />
    </div>
  );
};

export default LearningPathTile;
