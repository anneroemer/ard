"use client";
import { useEffect, useState, useCallback, Suspense } from "react";
import styles from "./Search.module.scss";
import axios from "axios";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { IoArrowForwardSharp } from "react-icons/io5";
import Art from "./Art";
import Card from "./Card";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [image, setImage] = useState();
  const [artworks, setArtworks] = useState();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name, value) => {
      // console.log("Query", name, value);
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      router.push(pathname + "?" + params);
      return params.toString();
    },
    [searchParams, pathname, router]
  );
  const fetchQueryResults = (q) => {
    setQuery(q);
    if (q.length) {
      createQueryString("q", q);
      axios(`https://api.artic.edu/api/v1/artworks/search?q=${q}&size=20&fields=id,title,thumbnail,image_id,artist_title`, {}).then((result) => {
        // console.log(result.data.data);
        setResults(result.data.data);
      });
    } else {
      setResults([]);
    }
  };

  const onChange = (e) => {
    const query = e.target.value;
    if (query) {
      fetchQueryResults(query);
    } else {
      setQuery("");
      setResults([]);
      router.push(pathname);
    }
  };

  useEffect(() => {
    axios(`https://api.artic.edu/api/v1/artworks?limit=3`, {}).then((result) => {
      setImage(result.data.data);
      console.log("Art:", result.data.data);
    });
  }, []);

  useEffect(() => {
    const hasQuery = searchParams.get("q");
    if (hasQuery) {
      fetchQueryResults(hasQuery);
    }
    // console.log("search", searchParams.get("q"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return image ? (
    <div
      className={styles.search}
      style={{
        width: "100%",
        height: "100dvh",
        background: `hsl(${image[2].color.h} ${image[2].color.s} ${image[2].color.l} )`,
        // backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image[0]?.thumbnail?.lqip})`,
        // backgroundPosition: "left center",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
      }}
    >
      <h1 className={styles.searchTitle}>more art</h1>
      <div className={styles.search__header}>
        <div className={styles.searchInputField__container}>
          <Suspense>
            <input type="search" name="search" id="search" placeholder="search here..." className={styles.searchInputField} onChange={onChange} value={query} />
          </Suspense>
        </div>
      </div>
      <div className={styles.searchResult__container}>
        <ul className={styles.searchResults__list}>
          {results?.map((result, index) => (
            <li className={styles.searchResult__listItem} key={index}>
              <Card artwork={result} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : null;
};

export default Search;
