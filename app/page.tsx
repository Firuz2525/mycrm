import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="relative w-full h-auto aspect-[4/3]">
        {" "}
        {/* optional aspect ratio */}
        <Image
          src="/carousel-1.jpg"
          alt="Shisha Product"
          fill
          className="object-cover" // or object-cover for cropping
        />
      </div>
      {/* <Image
        src="/gear.png"
        alt="Shisha Product"
        width={300}
        height={300}
        className="rounded-lg shadow-md border border-gray-300 hover:scale-105 transition-transform duration-300 p-2"
      /> */}

      {/* <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden">
        <img
          src="/gear.png"
          alt="Shisha product"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">Electric Shisha Roller</h2>
          <p className="text-gray-600 mt-1">$120</p>
          <p className="text-sm text-gray-500 mt-2">
            Smooth and automatic rolling for any shisha setup.
          </p>
        </div>
      </div> */}
    </main>
  );
}
