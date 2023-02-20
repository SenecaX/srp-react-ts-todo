import React, { useState } from 'react';

type NewTaskProps = {
  onAddTask: (title: string) => void;
};

const NewTask: React.FC<NewTaskProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (title.trim() !== '') {
      onAddTask(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTask;
