import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import ScrollText from "@/components/ScrollText/ScrollText";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollText />
    </main>
  );
}
