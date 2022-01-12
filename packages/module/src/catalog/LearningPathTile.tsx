import * as React from 'react';
import { CatalogTile } from '@patternfly/react-catalog-view-extension';
import RocketIcon from '@patternfly/react-icons/dist/js/icons/rocket-icon';
import { FallbackImg } from '@console/shared';
import { QuickStart, QuickStartLearningPath, QuickStartStatus } from '../utils/quick-start-types';
import { camelize } from '../utils/quick-start-utils';
import QuickStartTileHeader from './QuickStartTileHeader';
import { Card } from '@patternfly/react-core';
import LearningPathTileFooter from './LearningPathTileFooter';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';

import './QuickStartTile.scss';

type LearningPathTileProps = {
  learningPath: QuickStartLearningPath;
  onClick?: () => void;
};

const LearningPathTile: React.FC<LearningPathTileProps> = ({
  learningPath,
  onClick = () => {},
}) => {
  const {
    name: id,
    displayName,
    icon,
    description,
    quickStartNames: learningPathQuickStartNames,
  } = learningPath;

  const { getLearningPathQuickStarts } = React.useContext<QuickStartContextValues>(
    QuickStartContext,
  );

  const learningPathQuickStarts: QuickStart[] = getLearningPathQuickStarts(
    learningPathQuickStartNames,
  );

  const learningPathDurationMinutes: number = learningPathQuickStarts.reduce(
    (sum, { spec: { durationMinutes } }) => {
      return sum + durationMinutes;
    },
    0,
  );

  const ref = React.useRef<HTMLDivElement>(null);

  let quickStartIcon: React.ReactNode;
  if (typeof icon === 'object') {
    quickStartIcon = icon;
  } else {
    quickStartIcon = (
      <FallbackImg
        className="pfext-catalog-item-icon__img--large"
        src={icon as string}
        alt=""
        fallback={<RocketIcon />}
      />
    );
  }

  const handleClick = () => {
    // Open learning path view
    onClick();
  };

  const offset = 10;
  const lpTileContainerStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 1,
    // margin: `0 ${offset}px ${offset}px 0`,
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

  return (
    <div ref={ref} style={lpTileContainerStyle}>
      <CatalogTile
        // @ts-ignore
        component="div"
        style={{
          cursor: 'pointer',
        }}
        icon={quickStartIcon}
        className="pfext-quick-start-tile"
        data-testid={`qs-card-${camelize(displayName)}`}
        title={
          <QuickStartTileHeader
            name={displayName}
            status={QuickStartStatus.NOT_STARTED}
            duration={learningPathDurationMinutes}
            quickStartId={id}
          />
        }
        onClick={handleClick}
        data-test={`tile ${id}`}
        description={description}
        footer={<LearningPathTileFooter quickStarts={learningPathQuickStarts} />}
      />
      <Card isFlat style={lpBottomCardStyle} />
    </div>
  );
};

export default LearningPathTile;
