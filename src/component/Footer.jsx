import styles from "../styles/Footer.module.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import cobraKaiImg from "../assets/Cobra_Kai_logo.webp"


const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year dynamically

    return (
        <>
            <div className={styles["style-two"]}> </div>
            <div className={styles.footerContainer}>
                <div>
                    <img src={cobraKaiImg} alt="Cobra kai Logo" className={styles.logo} />
                </div>
                <div>
                    <div className={styles.footerLinks}>
                        <a href="/privacy">Contact Us</a>
                        <a href="/terms">Terms &amp; Conditions</a>
                        <a href="/privacy">Privacy Policy</a>
                    </div>
                    <div className={styles.socialIcons}>
                        <a href="https://www.facebook.com"><FaFacebook /></a>
                        <a href="https://www.twitter.com"><FaTwitter /></a>
                        <a href="https://www.instagram.com"><FaInstagram /></a>
                    </div>
                    <p>&copy; {currentYear} Cobra Kai</p>
                </div>
            </div>
        </>
    );
}

export default Footer;