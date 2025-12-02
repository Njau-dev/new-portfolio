"use client";

import Image from "next/image";
import Button from "../ui/button";
import QuoteSection from "../ui/quote-section";

export default function Hero() {
    return (
        <section className="min-h-screen lg:min-h-[70vh] flex items-start lg:items-center py-6 md:py-16 px-6 max-w-7xl mx-auto w-full bg-background">
            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-4 md:space-y-6 order-1">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
                            <span className="">Jeff is a <span className="text-primary">web designer</span> and </span>
                            <span className="text-primary block">back-end developer</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray leading-relaxed max-w-2xl">
                            He crafts responsive websites where technologies meet creativity
                        </p>

                        <div className="flex justify-center lg:justify-start gap-4 pt-4">
                            <Button variant="primary" href="/contacts" >Get in touch</Button>

                            <Button variant="secondary" href="/projects" >View my work</Button>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="order-2 flex justify-center lg:justify-end">
                        <div className="relative w-full">
                            {/* Main Image Frame */}
                            <div className="relative w-full h-80 lg:h-[450px] xl:h-[500px] bg-background overflow-auto">
                                <Image
                                    src="/assets/hero_image.png"
                                    alt="Jeff - Web Designer and Back-end Developer"
                                    fill
                                    className="object-contain "
                                    priority
                                />
                            </div>
                            <div className="flex items-center gap-3 text-gray border border-gray px-3 py-2">
                                <div className="relative">
                                    <div className="w-3 h-3 bg-primary animate-ping absolute"></div>
                                    <div className="w-3 h-3 bg-primary relative"></div>
                                </div>
                                <span className="text-sm">Currently working on <span className="text-white font-medium">Portfolio</span></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex items-center mt-8 md:mt-12 lg:mt-16">
                    <QuoteSection />
                </div>
            </div>
        </section>
    );
}