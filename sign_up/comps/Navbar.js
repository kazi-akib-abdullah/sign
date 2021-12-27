import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Nav.module.css"

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={150} height={45} alt="" />
            </div>
            <ul></ul>
            <Link href="/"><a>LEARN MORE</a></Link>|
            <Link href="/"><a>LOGIN</a></Link>|
            <Link href="/"><a>SIGNUP</a></Link>
            <Image src="/carbon_user-avatar.svg" width={24} height={24} alt="" />
            <a className={styles.btn}>Become A Host</a>
        </nav>
     );
}

export default Navbar;