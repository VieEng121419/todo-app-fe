"use client";

import { Button } from "@/registry/new-york-v4/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/registry/new-york-v4/ui/dialog";
import { Input } from "@/registry/new-york-v4/ui/input";
import { Label } from "@/registry/new-york-v4/ui/label";
import { Textarea } from "@/registry/new-york-v4/ui/textarea";
import { formatDateForInput, formatDate } from "@/lib/date-utils";
import { useState, useEffect } from "react";

interface EditTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedTodo: {
    _id: string;
    title: string;
    description: string;
    date: string;
  }) => void;
  todo: {
    _id: string;
    title: string;
    description: string;
    date: string;
    completed: boolean;
  } | null;
}

const EditTodoModal = ({
  isOpen,
  onClose,
  onSave,
  todo,
}: EditTodoModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
      setDate(formatDateForInput(todo.date));
    }
  }, [todo]);

  const handleSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
    // if (todo) {
    //   onSave({
    //     _id: todo._id,
    //     title,
    //     description,
    //     // Format the date back to a readable format for display
    //     date: formatDate(new Date(date), "long"),
    //   });
    // }
    // onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-[#F6F6F6]">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="col-span-3 bg-white"
              />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="date" className="text-right">
                Due Date
              </Label>
              <Input
                id="date"
                type="datetime-local"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter className="mt-5">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditTodoModal;
