import ImageAsset from "../../_components/imageAsset/ImageAsset";
import s from "./page.module.css";
import Image from 'next/image';

export default function SB17() {
    return (
        <>
            <h1>Stupor Bowl 17</h1>
            <article>
                <ImageAsset
                    src="/images/stupor-17-patch.jpg"
                    width={3072}
                    height={4080}
                    alt="Torn piece of clothing with two patches sewn on."
                    credit={{ owner: "Anthony Ross" }}
                >
                    <figcaption>Scrap saved from a battle vest of the owner. Genuine patch from Stupor Bowl 17. Also pictured is a patch from the now defunct <i>First Avenue Cycling Club</i> of Minneapolis.</figcaption>
                </ImageAsset >
            </article>
        </>
    );
}
