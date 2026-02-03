"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const PRICE = 29.99;

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const qty = Math.max(1, Number(searchParams.get("qty")) || 1);
  const subtotal = (PRICE * qty).toFixed(2);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-amber-50">
        <main className="mx-auto max-w-lg px-6 py-24 text-center">
          <h1 className="text-2xl font-semibold text-amber-900">
            Order Received
          </h1>
          <p className="mt-4 text-amber-800/80">
            Thanks for your order! This is a demo — no payment or shipping was
            processed.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-full bg-amber-600 px-8 py-3 font-medium text-white hover:bg-amber-700"
          >
            Return Home
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <main className="mx-auto max-w-2xl px-6 py-16">
        <Link
          href="/product"
          className="mb-8 inline-block text-sm text-amber-700 hover:text-amber-600 hover:underline"
        >
          ← Back to Product
        </Link>
        <h1 className="text-2xl font-semibold text-amber-900">Checkout</h1>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="font-medium text-amber-900">Shipping Address</h2>
            <input
              type="text"
              placeholder="Full name"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full rounded-lg border border-amber-200 px-4 py-2 text-amber-900 placeholder:text-amber-400"
            />
            <input
              type="text"
              placeholder="Street address"
              required
              value={form.address}
              onChange={(e) =>
                setForm((f) => ({ ...f, address: e.target.value }))
              }
              className="w-full rounded-lg border border-amber-200 px-4 py-2 text-amber-900 placeholder:text-amber-400"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="City"
                required
                value={form.city}
                onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
                className="flex-1 rounded-lg border border-amber-200 px-4 py-2 text-amber-900 placeholder:text-amber-400"
              />
              <input
                type="text"
                placeholder="State"
                required
                value={form.state}
                onChange={(e) =>
                  setForm((f) => ({ ...f, state: e.target.value }))
                }
                className="w-24 rounded-lg border border-amber-200 px-4 py-2 text-amber-900 placeholder:text-amber-400"
              />
              <input
                type="text"
                placeholder="ZIP"
                required
                value={form.zip}
                onChange={(e) => setForm((f) => ({ ...f, zip: e.target.value }))}
                className="w-24 rounded-lg border border-amber-200 px-4 py-2 text-amber-900 placeholder:text-amber-400"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full rounded-full bg-amber-600 py-3 font-medium text-white hover:bg-amber-700"
            >
              Place Order
            </button>
          </form>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-200/50">
            <h2 className="font-medium text-amber-900">Order Summary</h2>
            <div className="mt-4 flex gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-amber-50">
                <Image
                  src="/manewax-logo.png"
                  alt="Mane Wax"
                  fill
                  className="object-contain p-2"
                  sizes="80px"
                />
              </div>
              <div className="flex-1">
                <p className="font-medium text-amber-900">Kari&apos;s Mane Wax</p>
                <p className="text-sm text-amber-700">Qty: {qty}</p>
              </div>
            </div>
            <p className="mt-4 border-t border-amber-100 pt-4 font-medium text-amber-900">
              Subtotal: ${subtotal}
            </p>
            <p className="mt-1 text-sm text-amber-700">
              Demo — no payment required
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
