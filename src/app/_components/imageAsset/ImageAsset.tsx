import Image, { StaticImageData } from "next/image";
import s from "./ImageAsset.module.css";

type CreditObject = {
    owner?: string;
    link?: string;
}

type ImageAssetProps = {
    // src: string;
    src: StaticImageData;
    width: number;
    height: number;
    alt: string;
    loading?: "lazy" | "eager"
    credit?: CreditObject;
    children?: React.ReactElement<"figcaption">;
}

export default function ImageAsset(props: ImageAssetProps) {
    const ContainerElement = props.children ? "figure" : "div";

    return (
        <ContainerElement className={s.imageAsset}>
            <div className={s.imageWrapper}>
                <Image src={props.src}
                    width={props.width}
                    height={props.height}
                    alt={props.alt}
                    loading={props.loading || "lazy"}
                    placeholder="blur"
                    sizes="(min-width: 576px) 100vw, (min-width: 768px) 50vw, 100vw" />
                <div className={s.credit}>
                    {!props.credit ?
                        // To Do: Instead of a mailto, this should be a 
                        // <dialog> that will add a post to the cms for
                        // the admins' dashboard - LM
                        <>Credit: Unknown - <a href={`mailto: stuporbowl.webmaster@gmail.com?subject=Credit for ${props.src}`}>Claim credit</a></>
                        :
                        props.credit.owner?.toLowerCase() === "anonymous" ?
                            <>Owner wishes to remain anonymous</>
                            :
                            <>From the private collection of {props.credit.owner}</>
                    }
                </div>
            </div>

            {props.children}

        </ContainerElement>
    )
}
