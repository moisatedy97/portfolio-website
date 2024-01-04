import { EmailOptions, emailOptionsSchema } from "@/interfaces/EmailOptions";
import { mailTransporter } from "@/mailer";
import supabaseServer from "@/supabase/config";
import { QueryData, QueryError } from "@supabase/supabase-js";

export async function GET() {
  const query = supabaseServer().from("profile").select("*").eq("id", 1);
  const { data, error }: { data: QueryData<typeof query> | null; error: QueryError | null } = await query;

  if (error) {
    throw error;
  }

  if (data && data[0].id > 0) {
    try {
      await mailTransporter.sendMail({
        to: data[0].email,
        subject: "Portfolio website reset",
        text: "Supabase request was sent. Supabase was restarted.",
      });
      return new Response("Email send", { status: 200 });
    } catch (error) {
      return new Response("Send email error", { status: 400 });
    }
  }

  return new Response("Wrong body", { status: 400 });
}
