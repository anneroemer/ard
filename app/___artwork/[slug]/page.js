import { Suspense } from "react";
import Artwork from "../../components/Artwork";

// export const dynamicParams = true;
// export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const artworks = await fetch("https://api.artic.edu/api/v1/artworks?limit=60").then((res) => res.json());
  console.log("Artworks:", artworks.data);
  if (!artworks.data || artworks.data.length === 0) {
    return "not-found";
  }
  return artworks.data.map((artwork) => ({
    slug: `${artwork.id}`,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  console.log("Params", await params);
  const res = await fetch(`https://api.artic.edu/api/v1/artworks/${slug}`);
  const item = await res.json();
  console.log("Item", item);
  return (
    <Suspense fallback={<div>loading</div>}>
      {/* <Artwork params={params} /> */}
      <div>{item.data.title}</div>
    </Suspense>
  );
}
