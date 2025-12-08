import styles from '../../styles/Card.module.css'
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
import classNames from 'classnames'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Card = (props) => {
    useEffect(() => {
        AOS.init({})
    }, [])

    const [img, setImg] = useState(props.image)

    return (
        <div
            className={styles.borderwrap}
            onMouseOver={() => setImg(props.gif)}
            onMouseOut={() => setImg(props.image)}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
        >
            <div className={styles.inner}></div>

            <div className={classNames(styles.wrapper, styles.active)}>
                <div className={styles.daycards}>

                    {/* IMAGE WRAPPER (FIXED) */}
                    <div className="imgWrapper">
                        {img && (
                            <Image
                                src={img}
                                alt="poster"
                                fill
                                className="imgs"
                            />
                        )}
                    </div>

                    {/* Inline CSS */}
                    <style jsx global>{`
                        .imgWrapper {
                            position: relative;
                            width: 250px;   /* desired width */
                            height: 300px;  /* desired height */
                            overflow: hidden;
                            border-radius: 8px;
                        }

                        .imgs {
                            object-fit: cover !important;
                            border-radius: 8px;
                        }
                    `}</style>

                    <div className={styles.content_container}>
                        <span className={styles.name}>{props.name}</span>
                    </div>

                    <div className={styles.social_container}>
                        {props.instagram !== '' && (
                            <a
                                href={props.instagram}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaInstagram />
                            </a>
                        )}

                        <a
                            href={props.linkedin}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin />
                        </a>

                        {props.twitter !== '' && (
                            <a
                                href={props.twitter}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaTwitter />
                            </a>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card
