import styles from "../styles/Footer.module.css"

const Footer=()=>{
    return(
        <>
        <div className={styles.footer}>
            <ul className={styles.list}>
                <li>Careers</li>
                <li>Terms & conditions</li>
                <li>About</li>
                <li>Services</li>
            </ul>
            <ul className={styles.list}>
                <li>About</li>
                <li>Services</li>
                <li>Careers</li>
                <li>Terms & conditions</li>
            </ul>
            <ul className={styles.list}>
                <li>Terms & conditions</li>
                <li>About</li>
                <li>Services</li>
                <li>Careers</li>
            </ul>
        </div>
        </>
    )
}
export default Footer;