import HeroElements from "../basis/heroElements";
import NavBar from "../basis/navBar";
import styles from "../../styles/heroSection.module.css";

export default function HeroSection() {
    return (
        <>
            <div className={styles.hero}>
                <NavBar />
                <HeroElements />
            </div>
        </>
    )
}