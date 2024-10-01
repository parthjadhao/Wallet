import Image from "next/image";
import { Hero } from "./component/Hero";

export default function Home() {
  return (
    // step : 2
    // render hero page if seed is not created
    // render password page if seed is rendered
    <>
      <Hero></Hero>
    </>
  );
}
