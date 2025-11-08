import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-white px-6 text-center gap-6 bg-white">

      <Image src="/images/elephant.png" width={800} height={800} alt="Elephant Image"/>
    </section>
  );
}
