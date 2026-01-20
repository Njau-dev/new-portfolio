"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../ui/button";
import QuoteSection from "../ui/quote-section";
import CVModal from "../ui/cv-modal";

export default function Hero() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <>
      <section className="z-0 mx-auto flex min-h-screen w-full max-w-7xl items-start px-6 py-6 md:py-16 lg:min-h-[70vh] lg:items-center">
        <div className="">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Text Content */}
            <div className="order-1 space-y-4 md:space-y-6">
              <h1 className="text-3xl leading-tight font-medium text-white md:text-4xl lg:text-5xl">
                <span className="">
                  Jeff is a <span className="text-primary">web designer</span> and{" "}
                </span>
                <span className="text-primary block">full-stack developer</span>
              </h1>

              <p className="text-gray max-w-2xl text-lg leading-relaxed md:text-xl">
                He crafts responsive, secure, scalable web applications with Laravel, React & Python
                that align with your business needs.
              </p>

              <div className="flex justify-center gap-4 pt-4 lg:justify-start">
                <Button variant="primary" href="/contacts">
                  Get in touch
                </Button>

                <Button variant="secondary" onClick={() => setIsCVModalOpen(true)}>
                  View CV |&gt;
                </Button>
              </div>
            </div>

            {/* Image Content */}
            <div className="order-2 flex justify-center lg:justify-end">
              <div className="relative w-full">
                {/* Main Image Frame */}
                <div className="bg-background relative h-80 w-full overflow-auto lg:h-[450px] xl:h-[500px]">
                  <Image
                    src="/assets/hero_image.png"
                    alt="Jeff - Web Designer and Back-end Developer"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="text-gray border-gray flex items-center gap-3 border px-3 py-2">
                  <div className="relative">
                    <div className="bg-primary absolute h-3 w-3 animate-ping"></div>
                    <div className="bg-primary relative h-3 w-3"></div>
                  </div>
                  <span className="text-sm">
                    Currently working on <span className="font-medium text-white">Portfolio</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 flex items-center md:mt-12 lg:mt-16">
            <QuoteSection />
          </div>
        </div>
      </section>

      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
        cvUrl="/assets/resume/Jeff_Njau_CV.pdf"
        fileName="Jeff_Njau_CV"
      />
    </>
  );
}
