import * as React from 'react';
import { Card } from '@patternfly/react-core';
import { shallow } from 'enzyme';
import { getQuickStarts } from '../../data/test-utils';
import { QuickStartStatus } from '../../utils/quick-start-types';
import QuickStartTile from '../QuickStartTile';

describe('QuickStartTile', () => {
  const quickstarts = getQuickStarts();

  it('should load proper catalog tile without featured property', () => {
    const wrapper = shallow(
      <QuickStartTile
        quickStart={quickstarts[0]}
        status={QuickStartStatus.NOT_STARTED}
        onClick={jest.fn()}
        isActive={false}
      />,
    );
    const catalogTile = wrapper.find(Card);
    expect(catalogTile.exists()).toBeTruthy();
    expect(catalogTile.prop('isSelected')).toBe(false);
  });

  it('should load proper catalog tile with featured property', () => {
    const wrapper = shallow(
      <QuickStartTile
        quickStart={quickstarts[1]}
        status={QuickStartStatus.IN_PROGRESS}
        onClick={jest.fn()}
        isActive
      />,
    );
    const catalogTile = wrapper.find(Card);
    expect(catalogTile.exists()).toBeTruthy();
    expect(catalogTile.prop('isSelected')).toBe(true);
  });
});
