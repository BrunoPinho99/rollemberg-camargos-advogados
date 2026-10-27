"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import Process from "@/components/Process";
import Insights from "@/components/Insights";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Header onOpenBooking={() => setIsBookingOpen(true)} />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Expertise />
        <Process onOpenBooking={() => setIsBookingOpen(true)} />
        <Insights />
        <Testimonial />
        <FAQ />
        <Contact onOpenBooking={() => setIsBookingOpen(true)} />
      </main>
      <Footer />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
