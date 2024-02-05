"use client"
import './globals.css'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { Button } from "@/components/ui/button"

import { useState } from 'react'

export default function Home() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [year, setYear] = useState('')
  const [stream, setStream] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name
      , email
      , password
      , year
      , stream)
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Card className="mt-20 mx-5" >  
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold" >Welcome to Thakur College Exclusive Dating App 💖</CardTitle>
          <CardDescription className="text-center" >Enter your credentials to continue</CardDescription>
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
              <Label htmlFor="year">Year</Label>
              <Select
                id="year"
                name="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <SelectTrigger>
                  <SelectValue>{year}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="First Year">First Year</SelectItem>
                  <SelectItem value="Second Year">Second Year</SelectItem>
                  <SelectItem value="Third Year">Third Year</SelectItem>
                  <SelectItem value="Fourth Year">Fourth Year</SelectItem>
                </SelectContent>
              </Select>
              <Label htmlFor="stream">Stream</Label>
              <Select
                id="stream"
                name="stream"
                value={stream}
                onChange={(e) => setStream(e.target.value)}
              >
                <SelectTrigger>
                  <SelectValue>{stream}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Science">Science</SelectItem>
                  <SelectItem value="Commerce">Commerce</SelectItem>
                  <SelectItem value="Arts">Arts</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="destructive" onClick={handleSubmit} type="submit" >Submit</Button>
            </div>
         
          </form>

        </CardContent>


      </Card>
    </main>
  )
}
