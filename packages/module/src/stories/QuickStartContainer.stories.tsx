import './QuickStartContainer.css';

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QuickStartContainer } from '../QuickStartDrawer';
import { explorePipelinesQuickStart } from './assets/quickstarts/explore-pipeline-quickstart';

export default {
  title: 'QuickStartContainer',
  component: QuickStartContainer,
  parameters: {
    layout: {
      padded: false,
    },
  },
} as ComponentMeta<typeof QuickStartContainer>;

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
