import { mailTransporter } from "@/mailer";

export async function GET() {
  try {
    await mailTransporter.sendMail({
      to: "moisatedy@gmail.com",
      subject: "Prova cron",
      text: "Prova cron",
    });
    return new Response("Email send", { status: 200 });
  } catch (error) {
    return new Response("Send email error", { status: 400 });
  }
}
