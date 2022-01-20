import React from 'react';
import {
  Button,
  FormGroup,
  TextInput,
  FormFieldGroupExpandable,
  FormFieldGroupHeader,
} from '@patternfly/react-core';
import ArrowUpIcon from '@patternfly/react-icons/dist/js/icons/arrow-up-icon';
import ArrowDownIcon from '@patternfly/react-icons/dist/js/icons/arrow-down-icon';
import OutlinedTrashAltIcon from '@patternfly/react-icons/dist/js/icons/trash-alt-icon';

type EditorTaskProps = {
  id: string | number;
  title: string;
  moveUp?: any;
  moveDown?: any;
  remove?: any;
  onEdit?: any;
};

export const EditorTask: React.FC<EditorTaskProps> = ({
  id,
  moveUp,
  moveDown,
  remove,
  title,
  onEdit,
}) => {
  const [taskTitle, setTaskTitle] = React.useState(title);

  React.useEffect(() => {
    onEdit({
      id,
      title: taskTitle,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskTitle]);

  return (
    <>
      <FormFieldGroupExpandable
        isExpanded
        toggleAriaLabel="Task"
        header={
          <FormFieldGroupHeader
            titleText={{ text: taskTitle, id: taskTitle }}
            actions={
              <>
                <Button variant="plain" aria-label="Delete" onClick={() => remove(id)}>
                  <OutlinedTrashAltIcon />
                </Button>
                <Button variant="plain" aria-label="Move up" onClick={() => moveUp(id)}>
                  <ArrowUpIcon />
                </Button>
                <Button variant="plain" aria-label="Move down" onClick={() => moveDown(id)}>
                  <ArrowDownIcon />
                </Button>
              </>
            }
          />
        }
      >
        <FormGroup label="Task title" isRequired fieldId="tasks.title">
          <TextInput
            isRequired
            type="text"
            id="tasks.title"
            name="tasks.title"
            value={taskTitle}
            onChange={(val) => setTaskTitle(val)}
          />
        </FormGroup>
      </FormFieldGroupExpandable>
    </>
  );
};
