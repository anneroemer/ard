"use client";
import { useState, useEffect, useContext, Suspense } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import styles from "../components/Artwork.module.scss";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  console.log("ID", id);
  // const router = useRouter();
  // const { slug } = use(params);
  //   const { color } = useContext(ColorContext);
  const [artwork, setArtwork] = useState();
  const [srcAttr, setScrAttr] = useState();
  //   console.log("Color:", color);
  //   console.log("Param:", slug);

  useEffect(() => {
    async function generateMetadata() {
      if (id) {
        const res = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
        const artwork = await res.json();
        console.log("Post:", artwork);
        return {
          title: `${artwork.data.department_title} - My Blog`,
          description: artwork.data.department_title,
        };
      }
    }
    generateMetadata();
  }, [id]);

  useEffect(() => {
    if (id) {
      axios(`https://api.artic.edu/api/v1/artworks/${id}`, {}).then((result) => {
        // console.log(result.data.data);
        setArtwork(result.data.data);
        setScrAttr(`https://www.artic.edu/iiif/2/${artwork?.image_id}/full/843,/0/default.jpg`);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Suspense>
      <div className={styles.slug}>
        <div className={styles.header}>
          <div className={styles.imgContainer__button} onClick={() => router.back()}>
            <IoArrowBackSharp className={styles.arrow} />
          </div>
          <div className={styles.imgContainer}>
            {artwork ? (
              <Image
                src={srcAttr}
                alt={artwork?.artist_title ? artwork?.artist_title : "title"}
                width={400}
                height={400}
                className={styles.imgContainer__img}
                priority={true}
                placeholder={artwork.thumbnail.lqip} // 'blur'
                onError={(e) => setScrAttr(`https://www.artic.edu/iiif/2/${artwork?.image_id}/full/400,/0/default.jpg`)}
              />
            ) : (
              <div></div>
            )}
          </div>
        </div>
        {artwork ? (
          <>
            <section className={styles.artworkMainText}>
              <h1 className={styles.artworkMainText__title}>{artwork?.title}</h1>
              <h3>{artwork?.artist_title ? artwork?.artist_title : "unknown"}</h3>
              <div className={styles.divider}></div>
              <p>{artwork?.classification_title ? artwork?.classification_title : null}</p>
              {artwork?.style_title ? <p className={styles.artworkSecondaryText__style}>Style: {artwork?.style_title}</p> : null}
              {artwork?.place_of_origin ? <p className={styles.artworkSecondaryText__origin}>Place of origin: {artwork?.place_of_origin}</p> : null}
              <div className={styles.divider}></div>
            </section>
            <section className={styles.artworkSecondaryText}>
              <p>{artwork?.thumbnail?.alt_text ? artwork?.thumbnail?.alt_text : null}</p>
              {artwork?.provenance_text ? <div className={styles.divider}></div> : null}
              {artwork?.provenance_text ? <p className={styles.artworkSecondaryText__provenance}>{artwork?.provenance_text}</p> : null}
            </section>
            <section className={styles.artwork__tags}>
              {artwork?.term_titles?.map((tag, index) => (
                <Link passHref href={`/search?q=${tag}`} key={index} className={styles.artwork__tag} prefetch={true}>
                  <span>{tag}</span>
                </Link>
              ))}
            </section>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </Suspense>
  );
}
