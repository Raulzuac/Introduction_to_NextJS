import Image from "next/image";
import Link from "next/link";
import HomeCarousel from "./ui/HomeCarrousel";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="relative grid items-center grid-cols-1 lg:grid-cols-2 lg:gap-0 lg:items-stretch lg:min-h-[600px]">
            <div className="flex flex-col justify-center space-y-4 lg:px-12 xl:space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.5rem] 2xl:text-[5.25rem]">
                  Learn Next.js with the Pokédex
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Catch 'em all with the power of Next.js. This tutorial will guide you through building your own
                  Pokédex, complete with Pokémon cards, tooltips, and more.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="/pokedex"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="mx-auto relative overflow-hidden aspect-video rounded-tl-lg lg:rounded-tl-none lg:rounded-tr-lg">
              <Image
                alt="Hero"
                className="object-cover rounded-lg aspect-video"
                height="528"
                src="/pokedex.jpeg"
                width="940"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <HomeCarousel/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
