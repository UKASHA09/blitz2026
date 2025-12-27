import styles from '/styles/Header.module.css'
import Image from 'next/image'
import HButtons from './HButtons'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Header = () => {
    useEffect(() => {
        AOS.init({
            // duration : 5000
        })
    }, [])
    return (
        <>
            <div className={styles.hbody} id="Header">
                <div
                    className={styles.heroWrap}
                    data-aos="fade-down"
                    data-aos-duration="1500"
                >
                    <Image
                        src="/png/blitzhero.png"
                        alt="Blitz hero"
                        width={640}
                        height={320}
                        className={styles.heroImage}
                    />
                </div>

                <p
                    className={styles.heading}
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-anchor-placement="top-bottom"
                >
                    <span>BLITZ 2026</span>{' '}
                    <span className={styles.maintxt}>MULTIVERSE MAYHEM</span>
                </p>
                <p
                    className={styles.desciption}
                    data-aos="zoom-in"
                    data-aos-duration="2500"
                >
                    <span className={styles.subtext}>
                        Welcome to Blitz 2026, APCCE&apos;s own fest organized by 
                        department of BSC IT
                    </span>
                    <span>
                        Join us in this 3 day extravaganza
                        <br />
                        that&apos;s bound to fire up your neurons and spark your
                        creative flair!
                    </span>
                </p>
                <HButtons />
            </div>
        </>
    )
}

export default Header
