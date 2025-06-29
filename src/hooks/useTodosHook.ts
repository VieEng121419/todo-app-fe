import { getTodos } from "@/services/todosService";
import { useQuery } from "@tanstack/react-query";
import { todo } from "node:test";

const useTodosHook = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = getTodos();

      return response;
    },
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export default useTodosHook;
