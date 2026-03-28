import z from "zod";
// ---------- CONTACT US PAGE ----------

export const contactSchema = z.object({
  type: z.enum(["say-hi", "get-quote"]),
  name: z
    .string()
    .min(5, "Name must be at least 5 characters.")
    .max(32, "Name must be at most 32 characters."),
  email: z
    .string()
    .min(5, "Email must be at least 5 characters.")
    .max(32, "Email must be at most 32 characters."),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters.")
    .max(100, "Message must be at most 100 characters."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
