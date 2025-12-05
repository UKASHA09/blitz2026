import styles from '../../styles/attendees.module.css'

const Attendes = () => {
    return (
        <div className={styles.back}>
            <div className={styles.inner1}>
                <h1 className={styles.h1}>
                    Blitz 2K26 — Step Into the Multiverse
                </h1>
            </div>
            <div className={styles.grid}>
                <div className={styles.text}>
                    <h4 className={styles.h4}>The Sports Universe — Realm of Strength & Strategy</h4>
                    <p className={styles.bl}>
                        Enter the universe where muscles, speed, and teamwork rewrite destiny.
                        Face off in alternate dimensions of Cricket, Football, Powerlifting, Push-Up Challenge, Carrom, and the ultimate cosmic clash — Tug of War.
                        In this realm, there are no spectators—only warriors chosen to rise.
                    </p>
                </div>
                <div data-aos="fade-left" className={styles.img}>
                    <img
                        data-aos="rotate-c"
                        src="https://res.cloudinary.com/dlu72yo9b/image/upload/v1632664486/DSC_0838_2_zxyp2n.jpg"
                        className={styles.hi}
                    />
                </div>

                <div className={styles.text}>
                    <h4 className={styles.h4}>TechVerse — Where Minds Bend Reality</h4>
                    <p className={styles.bl}>
                        A universe powered by logic, creativity, and chaos.
                        Decode anomalies in Blind Coding, battle ideas in Debate, outrun AI in Keystreak, and outsmart everyone in the Quiz Rift.
                        Artists shape new realities in ArtWall, leaving their mark across dimensions.
                        Welcome to the domain of thinkers, creators, and innovators.
                    </p>
                </div>
                <div data-aos="fade-left" className={styles.img}>
                    <img
                        data-aos="rotate-c"
                        src="https://res.cloudinary.com/dlu72yo9b/image/upload/v1632664486/DSC02855_1_x0oa32.jpg"
                        className={styles.hi2}
                    />
                </div>

                <div className={styles.text}>
                    <h4 className={styles.h4}>The Nexus — Carnival of Infinite Worlds</h4>
                    <p className={styles.bl}>
                        Step into the cosmic convergence where thrill meets fun.
                        From the vibrant pathways of the Fun Fair to high-stakes digital battles in BGMI and PES, this is the hub where all universes collide.
                        Only one truth echoes through the multiverse: legends are built here.
                    </p>
                </div>
                <div data-aos="fade-left" className={styles.img}>
                    <img
                        data-aos="rotate-c"
                        src="https://res.cloudinary.com/dlu72yo9b/image/upload/v1632664485/DSC_0277_1_tdbkek_1_q1hcom.jpg"
                        className={styles.hi3}
                    />
                </div>
            </div>
        </div>
    )
}

export default Attendes
