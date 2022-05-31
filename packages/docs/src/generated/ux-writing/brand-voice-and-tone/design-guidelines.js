import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Brand voice and tone",
  "section": "UX writing",
  "source": "design-guidelines",
  "slug": "/ux-writing/brand-voice-and-tone/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/content/brand-voice-and-tone.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`In a business context, brand is the identity of a company that people recognize based on an emotional and psychological connection as well as factual information.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`All your UX copy should align with your company’s brand, contributing to a consistent and authentic experience across every content channel users interact with.
To keep your UX copy on-brand, consider style, voice, and tone:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Style`}
          </strong>
          {` is the way you use grammar, punctuation, and syntax. It’s influenced by how your words work together and what effect your writing has on the user.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Voice`}
          </strong>
          {` is the personality that’s reflected in your writing.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Tone`}
          </strong>
          {` is the approach you take that’s appropriate for the context of your content. Tone encompasses the user’s emotions that need to be accounted for and the resulting approach you must take.`}
        </p>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Let’s consider how we use the Red Hat brand voice in our UX copy. If Red Hat were a person, they would be:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Helpful but humble (not arrogant).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Authentic but adaptable (not stubborn).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Open but ordered (not chaotic).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Brave but balanced (not reckless).`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"voice-traits","size":"h2","className":"ws-title ws-h2"}}>
      {`Voice traits`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`To reflect the Red Hat voice in UX copy for Red Hat products, we have UX voice traits. Each voice trait is an extension of the Red Hat voice.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Red Hat voice traits`}
                </strong>
              </div>
            </th>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`UX voice traits`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Red Hat voice traits"}}>
              <div>
                {`Helpful but humble (not arrogant)`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"UX voice traits"}}>
              <div>
                {`Friendly`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Red Hat voice traits"}}>
              <div>
                {`Authentic but adaptable (not stubborn)`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"UX voice traits"}}>
              <div>
                {`Approachable`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Red Hat voice traits"}}>
              <div>
                {`Open but ordered (not chaotic)`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"UX voice traits"}}>
              <div>
                {`Collaborative`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Red Hat voice traits"}}>
              <div>
                {`Brave but balanced (not reckless)`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"UX voice traits"}}>
              <div>
                {`Inventive`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <p {...{"className":"ws-p"}}>
      {`You can’t `}
      <em>
        {`tell`}
      </em>
      {` your users what your voice is. You need to `}
      <em>
        {`show`}
      </em>
      {` them who you are in your writing. One way to do this is with “Voice Do and Don’t” charts. This is what Red Hat's UX copy voice charts look like:`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Voice trait`}
      </strong>
      {`: Friendly`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Description`}
      </strong>
      {`: Our #1 focus is the user. We make them feel welcome and create a sense of belonging and understanding.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Do`}
                </strong>
              </div>
            </th>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Don't`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Do"}}>
              <div>
                {`Be clear and concise for users of all skills and abilities.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Don't"}}>
              <div>
                {`Don’t include fluff or long sentences that run on and on.`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Do"}}>
              <div>
                {`Write how you speak, but add extra polish.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Don't"}}>
              <div>
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Do"}}>
              <div>
                {`Focus on comprehension and use plain language.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Don't"}}>
              <div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Voice trait`}
      </strong>
      {`: Approachable`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Description`}
      </strong>
      {`: People are comfortable engaging with us. We’re open to listening and changing our ways when better ideas come along.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Do`}
                </strong>
              </div>
            </th>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Don't`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Do"}}>
              <div>
                {`Say what you mean.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Don't"}}>
              <div>
                {`Don’t use jargon, idioms, bizspeak, or formal language.`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Do"}}>
              <div>
                {`Be direct and transparent with descriptive, specific language.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Don't"}}>
              <div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Voice trait`}
      </strong>
      {`: Collaborative`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Description`}
      </strong>
      {`: We embody Red Hat’s open source mission with our collaborative working style and our sense of community.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Do`}
                </strong>
              </div>
            </th>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Don't`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Do"}}>
              <div>
                {`Deliver content in a way that includes everyone.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Don't"}}>
              <div>
                {`Don’t rely on inside jokes, colloquial expressions, culture-specific examples, or other alienating language to get your point across.`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Do"}}>
              <div>
                {`Use “you” and the active voice to put emphasis on the user and power in their hands.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Don't"}}>
              <div>
                {`Don’t use “I” too much. Make the user the star of every story you tell.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Voice trait`}
      </strong>
      {`: Inventive`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Description`}
      </strong>
      {`: We have a fearless edge, challenging the assumption that UX is for a niche group of techies. We’re also not afraid to share our ideas and welcome new ones.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Do`}
                </strong>
              </div>
            </th>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Don't`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Do"}}>
              <div>
                {`Deliver concepts and ideas with an air of confident simplicity.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Don't"}}>
              <div>
                {`Don’t belittle others or make jokes at their expense. We can laugh at ourselves but not at our users.`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Do"}}>
              <div>
                {`Add real-world, global-friendly examples.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Don't"}}>
              <div>
                {`Don’t use others as examples of what not to do.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <p {...{"className":"ws-p"}}>
      {`When crafting your brand voice, consider your company or team values (if you have them) and align your voice traits accordingly.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If you’re contributing PatternFly content (such as website copy or documentation), keep the above voice traits in mind. If you’re adopting PatternFly as part of another organization, you should go through a similar process to document the attributes of your own brand voice.`}
    </p>
    <AutoLinkHeader {...{"id":"tone","size":"h2","className":"ws-title ws-h2"}}>
      {`Tone`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Tone is the approach you take that’s appropriate for the context of your content. Tone encompasses the user’s emotions that need to be accounted for and the resulting approach you must take.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Unlike voice, tone can change. To determine tone, ask yourself the following questions:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`What does the user need at this time?`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`What is the user thinking?`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`How is the user feeling?`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`The tone you use is based on the answers to those questions. PatternFly’s tone typically varies between casual, professional, informative, and supportive.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Here are some examples of how tone varies depending on context:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`You’re writing a blog post about a PatternFly event—exciting! Your tone is casual.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You’re writing a social media post addressing a product delay or failure—not exciting. Your tone is professional.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You’re writing an email to inform a user of an overdue payment. Your tone is informative and professional.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You’re guiding a user through a new interface. Your tone is informative and supportive.`}
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'UxWritingBrandVoiceAndToneDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
