import Image from "next/image";
import SectionHeader from "../ui/section-header";
import { funFacts } from "@/data/fun-facts";

const FunFactsSection = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-20">
      <SectionHeader title="my-fun-facts" />

      <div className="relative mt-8 flex flex-col gap-8 lg:flex-row lg:gap-40">
        {/* Left side - Fun facts grid */}
        <div className="w-full lg:w-3/5">
          <div className="flex flex-wrap gap-4">
            {funFacts.map((fact) => (
              <div
                key={fact.id}
                className="border-gray/70 bg-background text-gray hover:border-primary w-fit border px-2 py-3 text-sm transition-colors duration-300"
              >
                {fact.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Pattern decorations - Hidden on small/medium screens */}
        <div className="relative hidden lg:block lg:w-2/5">
          <div className="sticky top-8 space-y-8">
            {/* Top pattern */}
            <div className="relative flex h-[100px] w-full justify-end">
              <div className="relative h-full w-[120px]">
                <Image src="/dots.svg" alt="decorative dots" fill className="object-contain" />
              </div>
            </div>

            {/* Middle pattern */}
            <div className="relative flex h-[150px] w-full justify-center">
              <div className="relative h-full w-[130px]">
                <Image src="/pattern.svg" alt="decorative boxes" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;
