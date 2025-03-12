import { Fragment } from "react";
import styles from "./components/Artworks.module.scss";
import Card from "./components/Card";

async function getArtworks() {
  const res = await fetch(`https://api.artic.edu/api/v1/artworks?limit=100`);
  const artworks = await res.json();
  console.log("art", artworks);
  return artworks.data;
}

// <link rel="stylesheet" href="https://use.typekit.net/vjp3tgn.css">

export const viewport = {
  themeColor: "#938d85",
  styles: "https://use.typekit.net/vjp3tgn.css",
};

export default async function Index() {
  const artworks = await getArtworks();

  return (
    <ul className="list">
      {artworks.map((artwork, index) => (
        <Fragment key={index}>
          {artwork?.image_id ? (
            <li className={styles.listItem}>
              <Card artwork={artwork} />
            </li>
          ) : null}
        </Fragment>
      ))}
    </ul>
  );
}
