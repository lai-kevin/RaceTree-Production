"use client"

import { useSignUp } from "@clerk/nextjs";
import SignUpForm from "@/src/components/fre/sign-up";
import Fre from "@/src/components/layout/fre";
import NavBar from "@/src/components/global/navbar";

export default function SignUp() {
  const { isLoaded, signUp } = useSignUp();

  if (!isLoaded) {
    // Handle loading state
    return null;
  }

  return (
    <Fre>
        <NavBar/>
        <SignUpForm/>
    </Fre>
  )
}
