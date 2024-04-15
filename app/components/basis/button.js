import Link from "next/link";
import buyMeACoffee from "../../assets/images/violet-button.png";
import Image from "next/image";

export default function Button() {
    return (
        <>
            <div className="button">
                <Link href="https://www.buymeacoffee.com/christianludovic">
                    <Image src={buyMeACoffee} alt="button" width={81} height={29} /> 
                </Link>
            </div>
        </>
    )
}