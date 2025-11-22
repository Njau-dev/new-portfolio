import { Quote } from "lucide-react";

export default function QuoteSection() {
    return (
        <div className=" w-full flex flex-col py-10 px-4">
            <div className="border border-gray p-6 relative max-w-3xl w-full">
                <Quote className="text-gray absolute -top-4 -left-2" size={28} />
                <p className="text-gray-200 font-mono text-xl">
                    With great power comes great electricity bill
                </p>
            </div>
            <div className="flex justify-end mt-6 pr-4 border border-gray">
                <Quote className="text-gray rotate-180 mr-2" size={20} />
                <span className="text-gray font-mono text-lg">- Dr. Who</span>
            </div>
        </div>
    );
}
