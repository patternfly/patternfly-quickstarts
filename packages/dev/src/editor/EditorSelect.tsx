// @ts-nocheck
import React from 'react';
import { Checkbox, Select, SelectOption, SelectVariant } from '@patternfly/react-core';
import { QuickStart } from '@patternfly/quickstarts';

type EditorSelectProps = {
  quickStarts: QuickStart[];
  onEdit?: any;
};

const EditorSelect: React.FC<EditorSelectProps> = ({ quickStarts, onEdit }) => {
  const [options, setOptions] = React.useState<SelectOption[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<QuickStart | undefined>(undefined);

  React.useEffect(() => {
    setOptions(
      quickStarts.map((quickStart) => {
        return {
          value: quickStart.metadata.name,
        };
      }),
    );
  }, [quickStarts]);

  const onToggle = (open) => {
    setIsOpen(open);
  };

  const clearSelection = () => {
    setSelected(null);
    setIsOpen(false);
  };

  const onSelect = (event, selection, isPlaceholder) => {
    if (isPlaceholder) clearSelection();
    else {
      setSelected(selection);
      setIsOpen(false);
      onEdit(selection);
    }
  };

  const onCreateOption = (newValue) => {
    setOptions([...options, { value: newValue }]);
  };

  const titleId = 'select-create-quickstart';
  return (
    <div>
      <span id={titleId} hidden>
        Select or create a quick start
      </span>
      <Select
        variant={SelectVariant.typeahead}
        typeAheadAriaLabel="Select or create a quick start"
        onToggle={onToggle}
        onSelect={onSelect}
        onClear={clearSelection}
        selections={selected}
        isOpen={isOpen}
        aria-labelledby={titleId}
        placeholderText="Select or create a quick start"
        isCreatable
        onCreateOption={onCreateOption}
      >
        {options.map((option, index) => (
          <SelectOption
            key={index}
            value={option.value}
            {...(option.description && { description: option.description })}
          />
        ))}
      </Select>
    </div>
  );
};

export default EditorSelect;
