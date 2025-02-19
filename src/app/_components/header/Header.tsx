import Link from "next/link";
import s from "./header.module.css";

export default function Header() {
    return (
        <header className={s.header}>
            <nav>
                <Link href={"#"}>Home</Link>
                <Link href={"#"}>About</Link>
                <Link href={"#"}>Contact</Link>
            </nav>
        </header>
    )
}
