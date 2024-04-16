import Image from 'next/image'
import Link from 'next/link'
import buyMeACoffee from "../../assets/images/violet-button.png";

export default function ButtonLarge() {
    return(
        <>
            <div className="buttonLarge">
                <Link href="https://www.buymeacoffee.com/christianludovic">
                    <Image src={buyMeACoffee} alt="button" width={234} height={56} id='buttonLarge'/> 
                </Link>
            </div>
        </>
    )
}