"use client";
import { useEffect, useState } from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import styles from "./Artworks.module.scss";
import Link from "next/link";
import axios from "axios";
import Art from "./Art";

const Artworks = () => {
  const [artworks, setArtworks] = useState();

  useEffect(() => {
    axios(`https://api.artic.edu/api/v1/artworks?limit=60`, {}).then((result) => {
      setArtworks(result.data.data);
      // console.log(result.data.data);
    });
    artworks?.forEach((a) => {
      console.log("A", a);
    });
  }, []);

  return (
    <ul className={styles.list}>
      {artworks?.map((artwork, index) => (
        <li key={index} className={styles.listItem}>
          <Link passHref={true} href={`/artwork/${artwork.id}`} className={styles.listItem__link} prefetch={true} scroll>
            <span className={styles.listItem__linkAnchor}>
              <div className={styles.listItem__textBox}>
                <h2 className={styles.listItem__title}>{artwork.title}</h2>
                <p className={styles.listItem__artist}>{artwork.artist_title ? artwork.artist_title : "unknown"}</p>
                <div className={styles.listItem__underline}></div>
              </div>
              <IoArrowForwardSharp className={styles.listItem__arrow} />
              <div className={styles.listItem__imgContainer}>
                <Art props={artwork} />
              </div>
              <div className={styles.overlay}></div>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Artworks;
