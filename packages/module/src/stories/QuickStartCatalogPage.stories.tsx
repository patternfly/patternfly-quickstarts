import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QuickStartCatalogPage } from '../QuickStartCatalogPage';
import { explorePipelinesQuickStart } from './assets/quickstarts/explore-pipeline-quickstart';
import { Example as ContainerExample } from './QuickStartContainer.stories';

export default {
  title: 'QuickStartCatalogPage',
  component: QuickStartCatalogPage,
} as ComponentMeta<typeof QuickStartCatalogPage>;

const containerArgs = {
  quickStarts: [explorePipelinesQuickStart],
  activeQuickStartID: 'explore-pipelines',
};

const Template: ComponentStory<typeof QuickStartCatalogPage> = (args) => (
  <ContainerExample {...containerArgs}>
    <QuickStartCatalogPage {...args} />
  </ContainerExample>
);

export const Example = Template.bind({});

Example.args = {};
