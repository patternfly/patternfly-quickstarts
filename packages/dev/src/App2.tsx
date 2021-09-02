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
  Button,
} from '@patternfly/react-core';
import { Link } from 'react-router-dom';
import {
  LoadingBox,
  QuickStart,
  QuickStartContainer,
  QuickStartContainerProps,
  useLocalStorage,
  setQueryArgument,
  removeQueryArgument,
  QUICKSTART_ID_FILTER_KEY,
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

  const [activeQuickStartID, setActiveQuickStartID] = useLocalStorage('quickstartId', '');
  const [allQuickStartStates, setAllQuickStartStates] = useLocalStorage('quickstarts', {});
  const language = localStorage.getItem('bridge/language') || 'en';
  const resourceBundle = i18n.getResourceBundle(language, 'quickstart');

  // eslint-disable-next-line no-console
  React.useEffect(() => console.log(activeQuickStartID), [activeQuickStartID]);
  React.useEffect(() => {
    // callback on state change
    // eslint-disable-next-line no-console
    console.log(allQuickStartStates);
  }, [allQuickStartStates]);

  const [loading, setLoading] = React.useState(true);
  const [quickStarts, setQuickStarts] = React.useState<QuickStart[]>([]);
  React.useEffect(() => {
    const load = async () => {
      const masGuidesQuickstarts = await loadJSONQuickStarts('');
      setQuickStarts(yamlQuickStarts.concat(masGuidesQuickstarts));
      setLoading(false);
    };
    setTimeout(() => {
      load();
    }, 1500);
  }, []);

  const drawerProps: QuickStartContainerProps = {
    quickStarts,
    activeQuickStartID,
    allQuickStartStates,
    setActiveQuickStartID,
    setAllQuickStartStates,
    resourceBundle,
    showCardFooters,
    language,
    loading,
  };

  const toggleQuickStart = (quickStartId: string) => {
    if (activeQuickStartID !== quickStartId) {
      // activate
      setActiveQuickStartID(quickStartId);
      // optionally add the query param
      setQueryArgument(QUICKSTART_ID_FILTER_KEY, quickStartId);
    } else {
      // deactivate
      setActiveQuickStartID('');
      // optionally remove the query param
      removeQueryArgument(QUICKSTART_ID_FILTER_KEY);
    }
  };

  return (
    <React.Suspense fallback={<LoadingBox />}>
      <QuickStartContainer {...drawerProps}>
        <Page header={AppHeader} sidebar={AppSidebar} isManagedSidebar>
          <Button onClick={() => toggleQuickStart('copy-execute-snippets')}>
            Toggle quick start through prop
          </Button>
          {children}
        </Page>
      </QuickStartContainer>
    </React.Suspense>
  );
};
export default App;
