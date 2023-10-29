import {
    Home as HomeIcon,
    Search,
    Library,
    ChevronLeft,
    ChevronRight,
    Shuffle,
    SkipBack,
    SkipForward,
    Repeat,
    Play,
    Mic2,
    LayoutList,
    Laptop2,
    Volume,
    Maximize,
    Maximize2,
  } from "lucide-react";
  import Image from "next/image";
  
  export function MainContent() {
    return (
      <main className="flex-1 p-6">
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-black/40 p-1 ">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1 ">
          <ChevronRight />
        </button>
      </div>

      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/kbyefornow.jpg"
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong>k bye for now</strong>
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play fill="black" />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/kbyefornow.jpg"
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong>k bye for now</strong>
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play fill="black" />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/kbyefornow.jpg"
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong>k bye for now</strong>
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play fill="black" />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/kbyefornow.jpg"
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong>k bye for now</strong>
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play fill="black" />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/kbyefornow.jpg"
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong>k bye for now</strong>
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play fill="black" />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/kbyefornow.jpg"
            width={104}
            height={104}
            alt="Capa do album"
          />
          <strong>k bye for now</strong>
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play fill="black"/>
          </button>
        </a>
      </div>

      <h2 className="font-semibold text-2xl mt-10">Made for Inês Guedes</h2>

      <div className="grid grid-cols-8 gap-4 mt-4">
        <a
          href=""
          className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10"
        >
          <Image
            src="/kbyefornow.jpg"
            width={104}
            height={104}
            alt="Capa do album"
            className="w-full"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">
            Ariana Grande, Sabrina Carpenter and more
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10"
        >
          <Image
            src="/kbyefornow.jpg"
            width={104}
            height={104}
            alt="Capa do album"
            className="w-full"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">
            Ariana Grande, Sabrina Carpenter and more
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10"
        >
          <Image
            src="/kbyefornow.jpg"
            width={104}
            height={104}
            alt="Capa do album"
            className="w-full"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">
            Ariana Grande, Sabrina Carpenter and more
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10"
        >
          <Image
            src="/kbyefornow.jpg"
            width={104}
            height={104}
            alt="Capa do album"
            className="w-full"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">
            Ariana Grande, Sabrina Carpenter and more
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10"
        >
          <Image
            src="/kbyefornow.jpg"
            width={104}
            height={104}
            alt="Capa do album"
            className="w-full"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">
            Ariana Grande, Sabrina Carpenter and more
          </span>
        </a>
      </div>
    </main>
    );
  }
  