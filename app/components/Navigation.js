"use client";
import Link from "next/link";
import styles from "./Navigation.module.scss";
import { useState } from "react";
import { motion } from "motion/react";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  const variants = {
    open: { x: -150 },
    closed: { x: -10 },
  };

  const variants2 = {
    open: { display: "block", opacity: 10 },
    closed: { display: "none", opacity: 0 },
  };

  return (
    <motion.div>
      <motion.button
        className={styles.nav__btn}
        onClick={() => {
          setIsVisible(!isVisible);
        }}
        animate={isVisible ? "open" : "closed"}
        variants={variants}
      >
        art
      </motion.button>
      <nav className={styles.nav}>
        {isVisible ? (
          <Link passHref={true} href="/" scroll>
            <span className={[styles.nav__home]}>
              <p>home</p>
            </span>
          </Link>
        ) : null}
        {isVisible ? (
          <Link passHref={true} href="/search" scroll>
            <span className={styles.nav__search}>
              <p>search</p>
            </span>
          </Link>
        ) : null}
      </nav>
      <div
        animate={isVisible ? "open" : "closed"}
        variants={variants2}
        className={isVisible ? "lightbox" : "hidden"}
        onClick={() => {
          //console.log("Lightbox clicked")
          setIsVisible(!isVisible);
        }}
      ></div>
    </motion.div>
  );
};

export default Navigation;
