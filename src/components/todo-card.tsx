"use client";

import { Card, CardContent } from "@/registry/new-york-v4/ui/card";
import { Checkbox } from "@/registry/new-york-v4/ui/checkbox";
import { formatDate } from "@/lib/date-utils";
import { Pencil } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

  // Format date in a relative way (Today, Tomorrow, 2 days ago, etc.)
  const formattedDate = formatDate(date, "relative");

  // Animation states
  const [animate, setAnimate] = useState(false);

  // Trigger animation when isChecked changes to true
  useEffect(() => {
    if (isChecked) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 500); // Reset after animation completes

      return () => clearTimeout(timer);
    }
  }, [isChecked]);

  return (
    <motion.div
      animate={animate ? { y: [0, -10, 0], transition: { duration: 0.5 } } : {}}
    >
      <Card
        className={`relative p-4 w-full mb-4 transition-all ${isChecked ? "bg-green-50 border-green-200" : ""}`}
      >
        <CardContent className="p-0 flex flex-col justify-between">
          <div className="space-y-1 flex justify-between items-start">
            <div>
              <h3
                className={`text-lg font-bold ${isChecked ? "text-green-700 line-through" : "text-gray-900"}`}
              >
                {title}
              </h3>
              <p
                className={`text-sm ${isChecked ? "text-green-600" : "text-gray-500"}`}
              >
                {description}
              </p>
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
            <p className="text-sm text-gray-500 font-semibold">
              {formattedDate}
            </p>

            <div className="flex items-center mt-2">
              <span className="mr-2 text-gray-600 text-sm font-semibold">
                {isChecked ? "Completed" : "Mark as completed"}
              </span>
              <Checkbox
                checked={isChecked}
                onCheckedChange={handleToggle}
                id={`todo-${id}`}
                aria-label="Mark task as completed"
                className={`h-5 w-5 ${isChecked ? "border-green-400" : "border-gray-400"}`}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TodoCard;
