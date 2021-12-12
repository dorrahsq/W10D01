import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

function Nav() {
  return (
    <ul className={styles.ull}>
      <li  className={styles.lii}  >
        <Image className={styles.imgg} src="/favicon.ico" width={30} height={30} />
      </li>
      <li  className={styles.lii}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li  className={styles.lii}>
        <Link href="/About">
          <a>About Us</a>
        </Link>
      </li>
      <li  className={styles.lii}>
        <Link href="/Post">
          <a> Posts </a>
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
