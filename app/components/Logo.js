"use client";
import styles from "./Logo.module.scss";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link as={`/`} rel="preload" passHref={true} href={`/`} className={styles.logo} prefetch={true} scroll>
      <Image src={`./ard-logo-light.png`} width={50} height={50} alt="ard logo" />
    </Link>
  );
};

export default Logo;
