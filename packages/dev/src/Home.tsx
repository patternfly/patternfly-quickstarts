import React from 'react';
import { Button, PageSection, Stack, StackItem, Switch, Title } from '@patternfly/react-core';
import { QuickStartContext, useLocalStorage } from '@patternfly/quickstarts';
import i18n from './i18n/i18n';

export const Home: React.FunctionComponent = () => {
  const { setResourceBundle } = React.useContext(QuickStartContext);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('bridge/language', lng);
    const resourceBundle = i18n.getResourceBundle(lng, 'quickstart');
    setResourceBundle(resourceBundle, lng);
  };

  const [alwaysShowTaskReview, setAlwaysShowTaskReview] = useLocalStorage(
    'alwaysShowTaskReview',
    false,
  );

  return (
    <>
      <PageSection>
        <Title headingLevel="h1">Quick starts demo app</Title>
        <p>To view all quick starts, click the left "Quick starts" nav item</p>
      </PageSection>
      <PageSection>
        <Stack hasGutter>
          <StackItem>
            <Button
              variant="secondary"
              onClick={() => changeLanguage('ja')}
              data-quickstart-id="change-lng-de"
            >
              Change lng - JA
            </Button>
          </StackItem>
          <StackItem>
            <Button
              variant="secondary"
              onClick={() => changeLanguage('en')}
              data-quickstart-id="change-lng-en"
            >
              Change lng - EN
            </Button>
          </StackItem>
          <StackItem>
            <Switch
              label="Always show task review under task details"
              labelOff="Only show task review at end of task"
              onChange={setAlwaysShowTaskReview}
              isChecked={alwaysShowTaskReview}
            />
          </StackItem>
        </Stack>
      </PageSection>
    </>
  );
};
