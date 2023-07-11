import React, { useState } from "react";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
interface Task {
  id: number;
  text: string;
  completed: boolean;
}
let nextTaskId = 1;

const TodoApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (text: string) => {
    const newTask: Task = { id: nextTaskId++, text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedTasks = tasks.filter((task) => task.completed);
  const activeTasks = tasks.filter((task) => !task.completed);

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <NewTaskForm onAddTask={handleAddTask} />
      <h2>Active Tasks</h2>
      <TaskList
        tasks={activeTasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
      <h2>Completed Tasks</h2>
      <TaskList
        tasks={completedTasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
    </div>
  );
};

export default TodoApp;
