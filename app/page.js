import { IoArrowForwardSharp } from "react-icons/io5";
import styles from "./components/Artworks.module.scss";
import Art from "./components/Art";
import Link from "next/link";

async function getArtworks() {
  const res = await fetch(`https://api.artic.edu/api/v1/artworks?limit=60`);
  const artworks = await res.json();
  console.log("art", artworks);
  return artworks.data;
}

export default async function Index() {
  const artworks = await getArtworks();

  return (
    <ul className="list">
      {artworks.map((artwork, index) => (
        <li key={index} className={styles.listItem}>
          <Link passHref={true} href={`/artwork/${artwork.id}`} className={styles.listItem__link} scroll>
            <span className={styles.listItem__linkAnchor}>
              <div className={styles.listItem__textBox}>
                <h2 className={styles.listItem__title}>{artwork.title}</h2>
                <p className={styles.listItem__artist}>{artwork.artist_title ? artwork.artist_title : "unknown"}</p>
                <div className={styles.listItem__underline}></div>
              </div>
              <IoArrowForwardSharp className={styles.listItem__arrow} />
              <div className={styles.listItem__imgContainer}>
                <Art props={{ title: artwork.artist_title, id: artwork?.image_id }} />
              </div>
              <div className={styles.overlay}></div>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
