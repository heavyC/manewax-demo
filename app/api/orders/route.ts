import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, address, city, state, zip, quantity, total } = body;

    if (
      !name ||
      !address ||
      !city ||
      !state ||
      !zip ||
      typeof quantity !== "number" ||
      typeof total !== "number"
    ) {
      return NextResponse.json(
        { error: "Missing or invalid fields" },
        { status: 400 }
      );
    }

    const order = await prisma.order.create({
      data: { name, address, city, state, zip, quantity, total },
    });

    return NextResponse.json({ id: order.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
