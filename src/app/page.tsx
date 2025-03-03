import s from "./page.module.css";
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1>Hello, Minneapolis!</h1>
      <Image src="/images/lake-billy-16-9.webp" width={2342} height={1317} loading="eager" fetchPriority="high" alt="A bicycle racer on a frozen lake." className={s.hero} />

    </>
  );
}
