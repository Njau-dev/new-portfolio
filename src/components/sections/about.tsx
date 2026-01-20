"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "../ui/section-header";
import Button from "../ui/button";
import { SectionProps } from "@/types";
import CVModal from "../ui/cv-modal";

const AboutSection = ({ header }: SectionProps) => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:pt-20">
        {header ? <SectionHeader title="about" hero={true} /> : null}

        <div className="mt-8 flex flex-col items-start gap-8 md:gap-12 lg:w-auto lg:flex-row lg:gap-40">
          {/* Left side - Content */}
          <div className="lg:w-1/2">
            <h1 className="mb-6 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              Hello, I&apos;m <span className="text-primary">Jeff Njau</span>!
            </h1>

            <div className="text-gray space-y-4">
              <p className="leading-relaxed">
                I&apos;m a full-stack developer with a background in automotive engineering and
                sales, passionate about building technology solutions that solve real problems.
              </p>

              <p className="leading-relaxed">
                I specialize in Laravel, React, Python, and PostgreSQL, and have experience
                designing secure APIs, architecting databases, and deploying scalable applications.
                I enjoy taking on multiple roles, learning continuously, and delivering impactful
                solutions for businesses and users.
              </p>

              <p className="leading-relaxed">
                Over the years, I&apos;ve led projects from conception to production, mentoring
                teams, and collaborating with clients to turn ideas into working products. I&apos;m
                eager to continue growing while building innovative, high-quality software.
              </p>
            </div>

            <div className="mt-8">
              {header ? (
                <Button variant="primary" href="/about">
                  Read more
                </Button>
              ) : (
                <Button variant="primary" onClick={() => setIsCVModalOpen(true)}>
                  View CV |&gt;
                </Button>
              )}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-full lg:w-1/2">
            <div className="bg-background relative h-[300px] w-full md:h-[400px] lg:h-[600px] lg:-translate-y-40 lg:transform">
              <Image
                src="/assets/about-image.png"
                alt="Jeff Njau - Back-end Developer"
                fill
                className="object-contain object-center"
              />
            </div>
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
};

export default AboutSection;
