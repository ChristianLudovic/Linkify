import styles from "../../styles/main.module.css";

export default function MainSection() {
    return (
        <>
            <div className={styles.mainSection}>
                <div className={styles.mainSectionContent}>
                    
                        <div className={styles.card}>
                            <div className={styles.cardLeft}>

                            </div>
                            <div className={styles.cardRight}>
                                <h2>Un titre ici</h2>
                                <p>le liens vers les cannaux telegram</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardLeft}>

                            </div>
                            <div className={styles.cardRight}>
                                <h2>Un titre ici</h2>
                                <p>le liens vers les cannaux telegram</p>
                            </div>
                        </div>
                    
                </div>
            </div>
        </>
    )
}