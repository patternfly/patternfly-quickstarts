import React from 'react';
import { Button, PageSection, Stack, StackItem, Title } from '@patternfly/react-core';
import { QuickStartContext } from '@patternfly/quickstarts';
import i18n from './i18n/i18n';

export const Home: React.FunctionComponent = () => {
  const { setResourceBundle } = React.useContext(QuickStartContext);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('bridge/language', lng);
    const resourceBundle = i18n.getResourceBundle(lng, 'quickstart');
    setResourceBundle(resourceBundle, lng);
  };

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
        </Stack>
      </PageSection>
    </>
  );
};
