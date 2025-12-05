import styles from '/styles/HButton.module.css'
import Link from 'next/link'
import { SiWhatsapp } from 'react-icons/si'     

const HButtons = () => {
    return (
        <div className={styles.buttons}>
            <Link href="/events">
                    <button className={styles.b1}>Register</button>
            </Link>
            <button className={styles.b2}>
                <Link href="https://chat.whatsapp.com/IthIj4yfl1U8v2o8EWSq82" target="_blank">
                    <a target="_blank">
                        <SiWhatsapp className={styles.faicon} />
                        <span> Join Whatsapp</span>
                    </a>
                </Link>
            </button>
        </div>
    )
}

export default HButtons
