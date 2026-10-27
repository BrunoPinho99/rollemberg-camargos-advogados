"use client";

import { useState, useEffect } from "react";
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
import ABSwitcher from "@/components/ABSwitcher";
import {
  copyVersionA,
  copyVersionB,
  VersionType,
  SiteCopy,
} from "@/content/siteCopy";

export default function Home() {
  const [version, setVersion] = useState<VersionType>("A");
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    // Detectar parâmetro ?v=b ou ?v=a na URL ou localStorage
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const vParam = urlParams.get("v")?.toUpperCase();
      if (vParam === "B") {
        setVersion("B");
      } else if (vParam === "A") {
        setVersion("A");
      } else {
        const saved = localStorage.getItem("ab_version") as VersionType | null;
        if (saved === "A" || saved === "B") {
          setVersion(saved);
        }
      }
    }
  }, []);

  const handleVersionChange = (newVersion: VersionType) => {
    setVersion(newVersion);
    if (typeof window !== "undefined") {
      localStorage.setItem("ab_version", newVersion);
      const url = new URL(window.location.href);
      url.searchParams.set("v", newVersion.toLowerCase());
      window.history.replaceState({}, "", url.toString());
    }
  };

  const copy: SiteCopy = version === "A" ? copyVersionA : copyVersionB;

  return (
    <>
      <Header copy={copy} onOpenBooking={() => setIsBookingOpen(true)} />
      <main className="flex-1">
        <Hero copy={copy} />
        <Marquee copy={copy} />
        <About copy={copy} />
        <Services copy={copy} />
        <Expertise copy={copy} />
        <Process copy={copy} onOpenBooking={() => setIsBookingOpen(true)} />
        <Insights copy={copy} />
        <Testimonial copy={copy} />
        <FAQ copy={copy} />
        <Contact copy={copy} onOpenBooking={() => setIsBookingOpen(true)} />
      </main>
      <Footer copy={copy} />
      <BookingModal
        copy={copy}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
      <ABSwitcher
        currentVersion={version}
        onChangeVersion={handleVersionChange}
      />
    </>
  );
}
