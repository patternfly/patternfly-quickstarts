import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QuickStartCatalogPage } from '../QuickStartCatalogPage';
import { explorePipelinesQuickStart } from './assets/quickstarts/explore-pipeline-quickstart';
import { Example as ContainerExample } from './QuickStartContainer.stories';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'QuickStartCatalogPage',
  component: QuickStartCatalogPage,
} as ComponentMeta<typeof QuickStartCatalogPage>;

const containerArgs = {
  quickStarts: [explorePipelinesQuickStart],
  activeQuickStartID: 'explore-pipelines',
};

const Template: ComponentStory<typeof QuickStartCatalogPage> = (args) => <ContainerExample {...containerArgs}><QuickStartCatalogPage {...args} /></ContainerExample>

export const Example = Template.bind({});

Example.args = {};
