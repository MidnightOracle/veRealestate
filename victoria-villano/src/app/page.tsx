import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>

      {/* Luxury Living Image Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Luxury Living in Palm Coast, Florida</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Image 1 */}
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Luxury Florida Home"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Image 2 */}
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                alt="Modern Florida Villa"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Image 3 */}
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
                alt="Florida Beach House"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Image 4 */}
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                alt="Luxury Florida Estate"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Image 5 */}
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
                alt="Florida Waterfront Property"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Image 6 */}
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
                alt="Florida Luxury Home"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
    </div>
  );
}
