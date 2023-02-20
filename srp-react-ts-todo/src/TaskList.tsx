import React, { useState } from 'react';
import Task from './Task';
import NewTask from './NewTask';
import TaskFilter from './TaskFilter';

type TaskType = {
  id: number;
  title: string;
  completed: boolean;
};

const initialTasks: TaskType[] = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: true },
  { id: 3, title: 'Task 3', completed: false },
];

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (title: string) => {
    const newTask: TaskType = {
      id: tasks.length + 1,
      title,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const handleEditTask = (id: number, title: string, completed: boolean) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title, completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleFilterTasks = (completed: boolean) => {
    const filteredTasks = tasks.filter((task) => task.completed === completed);
    setTasks(filteredTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <NewTask onAddTask={handleAddTask} />
      <TaskFilter onFilterTasks={handleFilterTasks} />
      {tasks.map((task, index) => (
        <Task key={task.id} task={task} onEditTask={handleEditTask} />
      ))}
    </div>
  );
};

export default TaskList;
