"use client"
import Image from "next/image";
import { Hero } from "./component/Hero";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(()=>{
    if (localStorage.getItem("password") || localStorage.getItem("seed")) {
        router.push('/EnterPassword')
    }
  })
  return (
    <>
      <Hero></Hero>
    </>
  );
}