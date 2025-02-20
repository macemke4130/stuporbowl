import Link from "next/link";
import s from "./header.module.css";

export default function Header() {
    return (
        <header className={s.header}>
            <nav>
                <Link href="./">Home</Link>
                <Link href="./about-stupor-bowl">About Stupor Bowl</Link>
                <Link href="#">Contact</Link>
                <Link href="#" className="ml-auto">Right Side Link</Link>
            </nav>
        </header>
    )
}
