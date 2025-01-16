import * as React from 'react';
import RocketIcon from '@patternfly/react-icons/dist/js/icons/rocket-icon';
import { FallbackImg } from '@console/shared';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
import { QuickStart, QuickStartStatus } from '../utils/quick-start-types';
import { camelize } from '../utils/quick-start-utils';
import QuickStartTileDescription from './QuickStartTileDescription';
import QuickStartTileFooter from './QuickStartTileFooter';
import QuickStartTileFooterExternal from './QuickStartTileFooterExternal';
import QuickStartTileHeader from './QuickStartTileHeader';
import OutlinedBookmarkIcon from '@patternfly/react-icons/dist/js/icons/outlined-bookmark-icon';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
  Icon,
  Button,
  ButtonProps,
  Flex,
  Stack,
  Label,
} from '@patternfly/react-core';
import OutlinedClockIcon from '@patternfly/react-icons/dist/js/icons/outlined-clock-icon';
import { StatusIcon } from '@console/shared';
import './QuickStartTile.scss';

export interface QuickstartAction {
  /** Screen reader aria label. */
  'aria-label': string;
  /** Icon to be rendered as a plain button, by default Bookmark outlined will be used. */
  icon?: React.ComponentType<unknown>;
  /** Callback with synthetic event parameter. */
  onClick?: (e: React.SyntheticEvent) => void;
  /** Additional button props to be rendered as extra props. */
  buttonProps?: ButtonProps;
}

export interface QuickStartTileProps {
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

  const { setActiveQuickStart, footer, getResource } =
    React.useContext<QuickStartContextValues>(QuickStartContext);

  const statusColorMap = {
    [QuickStartStatus.COMPLETE]: 'green',
    [QuickStartStatus.IN_PROGRESS]: 'purple',
    [QuickStartStatus.NOT_STARTED]: 'grey',
  };

  const statusLocaleMap = {
    [QuickStartStatus.COMPLETE]: getResource('Complete'),
    [QuickStartStatus.IN_PROGRESS]: getResource('In progress'),
    [QuickStartStatus.NOT_STARTED]: getResource('Not started'),
  };

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
      className="pfext-catalog-item"
      {...(isActive && {
        isClickable: true,
        isSelectable: true,
        isSelected: true,
        isClicked: true,
      })}
    >
      <CardHeader
        {...(action && {
          actions: { actions: additionalAction },
        })}
      >
        {quickStartIcon}
      </CardHeader>
      <CardTitle>
        <QuickStartTileHeader name={displayName} onSelect={onSelect} quickStartId={id} />
      </CardTitle>
      <CardBody>
        <Stack hasGutter>
          <Flex spaceItems={{ default: 'spaceItemsSm' }}>
            {type && <Label color={type.color}>{type.text}</Label>}
            {durationMinutes && (
              <Label variant="outline" data-test="duration" icon={<OutlinedClockIcon />}>
                {getResource('{{duration, number}} minutes', durationMinutes).replace(
                  '{{duration, number}}',
                  durationMinutes,
                )}
              </Label>
            )}
            {status !== QuickStartStatus.NOT_STARTED && (
              <Label
                variant="outline"
                color={statusColorMap[status] as 'green' | 'purple' | 'grey'}
                icon={<StatusIcon status={status} />}
                data-test="status"
              >
                {statusLocaleMap[status]}
              </Label>
            )}
          </Flex>
          <QuickStartTileDescription description={description} prerequisites={prerequisites} />
        </Stack>
      </CardBody>
      <CardFooter>{footerComponent}</CardFooter>
    </Card>
  );
};

export default QuickStartTile;
