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
import logo from '../../public/footerimage.png'
const Footer = () => {
    function love() {
        alert("With ❤️💜💛, We present to you... BLITZ!")
    }
    return (
        <div className={styles.footer}>
            <div className={styles.footerUpper}>
                <div className={styles.logo}>
                    <Image src={logo} alt="Designed By Ukasha" priority={true} />
                </div>
                <div className={styles.icons}>
                    <ul>
                        <li>
                            <Link
                                href="mailto:blitzforum20@gmail.com"
                                passHref={true}
                            >
                                <FaEnvelope />
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                href="https://www.facebook.com/"
                                passHref={true}
                            >
                                <a target="_blank">
                                    <FaFacebookSquare />
                                </a>
                            </Link>
                        </li> */}
                        <li>
                            <Link
                                href="https://www.instagram.com/blitzunleashed"
                                passHref={true}
                            >
                                <a target="_blank">
                                    <FaInstagram />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://chat.whatsapp.com/IthIj4yfl1U8v2o8EWSq82"
                                passHref={true}
                            >
                                <a target="_blank">
                                    <SiWhatsapp />
                                </a>
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                href="https://www.youtube.com/channel/"
                                passHref={true}
                            >
                                <a target="_blank">
                                    <FaYoutube />
                                </a>
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
            <div className={styles.footerLower}>
                <span onClick={love} className={styles.heart}>Made with ❤️ by Ukasha Siddiqui, FY-BSCIT, APCCE</span>
            </div>
        </div>
    )
}

export default Footer
