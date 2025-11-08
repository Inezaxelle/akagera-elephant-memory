import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });


export const metadata = {
  title: "Akagera Elephant Memory",
  description: "Akagera Elephants Memory Initiative",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cinzel.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
