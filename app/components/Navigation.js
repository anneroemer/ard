"use client";
import styles from "./Navigation.module.scss";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import path from "path";

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [variant, setVariant] = useState(-90);

  const variants = {
    open: { x: variant },
    closed: { x: 0 },
  };

  const variants2 = {
    open: { display: "block", opacity: 10 },
    closed: { display: "none", opacity: 0 },
  };
  useEffect(() => {
    console.log(`Route changed to: ${pathname}`);
    if (pathname !== "/search" && pathname !== "/") {
      setVariant(-130);
    } else {
      setVariant(-70);
    }
    setIsVisible(false);
  }, [pathname]);

  return (
    <motion.div className={`${styles.nav__wrapper}`}>
      <motion.button
        className={styles.nav__toggleBtn}
        onClick={() => {
          setIsOpen(!isOpen);
          setIsVisible(!isVisible);
        }}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        art
      </motion.button>
      <nav className={styles.nav}>
        {isOpen && pathname !== "/" ? (
          <button
            type="button"
            className={`${styles.nav__btn}`}
            onClick={() => {
              router.push("/");
              console.log("Router", router);
              setIsOpen(!isOpen);
            }}
          >
            <p>home</p>
          </button>
        ) : null}
        {isOpen && pathname !== "/search" ? (
          <button
            type="button"
            className={`${styles.nav__btn}`}
            onClick={() => {
              router.push("/search");
              setIsOpen(!isOpen);
            }}
          >
            <p>search</p>
          </button>
        ) : null}
      </nav>
      <div
        animate={isVisible ? "open" : "closed"}
        variants={variants2}
        className={isVisible ? `${styles.lightbox}` : `${styles.hidden}`}
        onClick={() => {
          //console.log("Lightbox clicked")
          setIsOpen(false);
          setIsVisible(false);
        }}
      ></div>
    </motion.div>
  );
};

export default Navigation;
