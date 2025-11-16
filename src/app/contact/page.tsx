import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#132115] min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Decorative Elephant Images */}
        <div className="absolute top-20 left-8 md:left-20 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden opacity-90">
          <Image
            src="/images/elephant1.jpg"
            alt="Elephant"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute top-32 md:top-40 left-12 md:left-16 w-32 h-20 md:w-48 md:h-28 rounded-full overflow-hidden opacity-90">
          <Image
            src="/images/elephant1.jpg"
            alt="Elephant"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute top-24 md:top-32 right-12 md:right-24 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden opacity-90">
          <Image
            src="/images/elephant1.jpg"
            alt="Elephant"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute top-48 md:top-56 left-1/2 -translate-x-1/2 w-32 h-48 md:w-40 md:h-64 rounded-full overflow-hidden opacity-90">
          <Image
            src="/images/elephant1.jpg"
            alt="Elephant"
            fill
            className="object-cover"
          />
        </div>

        {/* Dotted Lines */}
        <div className="absolute top-48 left-32 md:left-52 w-px h-32 md:h-48 border-l-2 border-dotted border-gray-400 opacity-50" />
        <div className="absolute top-56 right-40 md:right-56 w-px h-32 md:h-48 border-l-2 border-dotted border-gray-400 opacity-50" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-[0.3em] mb-6">
            CONTACT US
          </h1>
          <p className="text-white text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you — let's protect and celebrate elephants
            together.
          </p>
        </div>

        {/* Curved Shapes at bottom */}
        <div className="absolute bottom-0 left-0 w-40 md:w-48 h-24 bg-[#fbf9f9] rounded-t-full" />
        <div className="absolute bottom-0 right-0 w-40 md:w-48 h-24 bg-[#fbf9f9] rounded-t-full" />

        {/* Scroll Down Button */}
        <button className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#132115] text-white px-8 py-4 rounded-full border border-white/20 hover:bg-[#1a2a1d] transition-colors">
          <span className="text-sm tracking-wider block mb-2">SCROLL DOWN</span>
          <svg
            className="w-5 h-5 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </section>

      {/* Send a Message Section */}
      <section className="py-16 md:py-24 px-6 bg-[#fbf9f9]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header with dotted lines */}
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-16">
            <div className="hidden md:block w-32 lg:w-48 border-t-2 border-dotted border-gray-400" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black tracking-wider text-center">
              SEND A MESSAGE
            </h2>
            <div className="hidden md:block w-32 lg:w-48 border-t-2 border-dotted border-gray-400" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Contact Info */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#355e3b] mb-6">
                Get in touch
              </h3>
              <p className="text-black text-lg mb-12">
                Join Us in Protecting and Celebrating Elephants
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#355e3b] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#272727] hover:text-[#355e3b] transition-colors text-lg font-semibold">
                      <a
                        href="mailto:akageraelephants@gmail.com"
                        className=""
                      >
                        akageraelephants@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#355e3b] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#272727] hover:text-[#355e3b] transition-colors text-lg font-semibold">
                      <a
                        href="tel:+250782191219"
                        className=""
                      >
                        +250 782 191 219
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#355e3b] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#272727] text-lg font-semibold">
                      Kigali, Rwanda
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border border-gray-200">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Full names"
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-[#355e3b] focus:outline-none text-black placeholder:text-gray-500 bg-transparent transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-[#355e3b] focus:outline-none text-black placeholder:text-gray-500 bg-transparent transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Message"
                    rows={6}
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-[#355e3b] focus:outline-none text-black placeholder:text-gray-500 bg-transparent resize-none transition-colors"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#355e3b] text-white px-10 py-3 rounded hover:bg-[#2a4a2e] transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Where to Find Us Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header with dotted lines */}
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-8">
            <div className="hidden md:block w-32 lg:w-48 border-t-2 border-dotted border-gray-400" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black tracking-wider text-center">
              Where to Find Us
            </h2>
            <div className="hidden md:block w-32 lg:w-48 border-t-2 border-dotted border-gray-400" />
          </div>

          <p className="text-center text-black text-lg mb-12 max-w-3xl mx-auto">
            Come find us where stories of elephants and people meet — in the
            heart of Akagera.
          </p>

          {/* Google Map Embed */}
          <div className="w-full h-[400px] md:h-[500px] border-4 border-dashed border-gray-300 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255046.26720890056!2d30.513916834697288!3d-1.6375822473456634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19ddb6c1e3d3f741%3A0x2b8a3e6e8e7e8e8e!2sAkagera%20National%20Park!5e0!3m2!1sen!2srw!4v1234567890123!5m2!1sen!2srw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
