import Image from "next/image";
import { Armchair, ArrowRight, Loader, Settings } from "lucide-react";

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

      <button
        disabled
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-cyan-700 dark:hover:bg-cyan-900 dark:focus:ring-blue-800 inline-flex items-center"
      >
        <svg
          aria-hidden="true"
          role="status"
          className="inline w-4 h-4 me-3 text-white animate-spin"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
        Loading...
      </button>
      <button
        disabled
        type="button"
        className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
      >
        <svg
          aria-hidden="true"
          role="status"
          className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="#1C64F2"
          />
        </svg>
        Loading...
      </button>

      <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      <Loader className="w-6 h-6 text-blue-400 animate-spin" />
      <Settings className="w-6 h-6 text-gray-400 animate-pulse" />
      <Settings className="w-6 h-6 text-gray-400 animate-bounce" />
      <Settings className="w-10 h-10 text-gray-400 animate-spin" />
      <ArrowRight className="w-6 h-6 text-gray-400 animate-ping" />
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
          📄 HOME ABOUT Text — text-base font-normal text-gray-800
          leading-relaxed
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
