import ContactForm from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-rabat-beige pt-24">
      
      {/* Header */}
      <div className="bg-rabat-navy text-white py-16 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Get in Touch</h1>
          <p className="text-rabat-sand text-lg max-w-xl mx-auto">
            Ready to elevate your property’s potential? Our team is ready to assist you.
          </p>
        </div>
        {/* Pattern Overlay */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Contact Info & Map */}
          <div className="space-y-12">
            
            {/* Text Info */}
            <div>
              <h2 className="font-serif text-3xl text-rabat-navy mb-6">Visit Our Office</h2>
              <div className="space-y-6 text-slate-600">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-rabat-sand">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-rabat-navy">Headquarters</h3>
                    <p>12 Avenue Annakhil, Hay Riad<br />Rabat, Morocco 10100</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-rabat-sand">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-rabat-navy">Phone</h3>
                    <p>+212 5 37 00 00 00</p>
                    <p className="text-sm text-slate-400">Mon-Fri, 9am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-rabat-sand">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-rabat-navy">Email</h3>
                    <p>contact@rabatkeys.ma</p>
                    <p>owners@rabatkeys.ma</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-slate-200 rounded-lg relative overflow-hidden shadow-inner border border-slate-300">
               {/* In production, replace this with a Google Maps Embed or Leaflet component */}
               <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
                  <div className="text-center">
                    <MapPin className="w-10 h-10 mx-auto mb-2 opacity-50" />
                    <span className="text-sm font-medium">Interactive Map Loading...</span>
                  </div>
               </div>
            </div>

          </div>

          {/* Right Column: The Form */}
          <div className="relative">
            <ContactForm />
            {/* Decorative blobs behind form */}
            <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-rabat-teal/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-rabat-sand/10 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </main>
  );
}