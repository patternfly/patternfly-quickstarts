import * as React from 'react';
import RocketIcon from '@patternfly/react-icons/dist/js/icons/rocket-icon';
import { FallbackImg } from '@console/shared';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
import { QuickStart, QuickStartStatus } from '../utils/quick-start-types';
import { camelize } from '../utils/quick-start-utils';
import QuickStartTileDescription from './QuickStartTileDescription';
import QuickStartTileFooter from './QuickStartTileFooter';
import QuickStartTileFooterExternal from './QuickStartTileFooterExternal';
import QuickStartTileHeader, { QuickstartAction } from './QuickStartTileHeader';
import OutlinedBookmarkIcon from '@patternfly/react-icons/dist/js/icons/outlined-bookmark-icon';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
  Icon,
  Button,
} from '@patternfly/react-core';
import './QuickStartTile.scss';

interface QuickStartTileProps {
  /** The quickstart object triggered by this tile */
  quickStart: QuickStart;
  /** Current status of the quickstart */
  status: QuickStartStatus;
  /** Flag indicating whether the quickstart is active (drawer is open) */
  isActive: boolean;
  /** Event handler attached to the tile */
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

  let quickStartIcon: React.ReactNode;
  if (typeof icon === 'object') {
    quickStartIcon = <Icon size="2xl">{icon}</Icon>;
  } else {
    quickStartIcon = (
      <Icon size="2xl">
        <FallbackImg
          src={icon as string}
          alt=""
          className="pfext-catalog-item-icon__img"
          fallback={<RocketIcon />}
        />
      </Icon>
    );
  }

  const onSelect = () => {
    if (!link) {
      setActiveQuickStart(id, tasks?.length);
    } else {
      window.open(link.href, '_blank', 'noopener,noreferrer');
    }
    onClick();
  };

  const footerComponent = React.useMemo(() => {
    if (footer && footer.show === false) {
      return null;
    }

    if (link) {
      return <QuickStartTileFooterExternal link={link} quickStartId={id} />;
    }

    return (
      <QuickStartTileFooter
        quickStartId={id}
        status={status}
        totalTasks={tasks?.length}
        onClickContinue={onSelect}
      />
    );
  }, [footer, id, link, status, tasks?.length]);

  const ActionIcon = action?.icon || OutlinedBookmarkIcon;
  const additionalAction = action ? (
    <Button
      aria-label={action['aria-label']}
      icon={<ActionIcon />}
      variant="plain"
      onClick={action.onClick}
      {...action.buttonProps}
    />
  ) : undefined;

  return (
    <Card
      id={`${id}-catalog-tile`}
      style={{ height: '100%' }}
      data-testid={`qs-card-${camelize(displayName)}`}
      {...(!link && {
        isClickable: true,
        isSelectable: true,
        isSelected: isActive,
        isClicked: isActive,
      })}
    >
      <CardHeader
        {...(!link && {
          selectableActions: {
            selectableActionId: `${id}-catalog-tile-action`,
            selectableActionAriaLabelledby: `${id}-catalog-tile`,
            name: `${id}-catalog-tile-action`,
            onChange: onSelect,
          },
        })}
        {...(action && {
          actions: { actions: additionalAction },
        })}
      >
        {quickStartIcon}
      </CardHeader>
      <CardTitle>
        <QuickStartTileHeader
          name={displayName}
          status={status}
          duration={durationMinutes}
          onSelect={onSelect}
          type={type}
          quickStartId={id}
          action={action}
        />
      </CardTitle>
      <CardBody>
        <QuickStartTileDescription description={description} prerequisites={prerequisites} />
      </CardBody>
      <CardFooter>{footerComponent}</CardFooter>
    </Card>
  );
};

export default QuickStartTile;
