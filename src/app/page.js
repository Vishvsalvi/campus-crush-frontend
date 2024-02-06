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

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [year, setYear] = useState("");
  const [stream, setStream] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, year, stream);
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
          <form>
            <div className="flex flex-col space-y-4">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Label htmlFor="gender">Gender</Label>
              
              <Select>
      <SelectTrigger className="">
        <SelectValue
        value={gender}
        onChange={(e) => setGender(e.target.value)}
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
               
              

              <Button
                variant="destructive"
                onClick={handleSubmit}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
