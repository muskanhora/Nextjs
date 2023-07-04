import Link from "next/link";
import styles from '../styles/Navbar.module.css';

const Navbar=()=>{
    return(
        <>
      <div className={styles.navbar}>
        <ul className={styles.links}>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
        </ul>
      </div>
        </>
    )
}

export default Navbar;