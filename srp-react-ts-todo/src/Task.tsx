import React, { useState } from 'react';

type TaskType = {
  id: number;
  title: string;
  completed: boolean;
};

type TaskProps = {
  task: TaskType;
  onEditTask: (id: number, title: string, completed: boolean) => void;
};

const Task: React.FC<TaskProps> = ({ task, onEditTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [completed, setCompleted] = useState(task.completed);

  const handleSave = () => {
    onEditTask(task.id, title, completed);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            type="checkbox"
            checked={completed}
            onChange={(event) => setCompleted(event.target.checked)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{task.title}</h2>
          <input type="checkbox" checked={task.completed} readOnly />
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Task;
