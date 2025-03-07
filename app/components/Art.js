"use client";
import { useEffect, useState } from "react";
import styles from "./Artworks.module.scss";
import axios from "axios";
import Image from "next/image";

const Art = ({ props }) => {
  const { id, title } = props;
  const [srcurl, setSrcurl] = useState();
  console.log("id", id);
  useEffect(() => {
    axios(`https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`, {}).then((result) => {
      if (result.status === 200) {
        setSrcurl(true);
      } else {
        setSrcurl(false);
      }
    });
  }, [id]);

  return srcurl ? (
    <Image
      src={`https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`}
      alt={title ? title : "title"}
      width={400}
      height={400}
      placeholder="blur"
      priority={true}
      blurDataURL={`https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`}
      // layout="responsive"
      // layout="fill"
      className={styles.listItem__img}
    />
  ) : (
    <div>
      {" "}
      <Image
        src={`https://www.artic.edu/iiif/2/${id}/full/200,/0/default.jpg`}
        alt={title ? title : "title"}
        width={400}
        height={400}
        placeholder="blur"
        priority={true}
        blurDataURL={`https://www.artic.edu/iiif/2/${id}/full/200,/0/default.jpg`}
        // layout="responsive"
        // layout="fill"
        className={styles.listItem__img}
      />
    </div>
  );
};

export default Art;
