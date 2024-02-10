"use client"
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


import { useRouter } from "next/navigation";
import axios from "axios";


export default function Home() {

const [days, setDays] = useState(0);
const [hours, setHours] = useState(0);
const [minutes, setMinutes] = useState(0);
const [seconds, setSeconds] = useState(0);

const [isMatched, setIsMatched] = useState("false")
const [token, setToken] = useState("")
const router = useRouter();


const updateClock = () => {
  const now = new Date().getTime();
  const valentinesDay = new Date(new Date().getFullYear(), 1, 14).getTime(); // Valentine's Day is on February 14th
  const distance = valentinesDay - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  setDays(days);
  setHours(hours);
  setMinutes(minutes);
  setSeconds(seconds);
};



useEffect(() => {
  const timer = setInterval(updateClock, 1000);
  return () => clearInterval(timer);
}, []); // Run only once on component mount

useEffect(() => {
  updateClock(); // Initial call to update clock
}, []); // Run only once on component mount


useEffect(() => {
  const token = localStorage.getItem("token");
  if(!token){
    router.push("/");
  }
}, [])

const handleMatch = async () => {
  try {
    const accessToken = localStorage.getItem("token"); 
    const studentId = localStorage.getItem("studentId");

    const headers = {
      'access_token': `Bearer ${accessToken}`
    };

    const config = {
      headers,
      withCredentials: true
    };

    const response = await axios.post("http://localhost:5000/v1/match/make-match", studentId, config);

    if (response.status === 200) {
      localStorage.setItem("isMatched", "true");
      setIsMatched("true");
    }
  } catch (error) {
    console.log(error);
  }
};


useEffect(() => {
    const isMatched = localStorage.getItem("isMatched");
    if(isMatched === "true"){
      setIsMatched("true")
    } else {
      setIsMatched("false")
    }
}, [])


if(isMatched === "false"){
  return  ( 
    <div className="flex min-h-screen flex-col items-center pt-48 mx-5">
      <Alert>
  <AlertTitle>NOTE</AlertTitle>
  <AlertDescription>
    Upon clicking the button, you will be matched with a random person of opposite gender from the Thakur College. You will get an email with the details of your match on February 14th. Don't be absent for the date! 💌
  </AlertDescription>
</Alert>

  <Button
    onClick={handleMatch}
    className="mt-5"
  >
    Get a Match 💝
  </Button>
</div>)
} else  {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
     <div className=" h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16">
      <strong className=" text-center sm:block text-3xl font-extrabold sm:text-5xl"> Your blind date will be revealed in </strong>
        <div className="flex justify-center gap-3 sm:gap-8">
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-red-600 rounded-lg">
              <div className="relative h-[0.5rem] w-[0.5rem] sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-white">
                {days}
              </span>
              <div className="relative h-[0.5rem] w-[0.5rem] sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              {days == 1 ? "Day" : "Days"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-red-600 rounded-lg">
              <div className="relative h-[0.5rem] w-[0.5rem] sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-white">
                {hours}
              </span>
              <div className="relative h-[0.5rem] w-[0.5rem] sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center font-medium">
              {hours == 1 ? "Hour" : "Hours"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-red-600 rounded-lg">
              <div className="relative h-[0.5rem] w-[0.5rem] sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-white">
                {minutes}
              </span>
              <div className="relative h-[0.5rem] w-[0.5rem] sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              {minutes == 1 ? "Minute" : "Minutes"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-red-600 rounded-lg">
              <div className="relative h-[0.5rem] w-[0.5rem] sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-white">
                {seconds}
              </span>
              <div className="relative h-[0.5rem] w-[0.5rem] sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              {seconds == 1 ? "Second" : "Seconds"}
            </span>
          </div>
        </div>
 
      </div>
    </div>
    

    </main>
  );
}
}