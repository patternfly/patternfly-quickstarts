import React from 'react';
import {
  PageHeaderTools,
  Button,
  PageHeader,
  Brand,
  Nav,
  NavList,
  NavItem,
  PageSidebar,
} from '@patternfly/react-core';
import { Link } from 'react-router-dom';
import Demos from '../Demos';
import { SettingsModal } from '../SettingsModal';
import imgBrand from '../assets/images/imgBrand.svg';

const AppToolbar = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const onModalClose = () => setModalOpen(!isModalOpen);
  return (
    <PageHeaderTools>
      <Button variant="primary" onClick={() => setModalOpen(!isModalOpen)}>
        Settings
      </Button>
      <SettingsModal isOpen={isModalOpen} onClose={onModalClose} />
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
  <Nav aria-label="Nav">
    <NavList>
      {Demos.map((demo, index) => (
        <NavItem itemId={index} key={demo.id}>
          <Link id={`${demo.id}-nav-item-link`} to={demo.to} data-quickstart-id={demo.id}>
            {demo.name}
          </Link>
        </NavItem>
      ))}
    </NavList>
  </Nav>
);

export const AppSidebar = <PageSidebar isNavOpen nav={AppNav} />;
