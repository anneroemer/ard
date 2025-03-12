"use client";
import { IoArrowForwardSharp } from "react-icons/io5";
import styles from "./Card.module.scss";
import Link from "next/link";
import Art from "./Art";

const Card = ({ artwork }) => {
  //   console.log("Artwork", artwork);
  return (
    <Link as={`/artwork?id=${artwork.id}`} rel="preload" passHref={true} href={`/artwork/${artwork.id}`} className={styles.listItem__link} prefetch={true} scroll>
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
  );
};

export default Card;
