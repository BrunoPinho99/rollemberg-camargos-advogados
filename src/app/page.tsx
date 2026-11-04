import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import { copyVersionB, SiteCopy } from "@/content/siteCopy";

const copy: SiteCopy = copyVersionB;

export default function Home() {
  return (
    <>
      <Header copy={copy} />
      <main className="flex-1">
        <Hero copy={copy} />
        <Marquee copy={copy} />
        <About copy={copy} />
        <Services copy={copy} />
        <Expertise copy={copy} />
        <FAQ copy={copy} />
        <CtaBanner copy={copy} />
      </main>
      <Footer copy={copy} />
    </>
  );
}
