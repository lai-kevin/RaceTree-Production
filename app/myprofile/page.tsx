"use client";
import { useUser } from "@clerk/nextjs";
import NavBar from "@/src/components/global/navbar";
import LandingScreen from "@/src/components/home/landing-screen";
export default function Profile() {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <div data-theme="retro">
      <NavBar />
      <main>
      </main>
    </div>
  );
}