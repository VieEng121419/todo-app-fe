"use client";

import { useLogin } from "@/hooks/useLogin";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/new-york-v4/ui/form";
import { Input } from "@/registry/new-york-v4/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const FormSchema = z.object({
  email: z
    .string({
      required_error: "Email is required.",
    })
    .email("Please enter a valid email address."),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const SignInPage = () => {
  const router = useRouter(); // Assuming useRouter is imported from 'next/router'
  const { mutate: loginUser, isPending } = useLogin(); // Assuming useLogin is defined elsewhere
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    loginUser(data, {
      onSuccess: () => {
        toast.success("Login successful!");
        router.push("/todos")
      },
      onError: (error) => {
        toast.error(error.message || "Login failed. Please try again.");
      },
    });
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center relative">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center absolute top-35 transform left-1/2 -translate-x-1/2 w-full">
          Login to your <span className="text-primary">Account</span>
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid w-full max-w-md gap-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              {isPending && <Loader2Icon className="animate-spin" />}
              Sign In
            </Button>
          </form>
        </Form>

        <div className="relative">
          <div className="relative flex justify-center text-xs font-semibold">
            <span className="px-2 text-gray-500">OR LOGIN WITH:</span>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            className="w-12 h-12 rounded-full border-gray-300 hover:bg-gray-50"
            onClick={() => toast("Facebook login clicked")}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#1877F2"
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="w-12 h-12 rounded-full border-gray-300 hover:bg-gray-50"
            onClick={() => toast("Google login clicked")}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          </Button>
        </div>
      </div>
      <div className="flex justify-center space-x-4 absolute bottom-12">
        <h3 className="text-sm font-semibold text-gray-500">
          Don't have an account?{" "}
          <a href="/sign-up" className="text-primary hover:underline">
            Sign Up
          </a>
        </h3>
      </div>
    </div>
  );
};

export default SignInPage;
