import Image from "next/image";

export default function Background() {
    return (
        <div className="hidden xl:block fixed inset-0 top-10 -z-10 overflow-hidden pointer-events-none">
            {/* Top left dots pattern */}
            <div className="absolute top-1/2 left-10 opacity-15">
                <Image
                    src="/dots.svg"
                    alt=""
                    width={100}
                    height={100}
                    className="w-20 h-20 md:w-36 md:h-36"
                />
            </div>

            {/* Top right pattern */}
            <div className="absolute top-32 right-20 opacity-20">
                <Image
                    src="/logo-pattern.svg"
                    alt=""
                    width={120}
                    height={120}
                    className="w-24 h-24 md:w-32 md:h-32"
                />
            </div>

            {/* Middle right dots rectangle */}
            <div className="absolute top-1/2 right-10 opacity-25">
                <Image
                    src="/dots-rectangle.svg"
                    alt=""
                    width={80}
                    height={120}
                    className="w-16 h-24 md:w-20 md:h-32"
                />
            </div>

            {/* Bottom left box */}
            <div className="absolute -bottom-8 left-20 opacity-20">
                <Image
                    src="/box.svg"
                    alt=""
                    width={100}
                    height={100}
                    className="w-20 h-20 md:w-24 md:h-24"
                />
            </div>

            {/* Bottom right pattern */}
            <div className="absolute bottom-8 -right-20 opacity-15">
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