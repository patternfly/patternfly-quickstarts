import * as React from 'react';
import { CatalogTile } from '@patternfly/react-catalog-view-extension';
import RocketIcon from '@patternfly/react-icons/dist/js/icons/rocket-icon';
import { FallbackImg } from '@console/shared';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
import { QuickStart, QuickStartStatus } from '../utils/quick-start-types';
import { camelize } from '../utils/quick-start-utils';
import QuickStartTileDescription from './QuickStartTileDescription';
import QuickStartTileFooter from './QuickStartTileFooter';
import QuickStartTileFooterExternal from './QuickStartTileFooterExternal';
import QuickStartTileHeader, { QuickstartAction } from './QuickStartTileHeader';
import { Icon } from '@patternfly/react-core';

import './QuickStartTile.scss';

interface QuickStartTileProps {
  quickStart: QuickStart;
  status: QuickStartStatus;
  isActive: boolean;
  onClick?: () => void;
  /** Action config for button rendered next to title */
  action?: QuickstartAction;
}

const QuickStartTile: React.FC<QuickStartTileProps> = ({
  quickStart,
  status,
  isActive,
  onClick = () => {},
  action,
}) => {
  const {
    metadata: { name: id },
    spec: { icon, tasks, displayName, description, durationMinutes, prerequisites, link, type },
  } = quickStart;

  const { setActiveQuickStart, footer } =
    React.useContext<QuickStartContextValues>(QuickStartContext);

  const ref = React.useRef<HTMLDivElement>(null);

  let quickStartIcon: React.ReactNode;
  if (typeof icon === 'object') {
    quickStartIcon = <Icon size="xl">{icon}</Icon>
  } else {
    quickStartIcon = (
      <Icon size="xl">
      <FallbackImg
        className="pfext-catalog-item-icon__img--large"
        src={icon as string}
        alt=""
        fallback={<RocketIcon />}
      />
      </Icon>
    );
  }

  const footerComponent = React.useMemo(() => {
    if (footer && footer.show === false) {
      return null;
    }

    if (link) {
      return <QuickStartTileFooterExternal link={link} quickStartId={id} />;
    }

    return <QuickStartTileFooter quickStartId={id} status={status} totalTasks={tasks?.length} />;
  }, [footer, id, link, status, tasks?.length]);

  const handleClick = (
    e: React.FormEvent<HTMLInputElement> | React.MouseEvent<Element, MouseEvent>,
  ) => {
    if (ref.current?.contains(e.target as Node)) {
      if (!link) {
        setActiveQuickStart(id, tasks?.length);
      }
      onClick();
    }
  };

  const linkProps = link
    ? {
        href: link.href,
        target: '_blank',
        rel: 'noreferrer',
      }
    : {};

  return (
    <div ref={ref} onClick={handleClick}>
      <CatalogTile
        id={id + '-catalog-tile'}
        style={{
          cursor: 'pointer',
        }}
        icon={quickStartIcon}
        className="pfext-quick-start-tile"
        data-testid={`qs-card-${camelize(displayName)}`}
        // featured={isActive}
        title={
          <QuickStartTileHeader
            name={displayName}
            status={status}
            duration={durationMinutes}
            type={type}
            quickStartId={id}
            action={action}
          />
        }
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            setActiveQuickStart(id, tasks?.length);
            onClick();
          }
        }}
        // https://github.com/patternfly/patternfly-react/issues/7039
        {...linkProps}
        data-test={`tile ${id}`}
        description={
          <QuickStartTileDescription description={description} prerequisites={prerequisites} />
        }
        footer={footerComponent}
        tabIndex={0}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore-next-line
        isSelectableRaised
      />
    </div>
  );
};

export default QuickStartTile;
