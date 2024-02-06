
"use client";


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
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
} from "@/components/ui/select"

import { Button } from "@/components/ui/button";


// import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";

import { data, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function Forming() {

    const formSchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(8),
        gender: z.string(),
    });

    const form = useForm(
        { resolver: zodResolver(formSchema) }
    )

    const onSubmit = (data) => {
        console.log(data);
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
                        <form onSubmit={form.handleSubmit(onSubmit)}>
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
                                                    {...field}
                                                // value={name}
                                                // onChange={(e) => setName(e.target.value)}
                                                />

                                            </FormControl>
                                            <FormDescription />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                >
                                </FormField>

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
                                                    {...field}
                                                // value={name}
                                                // onChange={(e) => setName(e.target.value)}
                                                />
                                            </FormControl>
                                            <FormDescription />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                >
                                </FormField>


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
                                                    {...field}
                                                // value={name}
                                                // onChange={(e) => setName(e.target.value)}
                                                />
                                            </FormControl>
                                            <FormDescription />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                >
                                </FormField>

                                <FormField
                                    control={form.control}
                                    name="gender"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                <Label htmlFor="gender">Gender</Label>
                                            </FormLabel>

                                            <FormControl>
                                                <Select onValueChange={field.onChange} >
                                                    <SelectTrigger className="">
                                                        <SelectValue
                                                            // value={gender}
                                                            // onChange={(e) => setGender(e.target.value)}
                                                            placeholder="Select your gender" />
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
                                >
                                </FormField>


                                <Button
                                    variant="destructive"
                                    // onClick={handleSubmit}
                                    type="submit"
                                >
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
