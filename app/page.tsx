import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <header className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-amber-900 sm:text-3xl">
            Kari&apos;s Grooming Room
          </h1>
          <Image
            src="/manewax-logo.png"
            alt="Mane Wax logo"
            width={280}
            height={280}
            priority
            className="mt-8"
          />
          <h2 className="mt-6 text-xl font-medium text-amber-800">Mane Wax</h2>
          <p className="mt-2 text-amber-700/90">
            Beautify your horse&apos;s mane & protect from insects
          </p>
        </header>

        <section className="mt-16 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-amber-200/50">
          <h3 className="font-semibold text-amber-900">Our Product</h3>
          <p className="mt-3 text-amber-800/80 leading-relaxed">
            Mane Wax conditions and beautifies your horse&apos;s mane while
            repelling insects. A simple, effective formula for healthier, more
            manageable manes.
          </p>
          <Link
            href="/product"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-amber-600 px-8 font-medium text-white transition-colors hover:bg-amber-700"
          >
            Shop Now
          </Link>
        </section>

        <section className="mt-16 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-amber-200/50">
          <h3 className="font-semibold text-amber-900">Resources</h3>
          <p className="mt-1 text-sm text-amber-700/80">
            Articles & information for horse owners
          </p>
          <nav className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <a
              href="https://useventing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center"
            >
              <span className="relative block h-[130px] w-[110px] overflow-hidden rounded-lg bg-amber-100 ring-1 ring-amber-200/50">
                <Image
                  src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b39?w=220&h=260&fit=crop"
                  alt="Event riding"
                  fill
                  className="object-cover transition-opacity group-hover:opacity-90"
                  sizes="110px"
                />
              </span>
              <span className="mt-2 text-sm font-medium text-amber-700 group-hover:text-amber-600 group-hover:underline">
                Event Riding
              </span>
            </a>
            <a
              href="https://aaep.org/horseowner"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center"
            >
              <span className="relative block h-[130px] w-[110px] overflow-hidden rounded-lg bg-amber-100 ring-1 ring-amber-200/50">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=220&h=260&fit=crop"
                  alt="Horse health"
                  fill
                  className="object-cover transition-opacity group-hover:opacity-90"
                  sizes="110px"
                />
              </span>
              <span className="mt-2 text-sm font-medium text-amber-700 group-hover:text-amber-600 group-hover:underline">
                Horse Health
              </span>
            </a>
            <a
              href="https://www.usef.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center"
            >
              <span className="relative block h-[130px] w-[110px] overflow-hidden rounded-lg bg-amber-100 ring-1 ring-amber-200/50">
                <Image
                  src="https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?w=220&h=260&fit=crop"
                  alt="US Equestrian"
                  fill
                  className="object-cover transition-opacity group-hover:opacity-90"
                  sizes="110px"
                />
              </span>
              <span className="mt-2 text-sm font-medium text-amber-700 group-hover:text-amber-600 group-hover:underline">
                US Equestrian
              </span>
            </a>
            <a
              href="https://thehorse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center"
            >
              <span className="relative block h-[130px] w-[110px] overflow-hidden rounded-lg bg-amber-100 ring-1 ring-amber-200/50">
                <Image
                  src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=220&h=260&fit=crop"
                  alt="The Horse"
                  fill
                  className="object-cover transition-opacity group-hover:opacity-90"
                  sizes="110px"
                />
              </span>
              <span className="mt-2 text-sm font-medium text-amber-700 group-hover:text-amber-600 group-hover:underline">
                The Horse
              </span>
            </a>
          </nav>
        </section>

        <footer className="mt-16 text-center text-sm text-amber-700/70">
          © Kari&apos;s Grooming Room
        </footer>
      </main>
    </div>
  );
}
