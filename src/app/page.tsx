import Image from "next/image";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <Image src="/hero.png" alt="Hero Image" width={1700} height={300} />

      <Image src="/platform.png" alt="Hero Image" width={1700} height={300} />
      <Image src="/moments.png" alt="Hero Image" width={1700} height={300} /> 
      <Image src="/footer.png" alt="Hero Image" width={1700} height={300} />
    </div>
  );
}
