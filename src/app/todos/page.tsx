"use client";

import EditTodoModal from "@/components/edit-todo-modal";
import LayoutWithMenu from "@/components/layout-with-menu";
// import TodoCard from "@/components/todo-card";
import { Button } from "@/registry/new-york-v4/ui/button";
import { Progress } from "@/registry/new-york-v4/ui/progress";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import TodoCard from "@/components/todo-card";
import Image from "next/image";

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
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<
    (typeof initialTodos)[0] | null
  >(null);

  const handleToggleComplete = (id: string, checked: boolean) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: checked } : todo
      )
    );
  };

  const handleEdit = (id: string) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setCurrentTodo(todoToEdit);
      setIsEditModalOpen(true);
    }
  };

  const handleSaveTodo = (updatedTodo: {
    id: string;
    title: string;
    description: string;
    date: string;
  }) => {
    setTodos(
      todos.map((todo) =>
        todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo
      )
    );
  };

  return (
    <LayoutWithMenu>
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col space-y-5">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold flex gap-2 w-full items-center">
                Hello
                <span className="text-primary">Blosoom</span>
                <motion.div
                  animate={{
                    rotate: [0, 20, -10, 20, -10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                  className="inline-block origin-bottom-right"
                >
                  👋
                </motion.div>
              </h1>
              <h3 className="text-normal font-semibold text-gray-400">
                Let&apos;s get started keeping your tasks organized
              </h3>
            </div>
          </div>
        </div>

        {todos.length > 0 && (
          <div className="mb-6">
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-medium text-gray-500">Progress</p>
              <p className="text-sm font-medium text-gray-500">
                <span>{todos.filter((todo) => todo.completed).length}</span>/{" "}
                {todos.length} completed
              </p>
            </div>
            <Progress
              value={
                (todos.filter((todo) => todo.completed).length / todos.length) *
                100
              }
              className="h-2"
            />
          </div>
        )}

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

      <EditTodoModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveTodo}
        todo={currentTodo}
      />
    </LayoutWithMenu>
  );
};

export default TodosPage;
