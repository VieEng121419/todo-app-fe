import { loginUser } from "@/services/userService";
import { useMutation } from "@tanstack/react-query";
import { use } from "react";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      await loginUser(data.email, data.password);
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
    onSuccess: (data) => {
      console.log("Login successful:", data);
    },
  });
};
