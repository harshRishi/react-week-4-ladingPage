import styles from "../styles/Navbar.module.css";
import companyLogo from "../assets/company-logo.png";

const Navbar = () => {
    return (
        <nav className={styles.navContainer}>
            <div className={styles.logoContainer}>
                <img src={companyLogo} alt="Company Logo" className={styles.logo} />
                <span className={styles.companyName}>Cobra Kai</span>
            </div>
            <ul className={styles.navList}>
                <li className={styles.navItem}><a href="#">Home</a></li>
                <li className={styles.navItem}><a href="#">About</a></li>
                <li className={styles.navItem}><a href="#">Services</a></li>
                <li className={styles.navItem}><a href="#">Contact</a></li>
            </ul>
            <div className={styles.authButtons}>
                <button className={styles.loginButton}>Login</button>
                <button className={styles.registerButton}>Register</button>
            </div>
        </nav>
    );
}

export default Navbar;
