import { z } from "zod";

const ContractualStatus = ["active", "inactive"] as const;
const EmploymentStatus = ["determined", "undetermined", "piva"] as const;

export const companySchema = z.object({
  id: z.number(),
  profile_id: z.number(),
  name: z.string(),
  start_date: z.string().nullable(),
  end_date: z.string().nullable(),
  contractual_status: z.enum(EmploymentStatus),
  employment_status: z.enum(ContractualStatus),
  logo: z.string(),
  logo_width: z.number(),
  logo_heigth: z.number(),
  logo_sizes: z.string(),
});

export type Company = z.infer<typeof companySchema>;
