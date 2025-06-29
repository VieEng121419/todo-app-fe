"use client";

import EditTodoModal from "@/components/edit-todo-modal";
import LayoutWithMenu from "@/components/layout-with-menu";
// import TodoCard from "@/components/todo-card";
import { Button } from "@/registry/new-york-v4/ui/button";
import { Progress } from "@/registry/new-york-v4/ui/progress";
import { PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TodoCard from "@/components/todo-card";
import TodoCardSkeleton from "@/components/todo-card-skeleton";
import useTodosHook from "@/hooks/useTodosHook";

interface Todo {
  _id: string;
  title: string;
  description: string;
  date: string;
  completed: boolean;
}

const TodosPage = () => {
  const { data: todosData, isLoading } = useTodosHook();
  console.log("🚀 ~ TodosPage ~ todosData:", todosData);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);

  const handleToggleComplete = (id: string, checked: boolean) => {
    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, completed: checked } : todo
      )
    );
  };

  const handleEdit = (id: string) => {
    const todoToEdit = todos.find((todo) => todo._id === id);
    if (todoToEdit) {
      setCurrentTodo(todoToEdit);
      setIsEditModalOpen(true);
    }
  };

  const handleSaveTodo = (updatedTodo: {
    _id: string;
    title: string;
    description: string;
    date: string;
  }) => {
    setTodos(
      todos.map((todo) =>
        todo._id === updatedTodo._id ? { ...todo, ...updatedTodo } : todo
      )
    );
  };

  useEffect(() => {
    if (todosData?.length > 0) {
      setTodos(todosData);
    }
  }, [todosData]);

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
          {isLoading ? (
            // Show skeleton cards while loading
            Array.from({ length: 3 }).map((_, index) => (
              <TodoCardSkeleton key={index} />
            ))
          ) : (
            <>
              {todos.map((todo) => (
                <TodoCard
                  key={todo._id}
                  id={todo._id}
                  title={todo.title}
                  description={todo.description}
                  date={todo.date}
                  completed={todo.completed}
                  onToggle={(checked) => handleToggleComplete(todo._id, checked)}
                  onEdit={() => handleEdit(todo._id)}
                />
              ))}

              {todos.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-gray-500">
                    No todos yet. Add one to get started!
                  </p>
                </div>
              )}
            </>
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
