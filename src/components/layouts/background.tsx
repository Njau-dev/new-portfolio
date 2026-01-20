import Image from "next/image";

export default function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden xl:block">
      {/* Pattern 1 - Top left */}
      <div className="absolute top-[1200px] opacity-15">
        <Image
          src="/dots.svg"
          alt=""
          width={100}
          height={100}
          className="h-20 w-20 md:h-36 md:w-36"
        />
      </div>

      {/* Pattern 2 - Top right */}
      <div className="absolute top-[750px] -right-20 opacity-70">
        <Image
          src="/box.svg"
          alt=""
          width={120}
          height={120}
          className="h-24 w-24 md:h-32 md:w-32"
        />
      </div>

      {/* Pattern 3 - Middle right */}
      <div className="absolute top-[1600px] right-3 opacity-25">
        <Image
          src="/logo-pattern.svg"
          alt=""
          width={80}
          height={120}
          className="h-24 w-16 md:h-32 md:w-20"
        />
      </div>

      {/* Pattern 4 - Middle left */}
      <div className="absolute top-[2700px] -left-16 opacity-20">
        <Image
          src="/box.svg"
          alt=""
          width={100}
          height={100}
          className="h-32 w-32 md:h-36 md:w-36"
        />
      </div>

      {/* Pattern 5 - Lower right */}
      <div className="absolute top-[3050px] right-16 opacity-15">
        <Image
          src="/dots.svg"
          alt=""
          width={100}
          height={100}
          className="h-20 w-20 md:h-36 md:w-36"
        />
      </div>

      {/* Pattern 6 - Bottom left */}
      <div className="absolute top-[4950px] left-14 opacity-20">
        <Image
          src="/box.svg"
          alt=""
          width={140}
          height={140}
          className="h-28 w-28 md:h-36 md:w-36"
        />
      </div>
    </div>
  );
}
