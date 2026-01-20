import { Quote } from "lucide-react";

export default function QuoteSection() {
  return (
    <div className="mx-auto flex flex-col px-4 py-10">
      <div className="border-gray relative w-full max-w-3xl border p-6">
        <Quote
          className="bg-background absolute -top-4 -left-2 translate-y-1.5 transform text-white"
          size={28}
        />
        <p className="text-lg font-medium text-white sm:text-xl">
          With great power comes great electricity bill and responsibility of course.
        </p>
      </div>
      <div className="flex justify-end">
        <div className="border-gray flex w-fit border border-t-0 px-4 py-3">
          <Quote
            className="bg-background mr-2 -translate-x-6 -translate-y-5 rotate-180 transform text-white"
            size={20}
          />
          <span className="text-base text-white sm:text-lg">- Dr. Who</span>
        </div>
      </div>
    </div>
  );
}
