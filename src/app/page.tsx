"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import Preloader from "@/components/Preloader";
import { copyVersionB, SiteCopy } from "@/content/siteCopy";

// Site fixado na Versão B (Negócios Digitais)
const copy: SiteCopy = copyVersionB;

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Preloader />
      <Header copy={copy} onOpenBooking={() => setIsBookingOpen(true)} />
      <main className="flex-1">
        <Hero copy={copy} />
        <Marquee copy={copy} />
        <About copy={copy} />
        <Services copy={copy} onOpenBooking={() => setIsBookingOpen(true)} />
        <Expertise copy={copy} />
        <FAQ copy={copy} />
        <CtaBanner copy={copy} onOpenBooking={() => setIsBookingOpen(true)} />
      </main>
      <Footer copy={copy} onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal
        copy={copy}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
