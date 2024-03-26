import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center select-none gap-3">
        <div className="flex">
          <h1 className="text-6xl drop-shadow-[0_0_0.15rem_#00bdfc]">The web agency that cares.</h1>
        </div>
      </main>

      <div className="w-full h-[100rem]">
        
      </div>
    </>
  );
}
