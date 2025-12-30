import Footer from '@components/Footer/Footer'
import Navbar from '@components/Nav/Navbar'
import Head from 'next/head'
import { Team } from '@components/Team/Team'
import styles from '../styles/Team.module.css'

const team = () => {
    return (
        <>
            <Head>
                <title>BLITZ 2026 Team </title>
                <meta
                    name="description"
                    content="BLITZ 2026 Team Members"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <Navbar />
                <Team />
            </div>
            {/* <Footer /> */}
            <div className="footerLowermain">
                <span onClick={love} className={styles.heart}>Developed by Ukasha Siddiqui, FY-BSCIT, APCCE</span>
            </div>
        </>
    )
}

export default team
