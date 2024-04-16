import Link from "next/link";
import Image from "next/image";
import Button from "./button";
import logo from "../../assets/logo/logo.svg";
import styles from "../../styles/navBar.module.css";

export default function NavBar() {
    return (
        <>
            <div className={styles.navBar} id="navBar">
                <div className={styles.navBarContent} id="navBarContent">
                    <div className={styles.navBarLogo}>
                        <Link href="/">
                            <Image src={logo} alt="logo" width={100} height={30} />
                        </Link>
                    </div>
                    <div className={styles.navBarLinks} id="navBarLinks">
                        <Link legacyBehavior href="/"><a className={styles.navLink}>About us</a></Link>
                        <Link legacyBehavior href="/"><a className={styles.navLink}>GitHub</a></Link>
                    </div>
                    <div className={styles.navBarButton}>
                        <Button />
                    </div>
                </div>
            </div>
        </>
    )
}