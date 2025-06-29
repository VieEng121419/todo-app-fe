"use client";

import { Button } from "@/registry/new-york-v4/ui/button";
import { cn } from "@/lib/utils";
import { HomeIcon, PlusCircle, CircleCheckBig } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuItem = {
  icon: React.ReactNode;
  label: string;
  href: string;
  matchPaths?: string[];
};

const MenuBottom = () => {
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    {
      icon: <HomeIcon className="!h-6 !w-6" />,
      label: "Home",
      href: "/",
      matchPaths: ["/"],
    },
    {
      icon: <PlusCircle className="!h-6 !w-6" />,
      label: "Add task",
      href: "/add-task",
      matchPaths: ["/add-task"],
    },
    {
      icon: <CircleCheckBig className="!h-6 !w-6" />,
      label: "Tasks",
      href: "/todos",
      matchPaths: ["/todos", "/tasks"],
    },
  ];

  const isPathActive = (item: MenuItem) => {
    if (!item.matchPaths) {
      return pathname === item.href;
    }

    return item.matchPaths.some(
      (path) => pathname === path || pathname.startsWith(path + "/")
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-white py-2 px-4 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-around">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = isPathActive(item);

          return (
            <Button
              key={item.href}
              variant="ghost"
              size="lg"
              className={cn(
                "flex flex-col items-center gap-1 h-auto py-2 relative w-20",
                isActive
                  ? "text-primary"
                  : "text-gray-500 hover:text-primary/50",
                "transition-colors duration-200"
              )}
              asChild
            >
              <Link href={item.href}>
                <div
                  className={cn(
                    "transition-all duration-300",
                    isActive ? "scale-110" : "scale-100 hover:scale-105"
                  )}
                >
                  {Icon}
                </div>
                <span
                  className={cn(
                    "text-xs font-medium",
                    isActive && "font-semibold"
                  )}
                >
                  {item.label}
                </span>
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full animate-pulse" />
                )}
              </Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default MenuBottom;
