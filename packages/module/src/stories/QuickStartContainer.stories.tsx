import './QuickStartContainer.css';

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QuickStartContainer } from '../QuickStartDrawer';
// import { QuickStartContainer } from '@patternfly/quickstarts';
import { explorePipelinesQuickStart } from './assets/quickstarts/explore-pipeline-quickstart';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'QuickStartContainer',
  component: QuickStartContainer,
  parameters: {
    layout: {
      padded: false,
    },
  },
} as ComponentMeta<typeof QuickStartContainer>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof QuickStartContainer> = (args) => {
  const [allQuickStartStates, setAllQuickStartStates] = React.useState({});
  const drawerProps = {
    allQuickStartStates,
    setAllQuickStartStates,
  };
  const allProps = {
    ...drawerProps,
    ...args,
  };
  return <QuickStartContainer {...allProps} />;
};

export const Example = Template.bind({});

Example.args = {
  children: <div></div>,
  quickStarts: [explorePipelinesQuickStart],
  activeQuickStartID: 'explore-pipelines',
};
