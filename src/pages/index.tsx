import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`flex h-screen justify-center items-center bg-gradient-to-r from-purple-400 to-blue-300`}>
      <span className="text-4xl">Texto</span>
    </div>
  );
}
