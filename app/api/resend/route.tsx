import { EmailTemplate } from "@/app/parts/estrutura/emailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const body = await req.json();
    try {
        const data = await resend.emails.send({
            from: "ValvePress <noreply@valvepress.com.br>",
            to: [
                "fabiofreitassilvacontato@gmail.com",
                "comercial@valvepress.com.br",
            ],
            subject: "ValvePress - Contato Site",
            react: EmailTemplate(body),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
