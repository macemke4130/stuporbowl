import s from "./page.module.css";
import ArchiveListItem from "../_components/archiveListItem/ArchiveListItem";

export default function Archive() {
    const mostRecentEvent = 26;
    const allPastEvents = Array.from({ length: mostRecentEvent }, (_, index) => index);

    return (
        <>
            <h1>Stupor Bowl Archive</h1>
            <p>Here you will find a list of Stupor Bowls of years past.</p>
            <ul>
                {allPastEvents.map((sb) => {
                    const num = sb + 1;
                    return <ArchiveListItem key={`sb-${num}`} stuporNumber={num} />
                })}
            </ul>
        </>
    );
}
