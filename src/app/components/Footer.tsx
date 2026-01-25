import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--deep-charcoal)] text-white">
      <div className="max-w-[1800px] mx-auto pl-8 pr-24 md:pr-44 pt-20 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Company info */}
          <div>
            <h3 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl mb-6 leading-tight">
              Shiv Om Industries
            </h3>
            <p className="text-base text-white/70 leading-relaxed mb-6">
              Premium natural sandstone manufacturer and
              exporter from Rajasthan, India. Serving global
              markets with architectural-grade stone products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-[0.15em] uppercase mb-6 text-white/90 font-medium">
              Quick Links
            </h4>
            <ul className="space-y-3 text-base text-white/70">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 inline-block"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 inline-block"
                >
                  Applications
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 inline-block"
                >
                  Export Process
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 inline-block"
                >
                  Quality Standards
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm tracking-[0.15em] uppercase mb-6 text-white/90 font-medium">
              Product Range
            </h4>
            <ul className="space-y-3 text-base text-white/70">
              <li>Basalt Stone</li>
              <li>Kandla Grey</li>
              <li>Mandana Red</li>
              <li>Autumn Brown</li>
              <li>Raj Green</li>
              <li>Snow White</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-[0.15em] uppercase mb-6 text-white/90 font-medium">
              Contact
            </h4>
            <ul className="space-y-4 text-base text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--muted-bronze)]" />
                <span>Rajasthan, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-[var(--muted-bronze)]" />
                <a
                  href="mailto:info@shivomindustries.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  info@shivomindustries.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-[var(--muted-bronze)]" />
                <a
                  href="tel:+91"
                  className="hover:text-white transition-colors duration-300"
                >
                  +91 8302732663
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar - extra right padding so sticky Request Quote doesn't cover links */}
        <div className="pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-base text-white/50">
            <div>
              &copy; 2026 Shiv Om Industries. All rights
              reserved.
            </div>
            <div className="flex gap-8">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Export Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
