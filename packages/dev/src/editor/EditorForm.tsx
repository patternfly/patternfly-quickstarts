import React from 'react';
import { Button, Form, FormGroup, TextInput, ActionGroup } from '@patternfly/react-core';
import { QuickStart } from '@patternfly/quickstarts';
import EditorSelect from './EditorSelect';
import { EditorTasks } from './EditorTasks';

type EditorFormProps = {
  onCreateCb: any;
  quickStarts: QuickStart[];
};

export const EditorForm: React.FC<EditorFormProps> = ({ onCreateCb, quickStarts }) => {
  const [id, setId] = React.useState('');
  const [displayName, setDisplayName] = React.useState('');
  const [quickStart, setQuickStart] = React.useState<QuickStart>();
  const taskTitle = 'New task';

  React.useEffect(() => {
    if (quickStart) {
      const newQuickStart = {
        ...quickStart,
        spec: {
          ...quickStart.spec,
          displayName,
        },
      };
      setQuickStart(newQuickStart);
      onCreateCb(newQuickStart);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayName]);

  const onEdit = (qsId: string) => {
    const existingQs = quickStarts.find((q) => q.metadata.name === qsId);
    const qs: QuickStart = existingQs || {
      metadata: {
        name: qsId,
      },
      spec: {
        displayName: existingQs ? displayName : '',
        tasks: [
          {
            title: taskTitle,
          },
        ],
      },
    };
    setId(qsId);
    setDisplayName(qs.spec.displayName);

    setQuickStart(qs);
    onCreateCb(qs);
  };

  const onTasksEdit = (tasks: any) => {
      debugger;
    const updatedQuickStart = {
      ...quickStart,
      spec: {
        ...quickStart.spec,
        // tasks: quickStart.spec.tasks.map((t) => {
        //   if (t.title === task.title) {
        //     return task;
        //   }
        //   return t;
        // }),
        tasks
      },
    };
    setQuickStart(updatedQuickStart);
    onCreateCb(updatedQuickStart);
  };

  return (
    <Form className="qs-editor">
      <FormGroup label="ID" isRequired fieldId="metadata.name">
        <EditorSelect quickStarts={quickStarts} onEdit={onEdit} />
        {/* <TextInput
          isRequired
          type="text"
          id="metadata.name"
          name="metadata.name"
          value={id}
          onChange={(val) => setId(val)}
        /> */}
      </FormGroup>
      {quickStart && (
        <>
          <FormGroup label="Name" isRequired fieldId="spec.displayName">
            <TextInput
              isRequired
              type="text"
              id="spec.displayName"
              name="spec.displayName"
              value={displayName}
              onChange={(val) => setDisplayName(val)}
            />
          </FormGroup>
          <EditorTasks quickStart={quickStart} onEdit={onTasksEdit} />
        </>
      )}

      {/* <ActionGroup>
        <Button variant="primary" onClick={onCreate}>
          Create
        </Button>
        <Button variant="link">Cancel</Button>
      </ActionGroup> */}
    </Form>
  );
};
