import * as React from 'react';
import { CatalogTile } from '@patternfly/react-catalog-view-extension';
import { RocketIcon } from '@patternfly/react-icons';
import { FallbackImg } from '@console/shared';
import { QuickStartStatus, QuickStart } from '../utils/quick-start-types';
import QuickStartTileHeader from './QuickStartTileHeader';
import QuickStartTileDescription from './QuickStartTileDescription';
import QuickStartTileFooter from './QuickStartTileFooter';
import QuickStartTileFooterExternal from './QuickStartTileFooterExternal';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
import { camelize } from '../utils/quick-start-utils';

import './QuickStartTile.scss';

type QuickStartTileProps = {
  quickStart: QuickStart;
  status: QuickStartStatus;
  isActive: boolean;
  onClick?: () => void;
};

const QuickStartTile: React.FC<QuickStartTileProps> = ({
  quickStart,
  status,
  isActive,
  onClick = () => {},
}) => {
  const {
    metadata: { name: id },
    spec: { icon, tasks, displayName, description, durationMinutes, prerequisites, link, type },
  } = quickStart;

  const { setActiveQuickStart, footer } = React.useContext<QuickStartContextValues>(
    QuickStartContext,
  );

  const quickStartIcon = (
    <FallbackImg
      className="co-catalog-item-icon__img--large"
      src={icon}
      fallback={<RocketIcon />}
    />
  );

  const footerComponent =
    footer && footer.show === false ? null : link ? (
      <QuickStartTileFooterExternal link={link} />
    ) : (
      <QuickStartTileFooter quickStartId={id} status={status} totalTasks={tasks?.length} />
    );

  return (
    <CatalogTile
      // @ts-ignore
      component="div"
      style={{
        cursor: 'pointer',
      }}
      icon={quickStartIcon}
      className="co-quick-start-tile"
      data-testid={`qs-card-${camelize(displayName)}`}
      featured={isActive}
      title={
        <QuickStartTileHeader
          name={displayName}
          status={status}
          duration={durationMinutes}
          type={type}
        />
      }
      onClick={() => {
        if (link) {
          window.open(link.href);
        } else {
          setActiveQuickStart(id, tasks?.length);
        }
        onClick();
      }}
      description={
        <QuickStartTileDescription description={description} prerequisites={prerequisites} />
      }
      footer={footerComponent}
    />
  );
};

export default QuickStartTile;
