import React, { useState } from "react";
import './style.css';

interface NewTaskFormProps {
  onAddTask: (text: string) => void;
}

const NewTaskForm: React.FC<NewTaskFormProps> = ({ onAddTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.trim()) {
      onAddTask(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTaskForm;