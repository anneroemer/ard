"use client";
import { useEffect, useState } from "react";
import styles from "./Artworks.module.scss";
import axios from "axios";
import Image from "next/image";

const Art = ({ props }) => {
  const { id, title, thumbnail, image_id } = props;
  // console.log("Art", props);
  const [srcAttr, setSrcAttr] = useState(`https://www.artic.edu/iiif/2/${image_id}/full/200,/0/default.jpg`);
  useEffect(() => {
    if (image_id) {
      setSrcAttr(`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`);
    } else {
      setSrcAttr("./file.svg");
    }
  }, [image_id]);

  return (
    <Image
      src={srcAttr}
      alt={title ? title : "title"}
      width={400}
      height={400}
      priority={true}
      placeholder="blur" // 'blur'
      blurDataURL={
        thumbnail?.lqip
          ? thumbnail.lqip
          : "data:image/gif;base64,R0lGODlhBwAFAPUAAJBoMJFrMJlyNZtyNZ94NJVxO5VzPJV0PZp3O6F2M6V9Nah+MqB9P6J8QK6EM62BNKqCPbyPNbGHOLOJObaKOb+QOMKVN8KUO8WWOMWXOcKYO8SYOsiZOMqbOsidP7KKQLePRMGXQtmsQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAHAAUAAAYhQIRkoxF5GJDHwhHJhBoUQCBxARUqGAun8zEMCIqJ4BAEADs="
      }
      onError={(e) => {
        if (image_id) {
          setSrcAttr(`https://www.artic.edu/iiif/2/${image_id}/full/200,/0/default.jpg`);
        } else {
          setSrcAttr("./file.svg");
        }
      }}
      className={styles.listItem__img}
    />
  );
};

export default Art;
