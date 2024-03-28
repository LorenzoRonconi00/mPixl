import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Showcase from "@/components/Showcase";

export default function Home() {
  return (
    <>
      <main className="flex h-full flex-col items-center justify-center ">
        <section id="home" className="flex w-full min-h-screen justify-center items-center flex-col bg-gradient-to-b from-zinc-950 to-mpixl-950 ">
          <BackgroundBeams />
          <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="md:text-7xl text-4xl lg:text-9xl font-bold text-center text-white relative z-20">
              <Image src="/logo.svg" alt="Logo" width={200} height={200} />
            </h1>
            <p className="my-5 text-center text-2xl sm:text-2xl md:text-4xl text-white">The web agency that cares.</p>
          </div>
        </section>

        <section id="about" className="flex min-h-screen items-center justify-center">
          <div className="mx-auto px-4 py-6 max-w-7xl ">
            <h1 className="mb-8 text-4xl font-bold text-center text-mpixl-50">About Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <Image src="/rob.jpg" alt="Federico" width={192} height={192} className="object-cover mb-5" />
                <h2 className="text-2xl font-semibold text-mpixl-50">Federico</h2>
                <p className="text-center text-mpixl-100">
                  Federico is a talented web developer who recently graduated from university. With a strong background in back-end development and a passion for problem-solving, Federico ensures that every project is built on a solid foundation.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/rob.jpg" alt="Lorenzo" width={192} height={192} className="object-cover mb-5" />
                <h2 className="text-2xl font-semibold text-mpixl-50">Lorenzo</h2>
                <p className="text-center text-mpixl-100">
                  Lorenzo is a passionate web developer who recently graduated alongside Rob. With a keen eye for design and a strong foundation in front-end development, Lorenzo brings creativity and technical expertise to every project.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-xl text-mpixl-200">
                Together, Rob and Bob form a dynamic duo, combining their skills and knowledge to deliver exceptional web solutions. As recent graduates, they bring fresh perspectives and a hunger for innovation to every project they undertake.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full px-10 flex flex-col gap-10 min-h-screen items-center justify-center bg-gradient-to-b to-zinc-950 from-mpixl-950">
          <h1 className="select-none text-6xl text-white drop-shadow-[0_0_0.15rem_#00bdfc]">Our Projects</h1>
          <Showcase/>
        </section> 

        <section id="contact" className="w-full flex flex-col gap-10 min-h-screen items-center justify-center bg-zinc-950">
          <h1 className="select-none text-6xl text-white drop-shadow-[0_0_0.15rem_#00bdfc]">Contact Us</h1>
          <ContactForm/>
        </section>
      </main>
    </>
  );
}
