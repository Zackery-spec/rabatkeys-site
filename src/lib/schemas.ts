import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(9, { message: "Please enter a valid phone number." }),
  propertyType: z.enum(["Apartment", "Villa", "Riad", "Commercial", "Other"], {
    errorMap: () => ({ message: "Please select a property type." }),
  }),
  message: z.string().min(10, { message: "Please provide a bit more detail (min 10 chars)." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;