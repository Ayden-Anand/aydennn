"use client";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div 
  className="h-screen flex flex-col justify-start items-center text-white p-6 relative bg-cover bg-center"
  style={{ backgroundImage: "url('/io.jpg')" }}
>
  <div className="relative z-10 flex flex-col items-center mb-20 mt-10 sm:mb-40 w-full max-w-lg">
    <div className="flex justify-center items-center w-full max-w-xs sm:max-w-md border-2 border-[rgb(255,255,255)] rounded-3xl mb-6 shadow-lg p-4">
      <Image src="/pp.png" alt="Logo" width={300} height={180} className="drop-shadow-lg w-full h-auto object-contain" />
    </div>
    <h1 className="text-4xl sm:text-6xl font-bold drop-shadow-lg text-center">Ayden</h1>
  </div>

  <div className="relative z-10 flex flex-wrap justify-center gap-6">
    <button className="h-14 w-44 bg-[rgb(200,180,160)] hover:bg-[rgb(163,146,129)] text-white font-semibold rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95" onClick={() => router.push("/hicheel1")}>
      Hicheel 1
    </button>
    <button className="h-14 w-44 bg-[rgb(200,180,160)] hover:bg-[rgb(163,146,129)] text-white font-semibold rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95" onClick={() => router.push("/hicheel2")}>
      Hicheel 2
    </button>
    <button className="h-14 w-44 bg-[rgb(200,180,160)] hover:bg-[rgb(163,146,129)] text-white font-semibold rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95" onClick={() => router.push("/hicheel3")}>
      Hicheel 3
    </button>
    <button className="h-14 w-44 bg-[rgb(200,180,160)] hover:bg-[rgb(163,146,129)] text-white font-semibold rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95" onClick={() => router.push("/hicheel4")}>
      Hicheel 4
    </button>
  </div>
</div>

  );
}
