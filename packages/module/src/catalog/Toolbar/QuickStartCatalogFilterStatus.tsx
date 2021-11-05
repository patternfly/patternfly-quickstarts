import * as React from 'react';
import {
  Select,
  SelectOption,
  SelectProps,
  SelectVariant,
  ToolbarItem,
} from '@patternfly/react-core';
import { QuickStartContext, QuickStartContextValues } from '../../utils/quick-start-context';
import { QuickStartStatus } from '../../utils/quick-start-types';
import { getQuickStartStatusCount } from '../../utils/quick-start-utils';

interface QuickStartCatalogFilterStatusProps extends Omit<SelectProps, 'onChange' | 'onToggle'> {
  value: string[];
  onChange: (newValue: string[]) => void;
}

const QuickStartCatalogFilterStatus: React.FC<QuickStartCatalogFilterStatusProps> = ({
  value,
  onChange,
  ...props
}) => {
  const { allQuickStartStates, allQuickStarts, getResource } = React.useContext<
    QuickStartContextValues
  >(QuickStartContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const onSelect = React.useCallback(
    (_, selection: string): void => {
      setIsOpen(false);
      const newValue = value.includes(selection)
        ? value.filter((status) => status !== selection)
        : [...value, selection];
      onChange(newValue);
    },
    [value, onChange],
  );

  const selectOptions = React.useMemo(() => {
    const statusCounts = getQuickStartStatusCount(allQuickStartStates, allQuickStarts);
    const statusLabels = {
      [QuickStartStatus.COMPLETE]: getResource('Complete ({{statusCount, number}})').replace(
        '{{statusCount, number}}',
        statusCounts[QuickStartStatus.COMPLETE],
      ),
      [QuickStartStatus.IN_PROGRESS]: getResource('In progress ({{statusCount, number}})').replace(
        '{{statusCount, number}}',
        statusCounts[QuickStartStatus.IN_PROGRESS],
      ),
      [QuickStartStatus.NOT_STARTED]: getResource('Not started ({{statusCount, number}})').replace(
        '{{statusCount, number}}',
        statusCounts[QuickStartStatus.NOT_STARTED],
      ),
    };
    return Object.keys(statusLabels).map((status) => (
      <SelectOption key={status} data-key={status} value={status}>
        {statusLabels[status]}
      </SelectOption>
    ));
  }, [allQuickStartStates, allQuickStarts, getResource]);

  return (
    <ToolbarItem>
      <Select
        variant={SelectVariant.checkbox}
        aria-label={getResource('Select filter')}
        isOpen={isOpen}
        onToggle={setIsOpen}
        placeholderText={getResource('Status')}
        onSelect={onSelect}
        selections={value}
        {...props}
      >
        {selectOptions}
      </Select>
    </ToolbarItem>
  );
};

export default QuickStartCatalogFilterStatus;
