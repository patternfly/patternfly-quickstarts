import React from 'react';
import {
  PageHeaderTools,
  PageHeaderToolsItem,
  Button,
  PageHeader,
  Brand,
  Nav as PfNav,
  NavList,
  NavItem,
  PageSidebar,
  ButtonVariant,
} from '@patternfly/react-core';
import LightbulbIcon from '@patternfly/react-icons/dist/js/icons/lightbulb-icon';
import { QuickStartContext } from '@patternfly/quickstarts';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import { SettingsModal } from '../SettingsModal';
import imgBrand from '../assets/images/imgBrand.svg';

const AppToolbar = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const onModalClose = () => setModalOpen(!isModalOpen);

  const qsContext = React.useContext(QuickStartContext);
  const qsId = 'getting-started-with-quick-starts';

  return (
    <PageHeaderTools>
      <PageHeaderToolsItem>
        <Button
          aria-label="Toggle quick start"
          variant={ButtonVariant.plain}
          onClick={() => qsContext.setActiveQuickStart(qsId)}
        >
          <LightbulbIcon
            color={qsContext.activeQuickStartID === qsId ? 'yellow' : 'currentColor'}
          />
        </Button>
      </PageHeaderToolsItem>
      <PageHeaderToolsItem>
        <Button
          variant="primary"
          onClick={() => setModalOpen(!isModalOpen)}
          data-quickstart-id="settings"
        >
          Settings
        </Button>
        <SettingsModal isOpen={isModalOpen} onClose={onModalClose} />
      </PageHeaderToolsItem>
    </PageHeaderTools>
  );
};

export const AppHeader = (
  <PageHeader
    logo={<Brand src={imgBrand} alt="Patternfly Logo" data-quickstart-id="logo" />}
    headerTools={<AppToolbar />}
    showNavToggle
    isNavOpen
  />
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

export const AppSidebar = <PageSidebar isNavOpen nav={AppNav} />;
