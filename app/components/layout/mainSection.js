import styles from "../../styles/main.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "../basis/card";
import premierLeague from "../../assets/logo/premierLeague.svg";
import Ligue1 from "../../assets/logo/Ligue1.svg";
import championsLeague from "../../assets/logo/championsLeague.svg";
import laLiga from "../../assets/logo/laliga.png";
import europaLeague from "../../assets/logo/europaLeague.svg";
import errorImage from "../../assets/images/errorImage.svg";


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
                    <div className={styles.ligue}>
                        <div className={styles.championshipTitle}>
                            <Image src={premierLeague} width={28} height={28} alt="Premier League" />
                            <h2>Premier League</h2>  
                        </div>
                        
                        <div className={styles.championshipContent}>

                            {links.filter((link) => link.championShip === "Premier League").map((link) => 
                                (<Card key={link.id} link={link} />))
                            }
                            {links.filter((link) => link.championShip === "Premier League").length === 0 && 
                                <>
                                    <div className={styles.error}>
                                        <Image src={errorImage} />
                                        <p>sorry, no canal is currently broadcasting this championship matches, please come back later.</p>
                                    </div>
                                </>
                            }
                            
                        </div>
                    </div>
                    <div className={styles.ligue}>
                        <div className={styles.championshipTitle}>
                            <Image src={Ligue1} width={28} height={28} alt="Ligue" />
                            <h2>Ligue 1</h2>  
                        </div>
                        
                        <div className={styles.championshipContent}>

                            {links.filter((link) => link.championShip === "Ligue 1").map((link) => 
                                (<Card key={link.id} link={link} />))
                            }
                            {links.filter((link) => link.championShip === "Ligue 1").length === 0 && 
                                <>
                                    <div className={styles.error}>
                                        <Image src={errorImage} />
                                        <p>sorry, no canal is currently broadcasting this championship matches, please come back later.</p>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                    <div className={styles.ligue}>
                        <div className={styles.championshipTitle}>
                            <Image src={laLiga} width={28} height={28} alt="La Liga EA sport" />
                            <h2>La Liga</h2>  
                        </div>
                        
                        <div className={styles.championshipContent}>

                            {links.filter((link) => link.championShip === "Liga").map((link) => 
                                (<Card key={link.id} link={link} />))
                            }
                            {links.filter((link) => link.championShip === "Liga").length === 0 && 
                                <>
                                    <div className={styles.error}>
                                        <Image src={errorImage} />
                                        <p>sorry, no canal is currently broadcasting this championship matches, please come back later.</p>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                    <div className={styles.ligue}>
                        <div className={styles.championshipTitle}>
                            <Image src={championsLeague} width={28} height={28} alt="Champions League" />
                            <h2>Champions League</h2>  
                        </div>
                        
                        <div className={styles.championshipContent}>

                            {links.filter((link) => link.championShip === "Champions League").map((link) => 
                                (<Card key={link.id} link={link} />))
                            }
                            {links.filter((link) => link.championShip === "Champions League").length === 0 && 
                                <>
                                    <div className={styles.error}>
                                        <Image src={errorImage} />
                                        <p>sorry, no canal is currently broadcasting this championship matches, please come back later.</p>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                    <div className={styles.ligue}>
                        <div className={styles.championshipTitle}>
                            <Image src={europaLeague} width={28} height={28} alt="Europa League" />
                            <h2>Europa Ligue</h2>  
                        </div>
                        
                        <div className={styles.championshipContent}>

                            {links.filter((link) => link.championShip === "Europa League").map((link) => 
                                (<Card key={link.id} link={link} />))
                            }
                            {links.filter((link) => link.championShip === "Europa League").length === 0 && 
                                <>
                                    <div className={styles.error}>
                                        <Image src={errorImage} />
                                        <p>sorry, no canal is currently broadcasting this championship matches, please come back later.</p>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}