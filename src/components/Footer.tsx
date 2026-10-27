"use client";

import { useMotion } from "./MotionProvider";

export default function Footer() {
  const { scrollTo } = useMotion();

  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo("#home");
  };

  return (
    <footer className="py-12 bg-[#fcfbf7] border-t border-[#e8e6df] text-xs text-[#6e6d69]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p>© {new Date().getFullYear()} Kafka™ — Modern Legal Advisory. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:hey@kafkaconsulting.pl"
            className="hover:text-[#101010] transition-colors"
          >
            hey@kafkaconsulting.pl
          </a>
          <button
            onClick={() =>
              alert(
                "Terms and Conditions: All advisory provided in compliance with regional bar association guidelines."
              )
            }
            className="hover:text-[#101010] transition-colors cursor-pointer"
          >
            Terms & Practice Policy
          </button>
          <a
            href="#home"
            onClick={handleBackToTop}
            className="hover:text-[#101010] transition-colors flex items-center gap-1 cursor-pointer font-medium"
          >
            <span>Back to top</span>
            <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
