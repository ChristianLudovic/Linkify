import styles from "../../styles/main.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MainSection() {

    const [links, setLinks] = useState([]);

    useEffect(() => {   
        const fetchLinks = async () => {
            const res = await fetch("/api/link");
            const data = await res.json();
            setLinks(data);
        }
        fetchLinks();
    }, []);

    console.log(links);

    return (
        <>
            <div className={styles.mainSection} id="mainSection">
                <div className={styles.mainSectionContent} id="mainSectionContent">
                    {links.map((link, index) => ( link.title !== "" &&
                        <div className={styles.card} id="card" key={index}>
                            <div className={styles.cardLeft}>
                                <Image 
                                    src={link.imageReference} 
                                    alt="telegram" 
                                    width={48} 
                                    height={48} 
                                    style={{ 
                                        borderRadius: '50%', 
                                        objectFit: "cover",
                                        objectPosition: "center",
                                        borderWidth: "2px",
                                        borderStyle: "solid",
                                        borderImage: "linear(to bottom, #FFD700, #FFA500)"
                                    }}
                                />
                            </div>
                            <div className={styles.cardRight} id="cardRight">
                                <h2>{link.title}</h2>
                                <Link legacyBehavior href={link.url} passHref><a  className={styles.gameLink}>{link.url}</a></Link>
                            </div>
                        </div>
                        ))
                    }
                    
                </div>
            </div>
        </>
    )
}