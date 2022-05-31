import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { Gallery, GalleryItem } from '@patternfly/react-core';
import { TrainingCard } from '../../../content/training/./trainingCard/trainingCard';
const pageData = {
  "id": "React charts",
  "section": "training",
  "source": "training",
  "slug": "/training/react-charts/training",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/training/react-charts.md"
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
    <AutoLinkHeader {...{"id":"charts","size":"h2","className":"ws-title ws-h2"}}>
      {`Charts`}
    </AutoLinkHeader>
    <Gallery hasGutter>
      <GalleryItem>
        <TrainingCard
  trainingType="react-charts"
  title="Area chart"
  level="beginner"
  time="10 minutes"
  description="Learn how to implement a React area chart."
  katacodaId="area-chart"
/>
</GalleryItem>
            <GalleryItem>
        <TrainingCard
  trainingType="react-charts"
  title="Bar chart"
  level="beginner"
  time="10 minutes"
  description="Learn how to implement a React bar chart."
  katacodaId="bar-chart"
/>
</GalleryItem>
            <GalleryItem>
        <TrainingCard
  trainingType="react-charts"
  title="Bullet chart"
  level="beginner"
  time="10 minutes"
  description="Learn how to implement a React bullet chart."
  katacodaId="bullet-chart"
/>
</GalleryItem>
            <GalleryItem>
        <TrainingCard
  trainingType="react-charts"
  title="Donut chart"
  level="beginner"
  time="10 minutes"
  description="Learn how to implement a React donut chart."
  katacodaId="donut-chart"
/>
</GalleryItem>
            <GalleryItem>
        <TrainingCard
  trainingType="react-charts"
  title="Donut utilization chart"
  level="beginner"
  time="12 minutes"
  description="Learn how to implement a React donut utilization chart."
  katacodaId="donut-utilization-chart"
/>
</GalleryItem>
            <GalleryItem>
        <TrainingCard
  trainingType="react-charts"
  title="Line chart"
  level="beginner"
  time="10 minutes"
  description="Learn how to implement a React line chart."
  katacodaId="line-chart"
/>
</GalleryItem>
            <GalleryItem>
        <TrainingCard
  trainingType="react-charts"
  title="Pie chart"
  level="beginner"
  time="10 minutes"
  description="Learn how to implement a React pie chart."
  katacodaId="pie-chart"
/>
</GalleryItem>
            <GalleryItem>
        <TrainingCard
  trainingType="react-charts"
  title="Stack chart"
  level="beginner"
  time="10 minutes"
  description="Learn how to implement a React pie chart."
  katacodaId="stack-chart"
/>
</GalleryItem>
            <GalleryItem>
        <TrainingCard
  trainingType="react-charts"
  title="Sparkline chart"
  level="beginner"
  time="12 minutes"
  description="Learn how to implement a React sparkline chart."
  katacodaId="sparkline-chart"
/>
</GalleryItem>
</Gallery>
  </React.Fragment>
);
Component.displayName = 'TrainingReactChartsTrainingDocs';
Component.pageData = pageData;

export default Component;
