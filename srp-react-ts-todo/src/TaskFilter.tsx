import React from 'react';

type TaskFilterProps = {
  onFilterTasks: (completed: boolean) => void;
};

const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterTasks }) => {
  const handleFilter = (completed: boolean) => {
    onFilterTasks(completed);
  };

  return (
    <div>
      <button onClick={() => handleFilter(true)}>Show Completed</button>
      <button onClick={() => handleFilter(false)}>Show Incomplete</button>
    </div>
  );
};

export default TaskFilter;
