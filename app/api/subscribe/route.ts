import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Correo inválido." }, { status: 400 });
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const DATACENTER = API_KEY?.split("-")[1]; // Extract Datacenter (us17)

    if (!API_KEY || !LIST_ID) {
      return NextResponse.json({ error: "Faltan credenciales del servidor." }, { status: 500 });
    }

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `apikey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    });

    if (response.ok) {
      return NextResponse.json({ message: "¡Suscripción exitosa!" }, { status: 200 });
    } else {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData.detail || "Error al suscribirse." }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Error interno del servidor." }, { status: 500 });
  }
}
