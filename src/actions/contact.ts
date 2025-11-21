"use server";

import { contactFormSchema, ContactFormValues } from "@/lib/schemas";

/**
 * Handles the submission of the Contact Form using Zod validation.
 * @param formData - The form data object received directly from the client.
 */
export async function submitContactForm(formData: ContactFormValues) {
    try {
        // 1. Zod Validation: Parse and validate the incoming data
        // This throws an error if validation fails
        const validatedData = contactFormSchema.parse(formData);

        // 2. Business Logic (Simulated)
        console.log("✅ Server Action: Validation Successful.");
        console.log("📩 Sending email to contact@rabatkeys.ma with data:", validatedData);

        // --- PRODUCTION STEP ---
        // In a real application, this is where you would:
        // 1. Send the email using a service like Resend/SendGrid/Nodemailer.
        // 2. Save the lead data to a CRM or database (e.g., using Prisma/Drizzle).
        // -----------------------

        // Simulate success delay (API latency)
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // 3. Return a successful status
        return {
            success: true,
            message: "Your inquiry has been successfully sent to RabatKeys.",
        };

    } catch (error) {
        // 4. Handle Errors (Validation or Internal)
        if (error instanceof Error) {
             // For production, you might want more specific error messages here
             return {
                success: false,
                message: "Submission failed. Please check your inputs and try again.",
            };
        }
        
        // Return a generic fallback error
        return {
            success: false,
            message: "An unexpected error occurred on the server.",
        };
    }
}