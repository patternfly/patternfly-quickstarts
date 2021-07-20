import './App.css';
import {
  Avatar,
  Brand,
  Nav,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageHeaderTools,
  PageSidebar,
} from '@patternfly/react-core';
import { Link } from 'react-router-dom';
import {
  LoadingBox,
  QuickStart,
  QuickStartContextProvider,
  QuickStartContextValues,
  QuickStartDrawer,
  useLocalStorage,
} from '@patternfly/quickstarts';
import { loadJSONQuickStarts } from './quickstarts-data/mas-guides/quickstartLoader';
import { allQuickStarts as yamlQuickStarts } from './quickstarts-data/quick-start-test-data';
import Demos from './Demos';
import React from 'react';
import i18n from './i18n/i18n';
import imgAvatar from './assets/images/imgAvatar.svg';
import imgBrand from './assets/images/imgBrand.svg';

type AppProps = {
  children?: React.ReactNode;
  showCardFooters?: boolean;
};

const App: React.FC<AppProps> = ({ children, showCardFooters }) => {
  const [activeQuickStartID, setActiveQuickStartID] = useLocalStorage('quickstartId', '');

  const [allQuickStartStates, setAllQuickStartStates] = useLocalStorage('quickstarts', {});

  // eslint-disable-next-line no-console
  React.useEffect(() => console.log(activeQuickStartID), [activeQuickStartID]);
  React.useEffect(() => {
    // callback on state change
    // eslint-disable-next-line no-console
    console.log(allQuickStartStates);
  }, [allQuickStartStates]);

  const [allQuickStarts, setAllQuickStarts] = React.useState<QuickStart[]>([]);
  React.useEffect(() => {
    const load = async () => {
      const masGuidesQuickstarts = await loadJSONQuickStarts('');
      setAllQuickStarts(yamlQuickStarts.concat(masGuidesQuickstarts));
    };
    load();
  }, []);

  const AppToolbar = (
    <PageHeaderTools>
      <Avatar src={imgAvatar} alt="Avatar image" />
    </PageHeaderTools>
  );

  const AppHeader = (
    <PageHeader
      logo={<Brand src={imgBrand} alt="Patternfly Logo" data-quickstart-id="logo" />}
      headerTools={AppToolbar}
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

  const AppSidebar = <PageSidebar isNavOpen nav={AppNav} />;

  const language = localStorage.getItem('bridge/language') || 'en';
  const resourceBundle = i18n.getResourceBundle(language, 'quickstart');

  const valuesForQuickstartContext: QuickStartContextValues = {
    allQuickStarts,
    activeQuickStartID,
    setActiveQuickStartID,
    allQuickStartStates,
    setAllQuickStartStates,
    footer: {
      show: showCardFooters,
    },
    language,
    resourceBundle: {
      ...resourceBundle,
      // Start: "Let's go!",
      // Continue: 'Resume',
      // Restart: 'Start over',
    },
  };

  return (
    <React.Suspense fallback={<LoadingBox />}>
      {allQuickStarts && allQuickStarts.length && (
        <QuickStartContextProvider value={valuesForQuickstartContext}>
          <QuickStartDrawer>
            <Page header={AppHeader} sidebar={AppSidebar} isManagedSidebar>
              {children}
            </Page>
          </QuickStartDrawer>
        </QuickStartContextProvider>
      )}
    </React.Suspense>
  );
};
export default App;
