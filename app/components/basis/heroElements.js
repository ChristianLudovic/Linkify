import styles from "../../styles/heroElements.module.css";
import Image from "next/image";
import championsLeague from "../../assets/logo/championsLeague.svg";
import ligue1 from "../../assets/logo/Ligue1.svg";
import premierLeague from "../../assets/logo/premierLeague.svg";
import europaLeague from "../../assets/logo/europaLeague.svg";

export default function HeroElements() {
    return (
        <>
            <div className={styles.heroElements}> 
                <div className={styles.heroElementsContent} id="heroElementsContent">
                    <div className={styles.heroElementsContentText} id="heroElementsContentText">
                        <h1>All your football channels are sourced here. Enjoy!</h1>
                        <p>Dive into the action with our streaming selection. All the matches. Just a click away</p>
                    </div>
                    <div className={styles.heroElementsCardSlider} id="heroElementsCardSlider">
                        <div className={styles.card1} id="card1">
                            <div className={styles.cardContent} id="cardContent">
                                <div className={styles.cardIcon}>
                                    <Image src={championsLeague} width={28} height={28} alt="UEFA Champions League" />
                                </div>
                                <h2>Champions League</h2>
                            </div>
                        </div>
                        <div className={styles.card2} id="card2">
                            <div className={styles.cardContent}>
                                <div className={styles.cardIcon}>
                                    <Image src={ligue1} width={28} height={28} alt="Ligue 1" />
                                </div>
                                <h2>Ligue 1</h2>
                            </div>
                        </div>
                        <div className={styles.card3} id="card3">
                            <div className={styles.cardContent}>
                                <div className={styles.cardIcon}>
                                    <Image src={premierLeague} width={28} height={28} alt="Premier League" />
                                </div>
                                <h2>Premier League</h2>
                            </div>
                        </div>
                        <div className={styles.card4} id="card4">
                            <div className={styles.cardContent}>
                                <div className={styles.cardIcon}>
                                    <Image src={europaLeague} width={28} height={28} alt="BundesLiga" />
                                </div>
                                <h2>Europa League</h2>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}