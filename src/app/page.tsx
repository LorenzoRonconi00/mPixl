import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Showcase from "@/components/Showcase";
import About from "@/components/About";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const delusion = localFont({ src: './../fonts/delusion.otf' })
const quick = localFont({ src: './../fonts/quick.ttf' })


export default function Home() {
  return (
    <>
      <main className="flex h-full flex-col items-center justify-center select-none">
        <section id="home" className="flex w-full min-h-screen justify-center items-center flex-col bg-zinc-950 ">
          <BackgroundBeams />
          <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            {/*<h1 className="md:text-7xl text-4xl lg:text-9xl font-bold text-center text-white relative z-20">
              <Image src="/logo.svg" alt="Logo" width={200} height={200} />
            </h1>*/ }
            <p className={`my-5 text-center text-2xl sm:text-2xl md:text-4xl text-white z-20 ${quick.className}`}>The web agency that <span className={"text-mpixl-500"}>ACTUALLY</span> cares.</p>
          </div>
        </section>

        <section id="about" className="flex flex-col gap-20 min-h-screen items-center justify-center bg-gradient-to-b from-zinc-950 via-zinc-900 to-mpixl-950 w-full">
        <h1 className={`select-none text-5xl text-white ${quick.className}`}>Our Services</h1>
          <About />
        </section>

        <section id="projects" className="w-full flex flex-col gap-20 min-h-screen items-center justify-center bg-mpixl-950">
          <h1 className={`select-none text-5xl text-white ${quick.className}`}>Our Projects</h1>
          <Showcase />
        </section>

        <section id="contact" className="w-full flex flex-col gap-10 min-h-screen items-center justify-center bg-gradient-to-b to-zinc-950 via-zinc-900 from-mpixl-950">
          <h1 className={`select-none text-5xl text-white ${quick.className}`}>Contact Us</h1>
          <ContactForm />
        </section>

        <Footer />
      </main>
    </>
  );
}
