import Image from 'next/image';
import Link from 'next/link';
import errorImage from '../../assets/images/errorImage.svg';
import styles from '../../styles/main.module.css';

export default function Redirection() {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh"}}>
        <div className={styles.error} >
            <Image src={errorImage} />
            <p>Sorry we have rebrand our website the new link in <Link legacyBehavior href="https://linkiify.netlify.app"><a style={{color: "#fff"}}>Here</a></Link></p>
        </div>
    </div>
  );
}