import { ComponentProps } from 'react';
import { Button } from '@patternfly/react-core';
import { ShallowWrapper, shallow } from 'enzyme';
import { allQuickStarts } from '../../data/quick-start-test-data';
import QuickStartMarkdownView from '../../QuickStartMarkdownView';
import { QuickStartTaskStatus } from '../../utils/quick-start-types';
import { getQuickStartByName } from '../../utils/quick-start-utils';
import QuickStartConclusion from '../QuickStartConclusion';

jest.mock('react', () => {
  const ActualReact = require.requireActual('react');
  return {
    ...ActualReact,
    useContext: () => jest.fn(),
  };
});

const i18nNS = 'quickstart';

type QuickStartConclusionProps = ComponentProps<typeof QuickStartConclusion>;
let wrapper: ShallowWrapper<QuickStartConclusionProps>;
const props: QuickStartConclusionProps = {
  tasks: getQuickStartByName('explore-pipelines', allQuickStarts).spec.tasks,
  allTaskStatuses: [
    QuickStartTaskStatus.SUCCESS,
    QuickStartTaskStatus.SUCCESS,
    QuickStartTaskStatus.SUCCESS,
  ],
  conclusion: 'conclusion',
  onTaskSelect: jest.fn(),
  onQuickStartChange: jest.fn(),
};

xdescribe('QuickStartConclusion', () => {
  beforeEach(() => {
    spyOn(React, 'useContext').and.returnValue({
      activeQuickStartID: '',
      startQuickStart: () => {},
      restartQuickStart: () => {},
      getResource: (key) => `quickstart~${key}`,
    });
    wrapper = shallow(<QuickStartConclusion {...props} />);
  });

  it('should render conclusion if there are no failed tasks', () => {
    expect(wrapper.find(QuickStartMarkdownView).first().props().content).toEqual('conclusion');
  });

  it('should render link for next quick start if nextQuickStart prop is available and there are no failed tasks', () => {
    wrapper = shallow(
      <QuickStartConclusion
        {...props}
        nextQuickStarts={[getQuickStartByName('explore-pipelines', allQuickStarts)]}
      />,
    );
    expect(wrapper.find(Button).at(0).props().children).toEqual(
      `${i18nNS}~Start Installing the Pipelines Operator quick start`,
    );
  });

  it('should not render link for next quick start if nextQuickStart props is not available', () => {
    expect(wrapper.find(Button).length).toBe(0);
  });

  it('should not render conclusion, link for next quick start and should render message for retrying if there are failed tasks', () => {
    wrapper = shallow(
      <QuickStartConclusion
        {...props}
        nextQuickStarts={[getQuickStartByName('explore-pipelines', allQuickStarts)]}
        allTaskStatuses={[
          QuickStartTaskStatus.FAILED,
          QuickStartTaskStatus.SUCCESS,
          QuickStartTaskStatus.SUCCESS,
        ]}
      />,
    );
    expect(wrapper.find(QuickStartMarkdownView).first().props().content).toEqual(
      `${i18nNS}~One or more verifications did not pass during this quick start. Revisit the tasks or the help links, and then try again.`,
    );
    expect(wrapper.find(Button).length).toBe(0);
  });
});
