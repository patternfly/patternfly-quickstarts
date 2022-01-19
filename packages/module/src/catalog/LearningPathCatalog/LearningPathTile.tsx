import * as React from 'react';
import { CatalogTile } from '@patternfly/react-catalog-view-extension';
import RocketIcon from '@patternfly/react-icons/dist/js/icons/rocket-icon';
import { FallbackImg } from '@console/shared';
import {
  QuickStart,
  QuickStartLearningPath,
  QuickStartStatus,
} from '../../utils/quick-start-types';
import { camelize } from '../../utils/quick-start-utils';
import QuickStartTileHeader from '../QuickStartCatalog/QuickStartTileHeader';
import { Card } from '@patternfly/react-core';
import LearningPathTileFooter from './LearningPathTileFooter';
import { QuickStartContext, QuickStartContextValues } from '../../utils/quick-start-context';

type LearningPathTileProps = {
  learningPath: QuickStartLearningPath;
};

const LearningPathTile: React.FC<LearningPathTileProps> = ({ learningPath }) => {
  const {
    name: id,
    displayName,
    icon,
    description,
    quickStartNames: learningPathQuickStartNames,
  } = learningPath;

  const { getLearningPathQuickStarts, onSetActiveDetailLearningPath } = React.useContext<
    QuickStartContextValues
  >(QuickStartContext);

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
    onSetActiveDetailLearningPath(learningPath);
  };

  const rotate1 = 1;
  const rotate2 = 2;
  const margin = 10;
  const lpTileContainerStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 1,
    margin: `0 ${margin}px ${margin}px 0`,
  };
  const lpBottomCardStyle1: React.CSSProperties = {
    position: 'absolute',
    left: '24px',
    top: '24px',
    height: '95%',
    width: '95%',
    zIndex: -1,
    transform: `rotate(${rotate1}deg)`,
  };
  const lpBottomCardStyle2: React.CSSProperties = {
    position: 'absolute',
    left: '16px',
    top: '16px',
    height: '95%',
    width: '95%',
    zIndex: -1,
    transform: `rotate(${rotate2}deg)`,
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
            // TODO: status correct?
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
      <Card isFlat style={lpBottomCardStyle1} className="pf-u-box-shadow-sm" />
      <Card isFlat style={lpBottomCardStyle2} className="pf-u-background-color-light-200" />
    </div>
  );
};

export default LearningPathTile;
