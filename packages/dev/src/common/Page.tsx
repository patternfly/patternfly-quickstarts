import React from 'react';
import {
  Button,
  Brand,
  Icon,
  Nav as PfNav,
  NavList,
  NavItem,
  PageSidebar,
  ButtonVariant,
  Switch,
  PageSidebarBody,
  Masthead,
  MastheadBrand,
  MastheadContent,
  MastheadMain,
  MastheadToggle,
  PageToggleButton,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import LightbulbIcon from '@patternfly/react-icons/dist/js/icons/lightbulb-icon';
import { QuickStartContext } from '@patternfly/quickstarts';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import { SettingsModal } from '../SettingsModal';
import imgBrand from '../assets/images/imgBrand.svg';

const AppToolbar = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isDarkTheme, setDarkTheme] = React.useState(false);
  const onModalClose = () => setModalOpen(!isModalOpen);

  const qsContext = React.useContext(QuickStartContext);
  const qsId = 'getting-started-with-quick-starts';

  const handleDarkThemeChange = (isChecked: boolean) => {
    setDarkTheme(isChecked);
    if (isChecked) {
      document.documentElement.classList.add('pf-v6-theme-dark');
    } else {
      document.documentElement.classList.remove('pf-v6-theme-dark');
    }
  };

  return (
    <Toolbar id="toolbar" isFullHeight isStatic>
      <ToolbarContent>
        <ToolbarGroup
          variant="icon-button-group"
          align={{ default: 'alignRight' }}
          spacer={{ default: 'spacerNone', md: 'spacerMd' }}
        >
          <ToolbarItem>
            <Switch
              id="dark-theme-switch"
              aria-label="Toggle dark theme"
              label="Dark theme"
              isChecked={isDarkTheme}
              onChange={(_event, isChecked: boolean) => handleDarkThemeChange(isChecked)}
            />
          </ToolbarItem>
          <ToolbarItem>
            <Button
              aria-label="Toggle quick start"
              variant={ButtonVariant.plain}
              onClick={() => qsContext.setActiveQuickStart(qsId)}
            >
              <Icon size="lg">
                <LightbulbIcon
                  color={qsContext.activeQuickStartID === qsId ? 'yellow' : 'currentColor'}
                />
              </Icon>
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button
              variant="primary"
              onClick={() => setModalOpen(!isModalOpen)}
              data-quickstart-id="settings"
            >
              Settings
            </Button>
            <SettingsModal isOpen={isModalOpen} onClose={onModalClose} />
          </ToolbarItem>
        </ToolbarGroup>
      </ToolbarContent>
    </Toolbar>
  );
};

export const AppHeader = (
  <Masthead>
    <MastheadToggle>
      <PageToggleButton variant="plain" aria-label="Global navigation">
        <Icon>
          <BarsIcon />
        </Icon>
      </PageToggleButton>
    </MastheadToggle>
    <MastheadMain>
      <MastheadBrand>
        <Brand
          src={imgBrand}
          alt="PatternFly logo"
          heights={{ default: '36px' }}
          data-quickstart-id="logo"
        />
      </MastheadBrand>
    </MastheadMain>
    <MastheadContent>{<AppToolbar />}</MastheadContent>
  </Masthead>
);

const AppNav = (
  <PfNav aria-label="Nav">
    <NavList>
      {Nav.map((demo, index) => (
        <NavItem itemId={index} key={demo.id}>
          <Link id={`${demo.id}-nav-item-link`} to={demo.to} data-quickstart-id={demo.id}>
            {demo.name}
          </Link>
        </NavItem>
      ))}
    </NavList>
  </PfNav>
);

export const AppSidebar = (
  <PageSidebar isSidebarOpen>
    <PageSidebarBody>{AppNav}</PageSidebarBody>
  </PageSidebar>
);
