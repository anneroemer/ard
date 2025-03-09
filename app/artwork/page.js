import { Suspense } from "react";
import Artwork from "../components/Artwork";

export default function Page() {
  return (
    <Suspense>
      <Artwork />
    </Suspense>
  );
}
