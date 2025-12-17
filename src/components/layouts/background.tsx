import Image from "next/image";

export default function Background() {
    return (
        <div className="hidden xl:block min-h-full absolute left-0 right-0 top-10 -z-10 overflow-visible pointer-events-none">
            {/* Pattern 1 - Top left */}
            <div className="absolute bottom-4 -left-12 opacity-15">
                <Image
                    src="/dots.svg"
                    alt=""
                    width={100}
                    height={100}
                    className="w-20 h-20 md:w-36 md:h-36"
                />
            </div>

            {/* Pattern 2 - Top right */}
            <div className="absolute top-[600px] -right-20 opacity-20">
                <Image
                    src="/box.svg"
                    alt=""
                    width={120}
                    height={120}
                    className="w-24 h-24 md:w-32 md:h-32"
                />
            </div>

            {/* Pattern 3 - Middle right */}
            <div className="absolute top-[1200px] right-10 opacity-25">
                <Image
                    src="/dots-rectangle.svg"
                    alt=""
                    width={80}
                    height={120}
                    className="w-16 h-24 md:w-20 md:h-32"
                />
            </div>

            {/* Pattern 4 - Middle left */}
            <div className="absolute top-[1800px] left-20 opacity-20">
                <Image
                    src="/box.svg"
                    alt=""
                    width={100}
                    height={100}
                    className="w-20 h-20 md:w-24 md:h-24"
                />
            </div>

            {/* Pattern 5 - Lower right */}
            <div className="absolute top-[2400px] right-16 opacity-15">
                <Image
                    src="/dots.svg"
                    alt=""
                    width={100}
                    height={100}
                    className="w-20 h-20 md:w-36 md:h-36"
                />
            </div>

            {/* Pattern 6 - Bottom left */}
            <div className="absolute top-[3000px] left-14 opacity-20">
                <Image
                    src="/box.svg"
                    alt=""
                    width={140}
                    height={140}
                    className="w-28 h-28 md:w-36 md:h-36"
                />
            </div>
        </div>
    );
}