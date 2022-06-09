import './App.css';
import React from 'react';
import {
  LoadingBox,
  QuickStartContainer,
  useLocalStorage,
  QuickStartCatalogPage
} from '@patternfly/quickstarts';
import { quickStarts as exampleQuickStarts } from './example-data';

const App = ({ showCardFooters }) => {
  const [activeQuickStartID, setActiveQuickStartID] = useLocalStorage('quickstartId', '');
  const [allQuickStartStates, setAllQuickStartStates] = useLocalStorage('quickstarts', {});
  const language = localStorage.getItem('bridge/language') || 'en';

  // eslint-disable-next-line no-console
  React.useEffect(() => console.log(activeQuickStartID), [activeQuickStartID]);
  React.useEffect(() => {
    // callback on state change
    // eslint-disable-next-line no-console
    console.log(allQuickStartStates);
  }, [allQuickStartStates]);

  const [loading, setLoading] = React.useState(true);
  const [quickStarts, setQuickStarts] = React.useState([]);
  React.useEffect(() => {
    const load = async () => {
      setQuickStarts(exampleQuickStarts);
      setLoading(false);
    };
    setTimeout(() => {
      load();
    }, 500);
  }, []);

  const drawerProps = {
    quickStarts,
    activeQuickStartID,
    allQuickStartStates,
    setActiveQuickStartID,
    setAllQuickStartStates,
    showCardFooters,
    language,
    loading,
    alwaysShowTaskReview: true,
    markdown: {
      extensions: [
        // variable substitution
        {
          type: 'output',
          filter: function(html) {
            html = html.replace(/\[APPLICATION\]/g, 'Mercury');
            html = html.replace(/\[PRODUCT\]/g, 'Lightning');

            return html;
          },
        },
      ],
    },
  };

  // const toggleQuickStart = (quickStartId) => {
  //   if (activeQuickStartID !== quickStartId) {
  //     // activate
  //     setActiveQuickStartID(quickStartId);
  //     // optionally add the query param
  //     withQueryParams && setQueryArgument(QUICKSTART_ID_FILTER_KEY, quickStartId);
  //   } else {
  //     // deactivate
  //     setActiveQuickStartID('');
  //     // optionally remove the query param
  //     withQueryParams && removeQueryArgument(QUICKSTART_ID_FILTER_KEY);
  //   }
  // };

  return (
    <React.Suspense fallback={<LoadingBox />}>
      <QuickStartContainer {...drawerProps}>

        <QuickStartCatalogPage
          title="Quick starts"
          hint={'Learn how to create, import, and run applications with step-by-step instructions and tasks.'}
        />

      </QuickStartContainer>
    </React.Suspense>
  );
};
export default App;
