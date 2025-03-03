import Link from "next/link";
import s from "./ArchiveListItem.module.css";

type ArchiveListItem = {
    stuporNumber: number;
}

export default function ArchiveListItem(props: ArchiveListItem) {
    return (
        <li className={s.archiveListItem}>
            <Link href={`./archive/${props.stuporNumber}`}>
                Stupor Bowl {props.stuporNumber}
            </Link>
        </li>
    )
}
