import { Quote } from "lucide-react";

export default function QuoteSection() {
    return (
        <div className="flex flex-col py-10 px-4 mx-auto">
            <div className="border border-gray p-6 relative max-w-3xl w-full">
                <Quote className="bg-background text-white absolute -top-4 -left-2 transform translate-y-1.5" size={28} />
                <p className="text-white font-medium text-lg sm:text-xl">
                    With great power comes great electricity bill and responsibility of course.
                </p>
            </div>
            <div className="flex justify-end">
                <div className="w-fit flex py-3 px-4 border border-gray border-t-0">
                    <Quote className="text-white rotate-180 mr-2 transform -translate-y-5 -translate-x-6 bg-background" size={20} />
                    <span className="text-white text-base sm:text-lg">- Dr. Who</span>
                </div>
            </div>
        </div>
    );
}
