"use client";

import LayoutWithMenu from "@/components/layout-with-menu";
import { Button } from "@/registry/new-york-v4/ui/button";
import { Card } from "@/registry/new-york-v4/ui/card";
import { Clock, LayoutDashboard, CheckCircle, Calendar } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
  return (
    <LayoutWithMenu>
      <div className="container mx-auto py-6">
        <div className="flex flex-col space-y-5 mb-6">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <h3 className="text-normal font-semibold text-gray-400">
            Your task summary for today
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="p-4 bg-purple-50">
            <div className="flex flex-col items-center">
              <LayoutDashboard className="h-10 w-10 text-purple-600 mb-2" />
              <h3 className="font-bold text-xl">23</h3>
              <p className="text-sm text-gray-500">Total Tasks</p>
            </div>
          </Card>
          <Card className="p-4 bg-green-50">
            <div className="flex flex-col items-center">
              <CheckCircle className="h-10 w-10 text-green-600 mb-2" />
              <h3 className="font-bold text-xl">18</h3>
              <p className="text-sm text-gray-500">Completed</p>
            </div>
          </Card>
        </div>

        <h2 className="text-xl font-bold mb-4">Today's Tasks</h2>
        
        <div className="space-y-4 mb-6">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Task #{item}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>Due today</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/todos">
                    View
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Calendar className="h-6 w-6 mr-2 text-purple-600" />
              <div>
                <h3 className="font-semibold">This Week</h3>
                <p className="text-sm text-gray-500">12 tasks remaining</p>
              </div>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/todos">
                View All
              </Link>
            </Button>
          </div>
        </Card>

        <Button className="w-full" asChild>
          <Link href="/add-task">
            Create New Task
          </Link>
        </Button>
      </div>
    </LayoutWithMenu>
  );
};

export default HomePage;
