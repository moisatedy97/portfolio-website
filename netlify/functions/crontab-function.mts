import nodemailer from "nodemailer";

const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_EMAIL_FROM,
    pass: process.env.NEXT_EMAIL_PASSWORD,
  },
});

export default async (req: Request) => {
  const { next_run } = await req.json();

  try {
    await mailTransporter.sendMail({
      to: "moisatedy@gmail.com",
      subject: "Prova cron",
      text: "Prova cron",
    });

    console.log("Received event! Next invocation at:", next_run);
    // return new Response("Email send", { status: 200 });
  } catch (error) {
    console.log("Error");
  }
};
