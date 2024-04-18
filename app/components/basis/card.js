import styles from "../../styles/card.module.css";
import Image from "next/image";
import Link from "next/link";
import salah from "../../../public/liverpool.jpg";

export default function Card({ link}) {
    return (
        <>
            <div className={styles.cardElement}>
                <div className={styles.cardElementContent}>
                    <div className={styles.cardBody}>
                        <Image 
                            src={link.imageReference} 
                            width={307} 
                            height={201} 
                            alt="UEFA Champions League" 
                            style={{
                                borderRadius: '8px',
                                objectFit: 'cover'
                            }}
                        />
                        <p>{link.title}</p>
                    </div>
                    <div className={styles.cardFooter}>
                        <button><Link legacyBehavior href={link.url}><a style={{textDecoration: "none", fontFamily: "grifter", color: "#000" }}>Go to the link</a></Link></button>
                        <span>{link.hour} (GMT + 1)</span>
                    </div>
                </div>
            </div>
        </>
    )
}