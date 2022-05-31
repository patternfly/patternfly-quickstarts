import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport480 from '../../../content/design-guidelines/demos/dashboard/./img/dashboard-view-desktop.png';
import srcImport481 from '../../../content/design-guidelines/demos/dashboard/./img/aggregate-status-cards.png';
import srcImport482 from '../../../content/design-guidelines/demos/dashboard/./img/trend-cards.png';
import srcImport483 from '../../../content/design-guidelines/demos/dashboard/./img/utilization-cards.png';
import srcImport484 from '../../../content/design-guidelines/demos/dashboard/./img/details-card.png';
import srcImport485 from '../../../content/design-guidelines/demos/dashboard/./img/events-card.png';
import srcImport486 from '../../../content/design-guidelines/demos/dashboard/./img/dashboard-4-column.png';
import srcImport487 from '../../../content/design-guidelines/demos/dashboard/./img/dashboard-first-cut.png';
import srcImport488 from '../../../content/design-guidelines/demos/dashboard/./img/dashboard-iterations.png';
import srcImport489 from '../../../content/design-guidelines/demos/dashboard/./img/dashboard-what-to-avoid.png';
import srcImport490 from '../../../content/design-guidelines/demos/dashboard/./img/details-card-example.png';
import srcImport491 from '../../../content/design-guidelines/demos/dashboard/./img/performance-card-example.png';
import srcImport492 from '../../../content/design-guidelines/demos/dashboard/./img/health-card-example.png';
import srcImport493 from '../../../content/design-guidelines/demos/dashboard/./img/capacity-card-example.png';
import srcImport494 from '../../../content/design-guidelines/demos/dashboard/./img/consumers-card-example.png';
import srcImport495 from '../../../content/design-guidelines/demos/dashboard/./img/events-card-example.png';
import srcImport496 from '../../../content/design-guidelines/demos/dashboard/./img/inventory-card-example.png';
import srcImport497 from '../../../content/design-guidelines/demos/dashboard/./img/dashboard-example-final.png';
const pageData = {
  "id": "Dashboard",
  "section": "demos",
  "source": "design-guidelines",
  "slug": "/demos/dashboard/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/demos/dashboard/dashboard.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A dashboard provides overviews of key metrics or performance indicators relevant to an application, process, or business. The overall experience of dashboards can vary greatly depending on their use cases, so it can be difficult to define a one-size-fits-all approach. These guidelines take a systematic approach to dashboard design that can be applied in a variety of situations.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`While dashboards can vary greatly depending on what requirements and use cases they’re meant to fulfill, they can typically be distilled into two main parts:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Cards:`}
          </strong>
          {` Information is communicated via cards. Each card should be designed to convey a single metric or a group of closely related metrics.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Layout:`}
          </strong>
          {` The arrangement of cards, typically in a grid structure.`}
        </p>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`We’ll focus on these two aspects as we move through the dashboard design process. Here is an example of a dashboard containing four cards arranged in a grid.`}
    </p>
    <img src={srcImport480} height={srcImport480.height * 1500 / srcImport480.width} {...{"alt":"example of a dashboard","width":"1500","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"standard-cards","size":"h2","className":"ws-title ws-h2"}}>
      {`Standard cards`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly supports several common card layouts to help convey information in a consistent way. This is not an exhaustive list, but before designing your cards, you should see if the information you are trying to communicate fits into any of these common patterns. Note that card layouts are flexible and can be customized. So if you don't see exactly what you are looking for here, we recommend that you use these standard layouts as a basis upon which to build your custom designs. For more information about cards and card usage see the `}
      <PatternflyThemeLink {...{"to":"/components/card"}}>
        {`Card component`}
      </PatternflyThemeLink>
      {` documentation.`}
    </p>
    <AutoLinkHeader {...{"id":"aggregate-status-card","size":"h3","className":"ws-title ws-h3"}}>
      {`Aggregate status card`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Aggregate status cards show a total number of objects and an aggregated status for them. For example, they can be used to provide users with a quick count of the number of nodes making up a large distributed network and identify the numbers that are down, that need maintenance, etc. There would also typically be a link to examine more details.`}
    </p>
    <img src={srcImport481} height={srcImport481.height * 542 / srcImport481.width} {...{"alt":"aggregate status card examples","width":"542","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Card title:`}
          </strong>
          {` Reports the total count of objects being monitored.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Normal status:`}
          </strong>
          {` Reflects that all is running normally, with no problems.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Exception status (count only):`}
          </strong>
          {` Counts the number of items that are reporting exceptions (errors, warnings, or other conditions). Only include non-zero items. You may optionally link the count to more details.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Counts with annotation (optional):`}
          </strong>
          {` Include a label and description if more information may be required to clarify the reported status.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"trend-card","size":"h3","className":"ws-title ws-h3"}}>
      {`Trend card`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Trend cards are used to display the change in some metric over time. It should be possible to see the current value and prior values over some given time period.`}
    </p>
    <img src={srcImport482} height={srcImport482.height * 372 / srcImport482.width} {...{"alt":"trend card examples","width":"372","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Current value:`}
          </strong>
          {` Use the title of the card to reflect the current value.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Filter (optional):`}
          </strong>
          {` Place a filter in the upper right corner of the card when you want to filter data in the chart. Most often this will be used to change the time range of the chart, e.g. “Last 24 hours,” “Last 7 days,” “Last 30 days,” etc.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Trend chart:`}
          </strong>
          {` `}
          <PatternflyThemeLink {...{"to":"/charts/sparkline-chart"}}>
            {`Sparkline charts`}
          </PatternflyThemeLink>
          {` are most often used to display trend data.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Actions (optional):`}
          </strong>
          {` If your card is to include actions include them as `}
          <PatternflyThemeLink {...{"to":"/components/button#variations"}}>
            {`link-style buttons`}
          </PatternflyThemeLink>
          {` in the footer of your card.`}
        </p>
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`Regular trend cards arrange the current value and trend chart in a stacked layout. You can use the short trend card layout to save vertical space by placing the current value and the trend chart side-by-side. You may also want to monitor trends for several metrics on the same card.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If you’re displaying multiple trend metrics on a card, stack trend charts with clear naming to indicate what each chart measures and add a title at the top to communicate what’s being displayed on this card.`}
    </p>
    <AutoLinkHeader {...{"id":"utilization-card","size":"h3","className":"ws-title ws-h3"}}>
      {`Utilization card`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A utilization card reports the current value of a single metric or multiple metrics. Bar or donut charts are most often used to report utilization because values are proportional (i.e. percentage of a whole).`}
    </p>
    <img src={srcImport483} height={srcImport483.height * 907 / srcImport483.width} {...{"alt":"utilization card examples","width":"907","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Card title:`}
          </strong>
          {` Clearly communicate what this card measures.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Filter (optional):`}
          </strong>
          {` Place a filter in the upper right corner of the card when you want to filter data in the chart.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Utilization chart:`}
          </strong>
          {` `}
          <PatternflyThemeLink {...{"to":"/charts/bar-chart"}}>
            {`Bar charts`}
          </PatternflyThemeLink>
          {` or `}
          <PatternflyThemeLink {...{"to":"/charts/donut-utilization-chart"}}>
            {`donut charts`}
          </PatternflyThemeLink>
          {` are commonly used to report utilization.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Actions (optional):`}
          </strong>
          {` If your card includes actions or links to another page, add them as `}
          <PatternflyThemeLink {...{"to":"/components/button#variations"}}>
            {`link-style buttons`}
          </PatternflyThemeLink>
          {` in the footer.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"details-card","size":"h3","className":"ws-title ws-h3"}}>
      {`Details card`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A details card is used to display detailed data related to an object or process. Details are typically expressed as attribute-value pairs or in tabular format.`}
    </p>
    <img src={srcImport484} height={srcImport484.height * 439 / srcImport484.width} {...{"alt":"details card example","width":"439","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Card title:`}
          </strong>
          {` Clearly communicate what this card contains.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Details:`}
          </strong>
          {` Display details of the object in question. A `}
          <PatternflyThemeLink {...{"to":"/components/description-list"}}>
            {`description list`}
          </PatternflyThemeLink>
          {` is often useful for this purpose.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Actions (optional):`}
          </strong>
          {` If your card includes actions, add them as `}
          <PatternflyThemeLink {...{"to":"/components/button#variations"}}>
            {`link-style buttons`}
          </PatternflyThemeLink>
          {` in the footer.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"events-card","size":"h3","className":"ws-title ws-h3"}}>
      {`Events card`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`An event card lists items that occur in time. These could be alerts, tasks, or other system messages.`}
    </p>
    <img src={srcImport485} height={srcImport485.height * 439 / srcImport485.width} {...{"alt":"events card example","width":"439","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Card title:`}
          </strong>
          {` Clearly communicate what this card contains.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Filter (optional):`}
          </strong>
          {` Place a filter in the upper right corner of the card when you want to filter data in the chart.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Events list:`}
          </strong>
          {` A list of events. A `}
          <PatternflyThemeLink {...{"to":"/components/data-list"}}>
            {`data list`}
          </PatternflyThemeLink>
          {` or a `}
          <PatternflyThemeLink {...{"to":"/components/notification-drawer"}}>
            {`notification drawer`}
          </PatternflyThemeLink>
          {` component can be used to list events.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Actions (optional):`}
          </strong>
          {` If your card includes actions, add them as `}
          <PatternflyThemeLink {...{"to":"/components/button#variations"}}>
            {`link-style buttons`}
          </PatternflyThemeLink>
          {` in the footer.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"designing-dashboards-step-by-step","size":"h2","className":"ws-title ws-h2"}}>
      {`Designing dashboards step-by-step`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`To design an effective dashboard, you first must have a solid understanding of the requirements and use cases your dashboard is intended to fulfill. If you don’t have that yet, go back and ask more questions, do more research, and gain an overall better understanding of what your dashboard needs to do.`}
    </p>
    <AutoLinkHeader {...{"id":"step-1-list-the-cards","size":"h3","className":"ws-title ws-h3"}}>
      {`Step 1: List the cards`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The first step is to create a simple list of the cards your dashboard needs to have. Think of this list as your kit of parts. These are your building blocks, your (very easy) puzzle pieces.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Each card in a dashboard should be designed to display a single metric, a set of metrics, or a summary of important information. The scope of a card can be as narrow as the resource consumption of a single node, or as broad as a list of all system events listed in real time.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Questions to answer:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`What use cases does this dashboard need to fulfill?`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`What data or information is associated with those use cases?`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Example list of cards:`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Cluster details`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Name, provider, OCS version, etc…`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Performance`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Current usage + usage history over time`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`IOPS, Latency, Throughput, Recovery Rate, Recovery IOPS`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Health`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Is the cluster healthy?`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If not, why?`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Top consumers`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Which projects, pods, or clusters are using the most resources?`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Ability to filter view by project, nodes, classes, workloads`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Show only top 5`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Events`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`List of system events`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Ability to filter based on event type`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Inventory`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`List of how many current nodes, disks, pods, PVs, PVCs`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`How if any are down/error and how many.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Capacity`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Physical capacity (percentage used)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Requested capacity (percentage used)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"step-2-prioritizing-your-cards","size":"h3","className":"ws-title ws-h3"}}>
      {`Step 2: Prioritizing your cards`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Prioritize your list by determining which cards contain information most useful to the broadest range of use cases.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Don’t spend too much time on this step; it doesn’t have to be perfect. You might have a clear hierarchy of importance amongst your list, or you may have a list of cards which are of equal importance. If you find yourself struggling, just move on to the next step.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Ideally, all of the information you are displaying is important. The purpose of this step is to help us determine which cards we want front and center, and which we can receive less emphasis. This distinction is primarily important with responsive design. When your four-column layout becomes a one-column layout on a mobile viewport, ordering the cards appropriately will make sure that the most important information comes to the top.`}
    </p>
    <AutoLinkHeader {...{"id":"example-of-a-prioritized-card-list","size":"h4","className":"ws-title ws-h4"}}>
      {`Example of a prioritized card list`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Unprioritized:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Top consumers`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Events`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Capacity`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Inventory`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Performance`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Details`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Health`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Prioritized:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Details`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Performance`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Inventory`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Health`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Capacity`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Top Consumers`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Events`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Note: The cards at the bottom of our list are not necessarily “unimportant,” they just simply wouldn’t make sense being above the cards at the top of the list.`}
    </p>
    <AutoLinkHeader {...{"id":"step-3-sizing-your-cards","size":"h3","className":"ws-title ws-h3"}}>
      {`Step 3: Sizing your cards`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Next, you must size your cards by asking yourself one question: How big do I think this card will need to be?`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Here are a few questions to ask yourself, along with some real-life examples to give you a better sense of how to approach this question.`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Start by using the three standard sizes: small, medium, large. This sizing will help prepare us for our next step, determining column structure. These sizes refer to the overall surface area of your cards, not specifically the length or the width. You can have a tall medium card and a wide medium card that both take up the same surface area. We are guesstimating. Don’t spend considerable amounts of time determining whether a card is medium or large. This step simply builds a foundation for iteration. We want to start thinking about the layout of each card on a conceptual level, which will help us when we begin to iterate on our layout.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Ask questions about each card:`}
        </p>
      </li>
    </ol>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`What format would this information most clearly be displayed as?`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`How much data will this card contain?`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Is the amount of information in this card static or dynamic? The size and shape of static cards will not change over time, for example it will always be a card with one chart. A dynamic card could contain a list of items that will grow or shrink, like an events list.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Here are some examples of how to apply these questions to different types of cards to determine their appropriate sizing in your dashboard:`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Details card`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`“What format would most clearly display this information?”`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`This card needs to list the various details of the cluster. Each detail will have a label and a value, for example: name // cluster-name`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`This looks like it calls for a two-column list of the data. One column for the label, and one for the value.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`“How much data will this card contain?”`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`In this particular instance of the storage dashboard, the list only contains four items. Not a very large list.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`“Is the amount of information in the card static or dynamic?”`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The items in the card may be added or removed depending on user or stakeholder feedback, but they aren’t changed unless we decide to change them. Therefore, this information is static and we can expect this card to always contain the same amount of information.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Conclusion:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`This card will always contain a two-column list of four items.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`This card can be small.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Performance card`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`“What format would most clearly display this information?”`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`This card will display the current performance metrics for five different values. It must show the historical data of the values over time.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Show the current value in text and a line graph displaying the value over time. This means each of the five metrics will have a text label, a text value, and a line graph.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`“How much data will this card contain?”`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Mostly answered above. It will contain five metrics, each of which reflecting a current data value and a graph showing the value over time.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`“Is the amount of information in the card static or dynamic?”`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`This card will contain metrics that always show the same thing: A label for the metric, a current value, and the value over time. This information itself will change constantly but the amount of or density of information will not. Therefore, it is static.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Conclusion:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Include five line charts. This card will probably be large.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Events card`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`“What format would most clearly display this information?”`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`This card will display a list of events as they occur.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Each event list item will show a few lines of information: time occurred, event source, event description.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`This information will be best displayed in a list view format.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`“How much data will this card contain?”`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Events happen fast, and in large numbers. This card could contain thousands of events. The user will need to be able to filter this view to tailor it to their specific needs.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`“Is the amount of information in the card static or dynamic?”`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`As this is a list that could contain 0 events or could contain thousands, it is indeed dynamic.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Conclusion:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`This card could contain a massive amount of events. We’ll need to give the card a max height based on the amount of items we think would be reasonable to see at once. Four items at once should be reasonable to set for our max height. The card will then scroll if the user wants to see more events.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Since we have a max height of four items and this list view only needs one column, we can estimate that a medium sizing should do.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`When done, your list should look something like this:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Details: Small`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Performance: Large`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Inventory: Medium`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Health: Medium`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Capacity: Medium`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Top consumers: Large`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Events: Medium`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"step-4-iterate-on-column-structure-and-card-arrangement","size":"h3","className":"ws-title ws-h3"}}>
      {`Step 4: Iterate on column structure and card arrangement`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Now that you have a prioritized and sized list of cards, use it to create the card layout. To get started, draw your columns in a full size desktop view.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`All columns must be the same width.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`All columns must have the same sized gutter (space between columns).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`For a standard desktop size (1200-1400px), try to have the column layout fill the full width of the page.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Draw your columns within the context of your project. For our example, we know we have a top masthead, a top header information area, a left hand navigation, and a canvas for the dashboard.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`You can use any common amount of columns for this step, but three and four column layouts are the most common. If you use Sketch, you can find templates for these layouts in the `}
      <PatternflyThemeLink {...{"to":"https://www.sketch.com/s/729c2eee-e8b6-4fcd-8a79-f6faa8c30f89"}}>
        {`PatternFly template`}
      </PatternflyThemeLink>
      {`. For the purpose of this tutorial, we will work with a standard four column layout.`}
    </p>
    <img src={srcImport486} height={srcImport486.height * 1680 / srcImport486.width} {...{"alt":"four column dashboard layout","width":"1680","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Four column layout with 16 px gutters. There are also 16px margins around the dashboard.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Next, add your cards in their appropriate sizes without any content. Don’t worry about the arrangement yet, just draw all the cards at your estimated sizes.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`There should be no real content in your cards yet, only each card’s name. At this point, the only thing we’re concerned about is getting a general size for each card.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Again, these are guesstimates. We’re not worried about the exact height of each card. Rather, we’re using our column structure as a guide.`}
        </p>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`After placing our prioritized and sized card list on the four-column grid, the result should look like this example:`}
    </p>
    <img src={srcImport487} height={srcImport487.height * 1680 / srcImport487.width} {...{"alt":"dashboard layout populated with placeholder cards","width":"1680","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Note how loosely we stuck to those sizes. The details card is pretty small, but the events and history cards ended up being more like a large card. That’s fine.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When choosing whether or not your card should be wide or tall, it helps to consider the format of the information within the card. For example, the inventory and events cards both contain a list of data. Lists tend to lend themselves well to taller cards. The consumers card (bottom right) will contain a line graph. A line graph showing data over time lends itself well to a wider card.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`You can now iterate on the arrangement of your cards. Approach this arrangement like a puzzle. If you have a strong prioritization of cards, that should be your primary driver. You want the most important cards at the top, with less important cards at the bottom. It’s OK to change the size of your cards a bit to make them fit better. In our example, the events and inventory cards probably don’t need to be that tall. Maybe we can find a better use of that space for another card that needs more room.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The only boundaries you’ll encounter in this step are the general sizes you defined earlier. Don’t limit yourself by assuming that the inventory card always has to be that tall. We don’t know exactly how tall it really has to be yet, we just have a general idea that it probably should be medium-ish. If you find yourself struggling with a certain column layout, try a different one to see if it solves any problems.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`You can rearrange cards multiple times until you find the layout that works:`}
    </p>
    <img src={srcImport488} height={srcImport488.height * 5450 / srcImport488.width} {...{"alt":"dashboard layout iterations","width":"5450","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`We knew details and performance were our top priority items, so we kept those up top and mainly iterated around the rest of the cards. Note how we changed the height of some of the cards to better fit the layout.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Dynamic cards deserve special considerations. You want to avoid situations such as having a one column dynamic card expand and push down a two column card below it, creating a gap of unused space. We’ll explore how this might play out with the events card in our next example.`}
    </p>
    <img src={srcImport489} height={srcImport489.height * 1680 / srcImport489.width} {...{"alt":"dashboard layout with a gap","width":"1680","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`We could solve this gap by setting the inventory card height to always match the events card. Another potential solution is to always have your events card at a defined height, introducing scroll for any information that does not fit. Flexible and accommodating layouts usually provide the most effective long term solution.`}
    </p>
    <AutoLinkHeader {...{"id":"step-5-add-your-content-and-refine-your-layout","size":"h3","className":"ws-title ws-h3"}}>
      {`Step 5: Add your content and refine your layout`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Once you’ve found a couple layouts you’re comfortable with, add your actual content designs to each card and see how it affects their sizing. Start with the `}
      <PatternflyThemeLink {...{"to":"#standard-cards"}}>
        {`standard card templates`}
      </PatternflyThemeLink>
      {` described at the start of this document. You can modify these or create custom card layouts to meet your needs. Let’s see how we can populate each of the cards in our preliminary layout.`}
    </p>
    <AutoLinkHeader {...{"id":"details-card-0","size":"h4","className":"ws-title ws-h4"}}>
      {`Details card`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Recall that in Step 1, we defined the Details card as needing to display the cluster name, the provider, and the OS version. This can easily be accomplished by using a standard details card.`}
    </p>
    <img src={srcImport490} height={srcImport490.height * 439 / srcImport490.width} {...{"alt":"detail card content","width":"439","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"performance-card","size":"h4","className":"ws-title ws-h4"}}>
      {`Performance card`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The performance card needs to display current usage and usage history over time for five different measures: IOPS, Latency, Throughput, Recovery rate, and Recovery IOPS. For this use case, we can group five standard trend cards and arrange them in a horizontal grid. Then, we can add a filter in the header to change the scope of the data that we wish to measure.`}
    </p>
    <img src={srcImport491} height={srcImport491.height * 1185 / srcImport491.width} {...{"alt":"performance card content","width":"1185","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"health-card","size":"h4","className":"ws-title ws-h4"}}>
      {`Health card`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The health card will be a custom card to show the state of the cluster and the cluster data. While we are not using a standard card here, we can still borrow elements of the aggregate status card for displaying overall health.`}
    </p>
    <img src={srcImport492} height={srcImport492.height * 670 / srcImport492.width} {...{"alt":"health card content","width":"670","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"capacity-card","size":"h4","className":"ws-title ws-h4"}}>
      {`Capacity card`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The capacity card must reflect:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Physical capacity (percentage used).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Requested capacity (percentage used).`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Similar to the way we grouped multiple cards within a larger card for performance, we can display these two metrics side-by-side using two donut utilization charts.`}
    </p>
    <img src={srcImport493} height={srcImport493.height * 735 / srcImport493.width} {...{"alt":"capacity card content","width":"735","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"top-consumers-card","size":"h4","className":"ws-title ws-h4"}}>
      {`Top consumers card`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`This card gives users a glimpse of which  projects, pods, or clusters consume the most resources. We want to allow users to view this information by project, nodes, classes, and workloads for the top five consumers for any of these attributes. To accomplish this goal, we can create a custom card that uses a line chart to show consumption over time. The user can compare all five results or filter down to a specific time. We can also include an additional filter for users to change the displayed time range.`}
    </p>
    <img src={srcImport494} height={srcImport494.height * 746 / srcImport494.width} {...{"alt":"top consumers card content","width":"746","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"events-card-0","size":"h4","className":"ws-title ws-h4"}}>
      {`Events card`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The events card must display a list of system events and provide the ability to filter based on event type. For this use case, we can use a standard events card.`}
    </p>
    <img src={srcImport495} height={srcImport495.height * 439 / srcImport495.width} {...{"alt":"events card content","width":"439","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"inventory-card","size":"h4","className":"ws-title ws-h4"}}>
      {`Inventory card`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The inventory card is intended to list a count of current nodes, disks, pods, PVs, PVCs, and show if any are down or in error. For this use case, we can create a custom card. But since it has similar properties to the `}
      <PatternflyThemeLink {...{"to":"#aggregate-status-card"}}>
        {`aggregate status card`}
      </PatternflyThemeLink>
      {` for displaying object status, we can pull from some of the aggregate status card’s concepts.`}
    </p>
    <img src={srcImport496} height={srcImport496.height * 439 / srcImport496.width} {...{"alt":"inventory card content","width":"439","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"step-6-iterate-on-your-layout","size":"h3","className":"ws-title ws-h3"}}>
      {`Step 6: Iterate on your layout`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Add your cards to the layout you created in Step 3 and take a look at the result. Some cards may need to be made taller or shorter, but either way you now have a few different layouts to work with. If you find a card actually needs an additional column, repeat Step 3 but with your fully designed cards. Group each card and the content it contains to quickly and easily move it around the page as you iterate.`}
    </p>
    <AutoLinkHeader {...{"id":"the-final-result","size":"h3","className":"ws-title ws-h3"}}>
      {`The final result`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Here’s our final dashboard after we made a few adjustments. You’ll see that the inventory card is taller than it needs to be. But that’s OK since it matches the height of surrounding cards and creates a uniform layout. It also allows space for further extension without introducing a scroll bar.`}
    </p>
    <img src={srcImport497} height={srcImport497.height * 1680 / srcImport497.width} {...{"alt":"the finished dashboard","width":"1680","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'DemosDashboardDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
