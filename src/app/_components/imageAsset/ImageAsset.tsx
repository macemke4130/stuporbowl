import s from "./ImageAsset.module.css";

type ImageAssetProps = {
    src: string;
}

export default function ImageAsset(props: ImageAssetProps) {
    return (
        <>
            {props.src}
        </>
    )
}
