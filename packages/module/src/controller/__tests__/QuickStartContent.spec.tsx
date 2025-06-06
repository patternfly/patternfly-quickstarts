import { ComponentProps } from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { allQuickStarts } from '../../data/quick-start-test-data';
import { QuickStartTaskStatus } from '../../utils/quick-start-types';
import { getQuickStartByName } from '../../utils/quick-start-utils';
import QuickStartConclusion from '../QuickStartConclusion';
import QuickStartContent from '../QuickStartContent';
import QuickStartIntroduction from '../QuickStartIntroduction';
import QuickStartTasks from '../QuickStartTasks';

type QuickStartContentProps = ComponentProps<typeof QuickStartContent>;

let wrapper: ShallowWrapper<QuickStartContentProps>;

const props: QuickStartContentProps = {
  quickStart: getQuickStartByName('explore-serverless', allQuickStarts),
  allTaskStatuses: [
    QuickStartTaskStatus.INIT,
    QuickStartTaskStatus.INIT,
    QuickStartTaskStatus.INIT,
  ],
  taskNumber: -1,
  onTaskReview: jest.fn(),
  onTaskSelect: jest.fn(),
  onQuickStartChange: jest.fn(),
};

describe('QuickStartContent', () => {
  beforeEach(() => {
    wrapper = shallow(<QuickStartContent {...props} />);
  });

  it('should render QuickStartIntroduction when the tour status is Not Started', () => {
    expect(wrapper.find(QuickStartIntroduction).length).toBe(1);
    expect(wrapper.find(QuickStartTasks).length).toBe(0);
    expect(wrapper.find(QuickStartConclusion).length).toBe(0);
  });

  it('should render QuickStartTasks when the tour is In Progress', () => {
    wrapper = shallow(<QuickStartContent {...props} taskNumber={1} />);
    expect(wrapper.find(QuickStartIntroduction).length).toBe(0);
    expect(wrapper.find(QuickStartTasks).length).toBe(1);
    expect(wrapper.find(QuickStartConclusion).length).toBe(0);
  });

  it('should render QuickStartConclusion when the tour is Complete', () => {
    wrapper = shallow(<QuickStartContent {...props} taskNumber={2} />);
    expect(wrapper.find(QuickStartIntroduction).length).toBe(0);
    expect(wrapper.find(QuickStartTasks).length).toBe(0);
    expect(wrapper.find(QuickStartConclusion).length).toBe(1);
  });
});
