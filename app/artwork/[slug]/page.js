"use client";
import { Suspense } from "react";
import Artwork from "../../components/Artwork";

// export async function generateStaticParams() {
//   const res = await fetch(`https://api.artic.edu/api/v1/artworks?limit=40`);
//   const artworks = await res.json();
//   console.log("Artworks:", artworks);
//   return artworks.map((art) => ({
//     slug: art.slug,
//   }));
// }

export default function Page({ params }) {
  //   const { slug } = await params;
  return (
    <Suspense fallback={<div>loading</div>}>
      <Artwork params={params} />
    </Suspense>
  );
}
