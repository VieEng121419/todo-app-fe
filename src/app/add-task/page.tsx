"use client";

import LayoutWithMenu from "@/components/layout-with-menu";
import { Button } from "@/registry/new-york-v4/ui/button";
import { Card } from "@/registry/new-york-v4/ui/card";
import { Input } from "@/registry/new-york-v4/ui/input";
import { Label } from "@/registry/new-york-v4/ui/label";
import { Textarea } from "@/registry/new-york-v4/ui/textarea";

const AddTaskPage = () => {
  return (
    <LayoutWithMenu>
      <div className="container mx-auto py-6">
        <div className="flex flex-col space-y-2 mb-6">
          <h1 className="text-3xl font-bold">Create New Task</h1>
          <h3 className="text-normal font-semibold text-gray-400">
            Fill in the details for your new task
          </h3>
        </div>

        <form className="space-y-6">
          <div className="flex flex-col gap-4">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Task title" />
          </div>

          <div className="flex flex-col gap-4">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your task"
              rows={4}
              className="bg-white !shadow-none"
            />
          </div>

          <div className="flex flex-col gap-4">
            <Label htmlFor="date">Due Date</Label>
            <Input id="date" type="datetime-local" />
          </div>

          <Button type="submit" className="w-full mt-5">
            Create Task
          </Button>
        </form>
      </div>
    </LayoutWithMenu>
  );
};

export default AddTaskPage;
