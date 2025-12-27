import styles from '../../styles/attendees.module.css'

const Attendes = () => {
    return (
        <div className={styles.back}>
            <div className={styles.inner1}>
                <h1 className={styles.h1}>
                    Blitz 2026 — Step Into the Multiverse
                </h1>
            </div>
            <div className={styles.grid}>
                <div className={styles.text}>
                    <h4 className={styles.h4}>COMBAT DIMENSION</h4>
                    <p className={styles.bl}>
                        Football tournament awaits you in the Combat Dimension.
                        Step into this arena where agility, strategy, and teamwork collide.
                        Showcase your skills on the field and lead your team to victory in this thrilling sporting event.
                    </p>
                </div>
                <div data-aos="fade-left" className={styles.img}>
                    <img
                        data-aos="rotate-c"
                        src="https://res.cloudinary.com/deve5qqso/image/upload/v1764918941/cricket2_inbbjm.jpg"
                        className={styles.hi}
                    />
                </div>

                <div className={styles.text}>
                    <h4 className={styles.h4}>QUANTUM CHAMBER</h4>
                    <p className={styles.bl}>
                        Blind Coding, Keystreak, Quiz, Artwars and debate events await you in the Quantum Chamber.
                        Engage in battles of intellect and creativity, where every challenge pushes the boundaries of your mind.
                        Enter this dimension to test your skills and emerge victorious in a realm where knowledge reigns supreme.
                    </p>
                </div>
                <div data-aos="fade-left" className={styles.img}>
                    <img
                        data-aos="rotate-c"
                        src="https://res.cloudinary.com/deve5qqso/image/upload/v1764923409/1000044666_n9jbb8.jpg"
                        className={styles.hi2}
                    />
                </div>

                <div className={styles.text}>
                    <h4 className={styles.h4}>TACTICAL REALM</h4>
                    <p className={styles.bl}>
                        Step into a universe where strategy, precision, and reflexes dictate survival.
                        BGMI Tournament and PES Tournament events challenge your mind and skills.
                        Navigate this realm where every decision could lead to triumph or defeat.
                    </p>
                </div>
                <div data-aos="fade-left" className={styles.img}>
                    <img
                        data-aos="rotate-c"
                        src="https://res.cloudinary.com/deve5qqso/image/upload/v1764923409/1000044666_n9jbb8.jpg"
                        className={styles.hi2}
                    />
                </div>

                <div className={styles.text}>
                    <h4 className={styles.h4}>MUSCLE MAYHEM</h4>
                    <p className={styles.bl}>
                        Step into the Muscle Mayhem universe, where strength meets strategy in an epic showdown of physical prowess.
                        Compete in Powerlifting, Push-Up Challenges, and dominate the Game Zone.
                        This is where the strongest rise, and legends are forged in the heat of battle.
                    </p>
                </div>
                <div data-aos="fade-left" className={styles.img}>
                    <img
                        data-aos="rotate-c"
                        src="https://res.cloudinary.com/deve5qqso/image/upload/v1764923410/1000044663_urzvjk.webp"
                        className={styles.hi3}
                    />
                </div>
            </div>
        </div>
    )
}

export default Attendes
