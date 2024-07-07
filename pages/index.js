import Image from "next/image";
import { Inter } from "next/font/google";
import SearchBar from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <div>
      <div className={`w-full h-screen bg-[url('/bg.jpg')] bg-cover bg-no-repeat text-white bg-center`}>
        <div className="w-full h-screen bg-black/40 py-10">
          {/* <h1 className="text-5xl text-center py-10">Weather App</h1> */}
          <SearchBar/>
        </div>
      </div>
    </div>
  );
}
