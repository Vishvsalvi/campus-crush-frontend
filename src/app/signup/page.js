"use client"
import { useState } from "react"; // Keep useState as required
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

  const onSubmit = (e) => {
    e.preventDefault();
    const values = form.getValues();
    console.log(values);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Card className="mt-20 mx-5">
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
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="">
                            <SelectValue placeholder="Select your gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Gender</SelectLabel>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
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
                            <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className="">
                                <SelectValue placeholder="Select your stream" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Stream</SelectLabel>
                                <SelectItem value="science">Science</SelectItem>
                                <SelectItem value="commerce">Commerce</SelectItem>
                                <SelectItem value="arts">Arts</SelectItem>
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
                            <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className="">
                                <SelectValue placeholder="Select your year" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Year</SelectLabel>
                                <SelectItem value="first">First</SelectItem>
                                <SelectItem value="second">Second</SelectItem>
                                <SelectItem value="third">Third</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                            </Select>
                        </FormControl>
                        <FormDescription />
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                <Button variant="destructive" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
