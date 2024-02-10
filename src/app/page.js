"use client";
import { useState, useEffect } from "react"; // Keep useState as required
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";

import { set, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";

import { data, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { toast } from "sonner";

import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function page() {
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const [token , setToken] = useState("");

  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues, 
  });

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    console.log("submitted");
    e.preventDefault();
    try {
      const values = form.getValues();
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:5000/v1/auth/login",
        values
      );
      if (response.status === 200) {
        router.push("/home");
        console.log(login);
        toast("Success");
        localStorage.setItem("token", login.data.data.accessToken);
        localStorage.setItem(
          "isMatched",
          login.data.data.studentDetails.isMatched
        );
        localStorage.setItem(
          "studentId",
          login.data.data.studentDetails.studentId
        );
      }
    } catch (error) {
      setIsLoading(true);

      
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      router.push("/home");
    }
  }, [])

  return (
    <div>
      {" "}
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <Card className="mt-20 mx-5 py-2">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              Login to Thakur College Exclusive Dating App 💖
            </CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={onSubmit}>
                <div className="flex flex-col space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          <Label htmlFor="email">Email</Label>
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={field.value} // Use controlled value
                            {...field}
                          />
                        </FormControl>
                        <FormDescription />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          <Label htmlFor="password">Password</Label>
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="password"
                            name="password"
                            type="password"
                            value={field.value} // Use controlled value
                            {...field}
                          />
                        </FormControl>
                        <FormDescription />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    disabled={isLoading || !form.formState.isValid}
                    variant="destructive"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
          <CardDescription className="text-center">
         Don't have an account?{" "}
          <Link href="/signup" className="text-red-500">
            Sign up
          </Link>
        </CardDescription>

        </Card>
      </main>
    </div>
  );
}
