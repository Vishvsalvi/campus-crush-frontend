"use client";
import { useEffect, useState } from "react"; // Keep useState as required
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
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

import axios from "axios";
import { useRouter } from "next/navigation";

export default function Forming() {
  const formSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    gender: z.string(),
    stream: z.string(),
    year: z.string(),
  });

  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    password: "",
    gender: undefined,
    stream: undefined,
    year: undefined,
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues, // Set initial values in useForm
  });

  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const values = form.getValues();
      console.log(values);
      const registerUser = await axios.post(
        `${process.env.CAMPUS_CRUSH_BACKEND}/v1/auth/register`,
        values
      );

      if (registerUser.status === 201) {
        const login = await axios.post(`${process.env.CAMPUS_CRUSH_BACKEND}/v1/auth/login`, {
          email: values.email,
          password: values.password,
        });
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

      toast(error.response.data.error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/home");
    }
    {/*  eslint-disable-next-line */}
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Card className="mt-20 mx-5 py-3">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Welcome to Thakur College Exclusive Dating App 💖
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
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <Label htmlFor="name">Name</Label>
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          name="name"
                          type="text"
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
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <Label htmlFor="gender">Gender</Label>
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="">
                            <SelectValue placeholder="Select your gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Gender</SelectLabel>
                              <SelectItem value="M">Male</SelectItem>
                              <SelectItem value="F">Female</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="stream"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <Label htmlFor="stream">Stream</Label>
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="">
                            <SelectValue placeholder="Select your stream" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Stream</SelectLabel>
                              <SelectItem value="Science">Science</SelectItem>
                              <SelectItem value="Commerce">Commerce</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <Label htmlFor="year">Year</Label>
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="">
                            <SelectValue placeholder="Select your year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Year</SelectLabel>
                              <SelectItem value="FY">First</SelectItem>
                              <SelectItem value="SY">Second</SelectItem>
                              <SelectItem value="TY">Third</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
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
                  {isLoading ? "Loading..." : "Submit"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>

        <CardDescription className="text-center">
          Already have an account?{" "}
          <Link href="/" className="text-red-500">
            Sign in
          </Link>
        </CardDescription>
      </Card>
    </main>
  );
}
