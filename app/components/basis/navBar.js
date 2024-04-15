import Link from "next/link";
import Image from "next/image";
import Button from "./button";
import logo from "../../assets/logo/logo.svg";
import styles from "../../styles/NavBar.module.css";

export default function NavBar() {
    return (
        <>
            <div className={styles.navBar}>
                <div className={styles.navBarContent}>
                    <div className={styles.navBarLogo}>
                        <Link href="/">
                            <Image src={logo} alt="logo" width={150} height={40}/>
                        </Link>
                    </div>
                    <div className={styles.navBarLinks}>
                        <Link href="/"><span>About us</span></Link>
                        <Link href="/"><span>Pricing</span></Link>
                        <Link href="/"><span>We're hiring</span></Link>
                    </div>
                    <div className={styles.navBarButton}>
                        <Button />
                    </div>
                </div>
            </div>
        </>
    )
}