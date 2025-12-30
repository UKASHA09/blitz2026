import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitter,
    FaEnvelope,
    FaTwitch,
    FaYoutube,
} from 'react-icons/fa'
import { SiWhatsapp } from 'react-icons/si'
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/footerlatest.png'
const Footer = () => {
    function love() {
        alert("With ❤️💜💛, We present to you... BLITZ! To contact me, please whatsapp at 8828 308 408")
    }
    return (
        <div className={styles.footer}>
            {/* cut from here */}
            <div className={styles.footerLower}>
                <span onClick={love} className={styles.heart}>Developed by Ukasha Siddiqui, FYIT, APCCE</span>
            </div>
        </div>
    )
}

export default Footer
