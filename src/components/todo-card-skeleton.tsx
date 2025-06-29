import { Card, CardContent } from "@/registry/new-york-v4/ui/card";
import { Skeleton } from "@/registry/new-york-v4/ui/skeleton";

const TodoCardSkeleton = () => {
  return (
    <Card className="relative p-4 w-full mb-4">
      <CardContent className="p-0 flex flex-col justify-between">
        <div className="space-y-1 flex justify-between items-start">
          <div className="flex-1">
            {/* Title skeleton */}
            <Skeleton className="h-6 w-3/4 mb-2" />
            {/* Description skeleton */}
            <Skeleton className="h-4 w-full" />
          </div>
          {/* Edit button skeleton */}
          <Skeleton className="h-5 w-5" />
        </div>
        <div className="flex items-baseline justify-between mt-4">
          {/* Date skeleton */}
          <Skeleton className="h-4 w-32" />
          
          <div className="flex items-center">
            {/* "Mark as completed" text skeleton */}
            <Skeleton className="h-4 w-24 mr-2" />
            {/* Checkbox skeleton */}
            <Skeleton className="h-5 w-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TodoCardSkeleton;
