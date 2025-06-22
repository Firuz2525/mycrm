import Image from "next/image";
import { Armchair, ArrowRight, Loader, Settings } from 'lucide-react';

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Hello, Next.js!</h1>
      <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind!</h1>
      <h1 className="text-green-500 text-4xl font-bold">Brand Orange!</h1>
       <Image
        src="/gear.png"
        alt="Shisha Product"
        width={300}
        height={300}
        // className="rounded shadow"
        className="rounded-lg shadow-md border border-gray-300 hover:scale-105 transition-transform duration-300 p-2"
        />
        
        
        <Loader className="w-10 h-10 text-blue-500 animate-spin" />
        <Settings className="w-6 h-6 text-gray-600 animate-pulse" />
        <Settings className="w-6 h-6 text-gray-600 animate-bounce" />
        <Settings className="w-6 h-6 text-gray-600 animate-ping" />
        <ArrowRight className="w-6 h-6 text-gray-600 animate-ping" />
         <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden">
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
    </div>
    <div className="space-y-6 p-6">
      <h1 className="text-4xl font-extrabold tracking-tight">
        🔥 Main Title — text-4xl font-extrabold
      </h1>

      <h1 className="text-2xl font-semibold text-gray-700">
        📌 Subtitle — text-2xl font-semibold text-gray-700
      </h1>

      <div className="text-base text-gray-500 leading-relaxed">
        📄 HOME ABOUT  Text — text-base font-normal text-gray-800 leading-relaxed
        <br />
        This is good for paragraphs. It's readable and clean.
      </div>

      <div className="text-sm text-gray-500">
        🧾 Small Text — text-sm text-gray-500
        <br />
        Use this for helper notes, subtext, or muted labels.
      </div>

      <div className="text-xs text-gray-400 italic">
        🧷 Tiny Caption — text-xs italic text-gray-400
        <br />
        Used for tooltips, legal info, or captions.
      </div>

      <div className="text-sm font-medium uppercase tracking-wide">
        🚀 Button Text — text-sm font-medium uppercase tracking-wide
      </div>

      <div className="text-lg font-semibold text-gray-800">
        🧱 Card Title — text-lg font-semibold text-gray-800
      </div>

      <div className="text-sm text-gray-600 leading-snug">
        🧾 Card Body — text-sm text-gray-600 leading-snug
        <br />
        Supporting info in a card layout, like product description.
      </div>

      <div className="text-blue-600 hover:underline font-medium">
        🔗 Link Text — text-blue-600 hover:underline font-medium
        <br />
        Styled to be clickable and accessible.
      </div>

      <div className="text-sm font-medium text-gray-700">
        🏷️ Input Label — text-sm font-medium text-gray-700
        <br />
        Descriptive text for input fields.
      </div>
    </div>
    </main>
  );
}
