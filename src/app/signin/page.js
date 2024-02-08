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

import { useRouter } from "next/navigation";

export default function page() {

  const formSchema = z.object({
   
    email: z.string().email(),
    password: z.string().min(8),
    
  });

  
  const [initialValues, setInitialValues] = useState({
  
    email: "",
    password: "",
   
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues, // Set initial values in useForm
  });

  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    const values = form.getValues();
    console.log(values);
    router.push("/")
  };

  return (
    <div>  <main className="flex min-h-screen flex-col items-center justify-between ">
    <Card className="mt-20 mx-5">
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
    

              <Button variant="destructive" type="submit">
                Log in
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  </main></div>
  )
}