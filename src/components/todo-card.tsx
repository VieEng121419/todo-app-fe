"use client";

import { Card, CardContent } from "@/registry/new-york-v4/ui/card";
import { Checkbox } from "@/registry/new-york-v4/ui/checkbox";
import { Pencil } from "lucide-react";
import { useState } from "react";

interface TodoCardProps {
  id?: string;
  title: string;
  description: string;
  date: string;
  completed?: boolean;
  onEdit?: () => void;
  onToggle?: (checked: boolean) => void;
}

const TodoCard = ({
  id,
  title = "Exercise",
  description = "Carry out a yoga session",
  date = "10:30 PM 19 Feb, 2025",
  completed = false,
  onEdit,
  onToggle,
}: TodoCardProps) => {
  const [isChecked, setIsChecked] = useState(completed);

  const handleToggle = (checked: boolean) => {
    setIsChecked(checked);
    if (onToggle) {
      onToggle(checked);
    }
  };

  return (
    <Card className="relative p-4 w-full mb-4">
      <CardContent className="p-0 flex flex-col justify-between">
        <div className="space-y-1 flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <p className="text-gray-500 text-sm">{description}</p>
          </div>
          <button
            onClick={onEdit}
            className="text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Edit todo"
          >
            <Pencil className="h-5 w-5" />
          </button>
        </div>
        <div className="flex items-baseline justify-between">
          <p className="text-sm text-gray-500 font-semibold">{date}</p>

          <div className="flex items-center mt-2">
            <span className="mr-2 text-gray-600 text-sm font-semibold">
              Mark as completed
            </span>
            <Checkbox
              checked={isChecked}
              onCheckedChange={handleToggle}
              id={`todo-${id}`}
              aria-label="Mark task as completed"
              className="h-6 w-6 border-gray-400"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TodoCard;
