import Image from "next/image";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center  text-white px-6 py-20 text-center gap-6">

      <Image src="/images/elephant.png" width={800} height={800} alt="Elephant Image"/>
    </section>
  );
}
