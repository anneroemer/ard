"use client";
import { usePathname } from "next/navigation";
import Artwork from "./components/Artwork";

export default function NotFound() {
  const pathname = usePathname();
  //   console.log("not found");

  if (pathname.includes("/artwork/")) {
    return <Artwork />;
  }
}
