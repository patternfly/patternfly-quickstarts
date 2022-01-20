import React from 'react';
import {
  Button,
  FormGroup,
  TextInput,
  FormFieldGroupExpandable,
  FormFieldGroupHeader,
  Bullseye,
} from '@patternfly/react-core';
import { QuickStart } from '@patternfly/quickstarts';
import { EditorTask } from './EditorTask';
import PlusSquareIcon from '@patternfly/react-icons/dist/js/icons/plus-square-icon';

let taskId = 0;

type EditorTasksProps = {
  quickStart: QuickStart;
  onEdit?: any;
};

export const EditorTasks: React.FC<EditorTasksProps> = ({ quickStart, onEdit }) => {
  const [tasks, setTasks] = React.useState(
    quickStart.spec.tasks.map((t) => ({
      ...t,
      id: ++taskId,
    })) || [],
  );

  const onTaskEdit = (task: any) => {
    const newTasks = tasks.map((t) => (t.id === task.id ? task : t));
    setTasks(newTasks);
    onEdit(newTasks);
  };

  const moveUp = (id: string | number) => {
    const currentIndex = tasks.findIndex((task: any) => task.id === id);
    if (currentIndex === 0) {
      // already at the top
      return;
    }
    const newTasks = [...tasks];
    const previousTask = newTasks[currentIndex - 1];
    newTasks[currentIndex - 1] = newTasks[currentIndex];
    newTasks[currentIndex] = previousTask;
    setTasks(newTasks);
    onEdit(newTasks);
  };

  const moveDown = (id: string | number) => {
    const currentIndex = tasks.findIndex((task: any) => task.id === id);
    if (currentIndex === tasks.length - 1) {
      // already at the end
      return;
    }
    const newTasks = [...tasks];
    const followingTask = newTasks[currentIndex + 1];
    newTasks[currentIndex + 1] = newTasks[currentIndex];
    newTasks[currentIndex] = followingTask;
    setTasks(newTasks);
    onEdit(newTasks);
  };

  const remove = (id: string | number) => {
    const newTasks = tasks.filter((task: any) => task.id !== id);
    setTasks(newTasks);
    onEdit(newTasks);
  };

  const createTask = () => {
    const length = tasks.length;
    const id = ++taskId;
    const newTasks = [
      ...tasks,
      {
        id,
        title: `Task ${length + 1}`,
      },
    ];
    setTasks(newTasks);
    onEdit(newTasks);
  };

  //   React.useEffect(() => {
  //     const id = ++taskId;
  //     setTasks([
  //       {
  //         id,
  //         title: `Task ${length + 1}`,
  //       },
  //     ]);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  return (
    <>
      {tasks.map((task: any) => (
        <EditorTask
          key={task.id}
          id={task.id}
          moveUp={moveUp}
          moveDown={moveDown}
          remove={remove}
          title={task.title}
          onEdit={onTaskEdit}
        />
      ))}
      <Bullseye>
        <Button variant="plain" aria-label="Create task" onClick={createTask}>
          <PlusSquareIcon size="lg" />
        </Button>
      </Bullseye>
    </>
  );
};
