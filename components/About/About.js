import { HButtonLight } from '@components/Accessories/button'
import { ImArrowUpRight2 } from 'react-icons/im'
import { useState } from 'react'
import styles from '../../styles/About.module.css'
import Button from './Button'
import { Date } from './Date'
import Timer from './Timer'

const About = () => {
    const [showTimer, setShowTimer] = useState(true)

    return (
        <div className={styles.container} id = 'AboutUS'>
            <div className={styles.title_container}>
                <h1 className={styles.title} >
                    What is <span>BLITZ&nbsp;?</span>
                </h1>

                <p className={styles.content}>
                    BLITZ is a four day long fest organized by the BSc IT
                    department of AP College of Commerce and Economics. It is a
                    platform for students to showcase their skills and compete with their peers in various events ranging from sports, art and design to technical competitions.
                    <br />
                    <br />
                    Just like last year, BLITZ 2026 promises to be an exhilarating experience filled with learning, fun, and networking opportunities. Whether you're a tech enthusiast, a sports lover, or someone who enjoys creative pursuits, there's something for everyone at BLITZ 2026. So gear up and get ready to unleash your potential at BLITZ 2026!

                </p>
                {/* <div className={styles.btn_container}>
                    <HButtonLight name="About Us" icon = {<ImArrowUpRight2/>}/>
                </div> */}
            </div>
            <div className={styles.date_container}>
                <div className={styles.left_date} >
                    <Date day="14" month="January" subtxt="th" />
                </div>
                <hr className={styles.line} />
                <div className={styles.right_date} >
                    <Date day="17" month="January" subtxt="st" />
                </div>
            </div>
            <br />
            <div className={styles.timer_container}>
                {showTimer ? (
                    <Timer setShowTimer={setShowTimer} />
                ) : (
                    <h1 className={styles.title}>
                        It&#39;s Show<span>time</span>
                    </h1>
                )}
            </div>
        </div>
    )
}

export default About