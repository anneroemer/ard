import styles from "./components/Artworks.module.scss";
import Card from "./components/Card";

async function getArtworks() {
  const res = await fetch(`https://api.artic.edu/api/v1/artworks?limit=100`);
  const artworks = await res.json();
  // console.log("art", artworks);
  return artworks.data;
}

export default async function Index() {
  const artworks = await getArtworks();

  return (
    <ul className="list">
      {artworks.map((artwork, index) => (
        <li key={index} className={styles.listItem}>
          <Card artwork={artwork} />
        </li>
      ))}
    </ul>
  );
}
