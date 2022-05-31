import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { Gallery, GalleryItem } from '@patternfly/react-core';
import { TrainingCard } from '../../../content/training/./trainingCard/trainingCard';
const pageData = {
  "id": "React",
  "section": "training",
  "source": "training",
  "slug": "/training/react/training",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/training/react.md"
};
pageData.liveContext = {
  Gallery,
  GalleryItem,
  TrainingCard
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"fundamentals","size":"h2","className":"ws-title ws-h2"}}>
      {`Fundamentals`}
    </AutoLinkHeader>
    <Gallery hasGutter>
      <GalleryItem>
        <TrainingCard
  trainingType="react"
  title="PatternFly React basics"
  level="beginner"
  time="10 minutes"
  description="Build your first PatternFly component."
  katacodaId="patternfly-react-basics"
/>
</GalleryItem>
            <GalleryItem>
        <TrainingCard
  trainingType="react"
  title="Customize PatternFly"
  level="beginner"
  time="5 minutes"
  description="Learn how to customize components in PatternFly."
  katacodaId="customize-patternfly"
/>
</GalleryItem>
</Gallery>
    <AutoLinkHeader {...{"id":"components","size":"h2","className":"ws-title ws-h2"}}>
      {`Components`}
    </AutoLinkHeader>
    <Gallery hasGutter>
      <GalleryItem>
        <TrainingCard
  trainingType="react-components"
  title="Table component: beginner"
  level="intermediate"
  time="45 minutes"
  description="Build a React table with pagination."
  katacodaId="table-component-beginner"
/>
</GalleryItem>
            <GalleryItem>
        <TrainingCard
  trainingType="react-components"
  title="Toolbar component with filter"
  level="intermediate"
  time="30 minutes"
  description="Build a React toolbar that is filterable."
  katacodaId="toolbar-component-with-filter"
/>
</GalleryItem>
            <GalleryItem>
        <TrainingCard
  trainingType="react-components"
  title="Select component: beginner"
  level="intermediate"
  time="30 minutes"
  description="Build and customize a React select component."
  katacodaId="select-component-beginner"
/>
</GalleryItem>
</Gallery>
  </React.Fragment>
);
Component.displayName = 'TrainingReactTrainingDocs';
Component.pageData = pageData;

export default Component;
