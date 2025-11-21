"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";
import { Loader2, Send } from "lucide-react";
import { submitContactForm } from "@/actions/contact"; // 👈 IMPORT THE SERVER ACTION

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    setStatusMessage('');
    
    // Call the Server Action
    const result = await submitContactForm(data);

    setIsSubmitting(false);

    if (result.success) {
      setSubmissionStatus('success');
      setStatusMessage(result.message);
      reset(); // Clear form on successful submission
    } else {
      setSubmissionStatus('error');
      setStatusMessage(result.message);
    }
  }

  // --- Display Status Message based on the submission result ---
  const renderStatusBox = () => {
    if (submissionStatus === 'success') {
      return (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-in fade-in">
          <h3 className="text-xl font-serif text-green-800 mb-2">Success!</h3>
          <p className="text-green-700">{statusMessage}</p>
          <button 
            onClick={() => setSubmissionStatus('idle')}
            className="mt-4 text-sm font-bold text-green-800 underline hover:text-green-900"
          >
            Send another message
          </button>
        </div>
      );
    }
    if (submissionStatus === 'error') {
      return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center animate-in fade-in">
          <h3 className="text-xl font-serif text-red-800 mb-2">Error</h3>
          <p className="text-red-700">{statusMessage}</p>
          <button 
            onClick={() => setSubmissionStatus('idle')}
            className="mt-4 text-sm font-bold text-red-800 underline hover:text-red-900"
          >
            Try Again
          </button>
        </div>
      );
    }
    return null; // Return null when idle
  };

  // If we have a status, render the status box instead of the form
  if (submissionStatus !== 'idle') {
    return renderStatusBox();
  }
  // -----------------------------------------------------------

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-lg shadow-lg border-t-4 border-rabat-sand">
      
      {/* Name */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-rabat-navy">Full Name</label>
        <input
          {...register("name")}
          id="name"
          placeholder="e.g. Amine Tazi"
          className={`w-full p-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-rabat-sand transition ${
            errors.name ? "border-red-500" : "border-slate-200"
          }`}
        />
        {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-rabat-navy">Email Address</label>
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder="amine@example.com"
            className={`w-full p-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-rabat-sand transition ${
              errors.email ? "border-red-500" : "border-slate-200"
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-rabat-navy">Phone Number</label>
          <input
            {...register("phone")}
            id="phone"
            type="tel"
            placeholder="+212 6..."
            className={`w-full p-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-rabat-sand transition ${
              errors.phone ? "border-red-500" : "border-slate-200"
            }`}
          />
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
        </div>
      </div>

      {/* Property Type */}
      <div className="space-y-2">
        <label htmlFor="propertyType" className="text-sm font-medium text-rabat-navy">Property Type</label>
        <select
          {...register("propertyType")}
          id="propertyType"
          className={`w-full p-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-rabat-sand bg-white transition ${
            errors.propertyType ? "border-red-500" : "border-slate-200"
          }`}
        >
          <option value="">Select a type...</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Riad">Riad</option>
          <option value="Commercial">Commercial / Office</option>
          <option value="Other">Other</option>
        </select>
        {errors.propertyType && <p className="text-red-500 text-xs">{errors.propertyType.message}</p>}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-rabat-navy">How can we help?</label>
        <textarea
          {...register("message")}
          id="message"
          rows={4}
          placeholder="Tell us about your property location, size, and goals..."
          className={`w-full p-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-rabat-sand transition ${
            errors.message ? "border-red-500" : "border-slate-200"
          }`}
        />
        {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-rabat-navy text-white font-bold py-4 px-8 rounded-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2 uppercase tracking-wider disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
          </>
        ) : (
          <>
            Send Message <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}