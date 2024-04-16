import styles from "../../styles/heroElements.module.css";

import ButtonLarge from "./buttonLarge";

export default function HeroElements() {
    return (
        <>
            <div className={styles.heroElements}> 
                <div className={styles.heroElementsContent} id="heroElementsContent">
                        
                        <div className={styles.heroTitleAndSubTitle} id="heroTitleAndSubTitle">
                            <h1>All your football channels are sourced here. Enjoy!</h1>
                            <p>Dive into the action with our streaming selection. All the matches. Just a click away</p>
                        </div>
                        <ButtonLarge/>
                    
                </div>
            </div>
        </>
    )
}