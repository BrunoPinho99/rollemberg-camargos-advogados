import { SiteCopy } from "@/content/siteCopy";

interface TestimonialProps {
  copy: SiteCopy;
}

export default function Testimonial({ copy }: TestimonialProps) {
  return (
    <section className="py-24 sm:py-36 bg-[#fcfbf7] border-b border-[#e8e6df]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3 reveal">
            <span className="text-[12px] font-semibold tracking-wider uppercase text-[#6e6d69]">
              {copy.testimonial.label}
            </span>
          </div>

          <div className="lg:col-span-9 max-w-4xl space-y-8 reveal delay-100">
            <blockquote className="text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-[1.2] text-[#101010]">
              &ldquo;{copy.testimonial.quote}&rdquo;
            </blockquote>

            <div className="pt-4 border-t border-[#e8e6df] flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg text-[#101010]">
                  {copy.testimonial.author}
                </h3>
                <p className="text-sm text-[#6e6d69]">
                  {copy.testimonial.role}
                </p>
              </div>
              <span className="text-xs font-mono uppercase text-[#6e6d69] tracking-wider hidden sm:inline">
                {copy.testimonial.badge}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
