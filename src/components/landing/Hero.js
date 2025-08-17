// import { bgNike } from "@/assets/background";
import { background } from "@/lib/images";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-between px-8 md:px-20 bg-black bg-cover bg-center"
      style={{ backgroundImage: `url(${background.home})` }}
    >
      {/* <div className="absolute inset-0 bg-[url('/assets/bg-nike2.jpg')] bg-cover bg-center z-0"></div> */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center self-end justify-between w-full py-40">
        <div className="text-white space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Selamat Datang di Spatoo
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Sepatu keren untuk gaya hidupmu. Temukan koleksi terbaru dan
            eksklusif kami.
          </p>
          <button className="px-6 py-3 bg-amber-500 text-dark-grey font-semibold rounded-full hover:bg-amber-700 transition">
            Lihat Koleksi
          </button>
        </div>
      </div>
    </div>
  );
}
