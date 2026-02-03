"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PRICE = 29.99;

export default function ProductPage() {
  const [qty, setQty] = useState(1);

  return (
    <div className="min-h-screen bg-amber-50">
      <main className="mx-auto max-w-2xl px-6 py-16">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-amber-700 hover:text-amber-600 hover:underline"
        >
          ← Back
        </Link>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
          <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-amber-200/50 sm:mx-0">
            <Image
              src="/manewax-logo.png"
              alt="Kari's Mane Wax"
              fill
              className="object-contain p-8"
              sizes="(max-width: 640px) 100vw, 320px"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-amber-900">
              Kari&apos;s Mane Wax
            </h1>
            <p className="mt-2 text-amber-800/80">
              Beautify your horse&apos;s mane and protect from insects. A simple,
              effective formula for healthier, more manageable manes.
            </p>
            <p className="mt-4 text-xl font-semibold text-amber-900">
              ${PRICE.toFixed(2)}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <label className="flex items-center gap-2">
                <span className="text-sm text-amber-800">Quantity</span>
                <select
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="rounded-lg border border-amber-200 bg-white px-3 py-2 text-amber-900"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </label>
              <Link
                href={`/checkout?qty=${qty}`}
                className="rounded-full bg-amber-600 px-8 py-3 font-medium text-white transition-colors hover:bg-amber-700"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
