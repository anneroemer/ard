import { Suspense } from "react";
import Artwork from "../../components/Artwork";
import path from "path";

// export async function generateStaticParams() {
//   const artworks = await fetch("https://api.artic.edu/api/v1/artworks").then((res) => res.json());
//   console.log("Artworks:", artworks.data);
//   if (!artworks.data || artworks.data.length === 0) {
//     return { slug: "not-found" };
//   }
//   return artworks.data.map((artwork) => ({
//     slug: `${artwork.id}`,
//   }));
// }

export default async function Page({ params }) {
  // const { slug } = await params;

  return (
    <Suspense fallback={<div>loading</div>}>
      <Artwork params={params} />
    </Suspense>
  );
}
