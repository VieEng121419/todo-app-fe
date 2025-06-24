"use client";

import NavMobile from "@/components/nav-mobile";
import TodoCard from "@/components/todo-card";
import { Button } from "@/registry/new-york-v4/ui/button";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

// Sample todo data
const initialTodos = [
  {
    id: "1",
    title: "Exercise",
    description: "Carry out a yoga session",
    date: "10:30 PM 19 Feb, 2025",
    completed: false,
  },
  {
    id: "2",
    title: "Meeting with team",
    description: "Discuss project progress and next steps",
    date: "2:00 PM 25 Jun, 2025",
    completed: false,
  },
  {
    id: "3",
    title: "Grocery shopping",
    description: "Buy fruits, vegetables, and other essentials",
    date: "11:00 AM 26 Jun, 2025",
    completed: false,
  },
  {
    id: "4",
    title: "Read a book",
    description: "Continue reading 'The Psychology of Money'",
    date: "8:00 PM Today",
    completed: true,
  },
];

const TodosPage = () => {
  const [todos, setTodos] = useState(initialTodos);

  const handleToggleComplete = (id: string, checked: boolean) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: checked } : todo
      )
    );
  };

  const handleEdit = (id: string) => {
    // Will implement editing functionality in future
    console.log(`Edit todo with id: ${id}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavMobile />

      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col space-y-5">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold">Hello Blosoom</h1>
              <h3 className="text-normal font-semibold text-gray-400">
                Let's get started keeping your tasks organized
              </h3>
            </div>
            <Button className="flex items-center gap-1 w-fit">
              <PlusCircle className="h-5 w-5" />
              Add Todo
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              id={todo.id}
              title={todo.title}
              description={todo.description}
              date={todo.date}
              completed={todo.completed}
              onToggle={(checked) => handleToggleComplete(todo.id, checked)}
              onEdit={() => handleEdit(todo.id)}
            />
          ))}

          {todos.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500">
                No todos yet. Add one to get started!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodosPage;
