import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const data = await request.json()

  console.log("Datos recibidos:", data)

  await new Promise((resolve) => setTimeout(resolve, 1000))

  return NextResponse.json({ message: "Datos recibidos correctamente" })
}