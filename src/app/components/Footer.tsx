import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--deep-charcoal)] text-white">
      <div className="max-w-[1600px] mx-auto pl-8 pr-24 md:pr-44 pt-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div>
            <h3 className="font-['Cormorant_Garamond'] text-2xl mb-4">
              Shiv Om Industries
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Premium natural sandstone manufacturer and
              exporter from Rajasthan, India. Serving global
              markets with architectural-grade stone products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-[0.1em] uppercase mb-4 text-white/90">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Applications
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Export Process
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Quality Standards
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm tracking-[0.1em] uppercase mb-4 text-white/90">
              Product Range
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
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
            <h4 className="text-sm tracking-[0.1em] uppercase mb-4 text-white/90">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--muted-bronze)]" />
                <span>Rajasthan, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-[var(--muted-bronze)]" />
                <a
                  href="mailto:info@shivomindustries.com"
                  className="hover:text-white transition-colors"
                >
                  info@shivomindustries.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-[var(--muted-bronze)]" />
                <a
                  href="tel:+91"
                  className="hover:text-white transition-colors"
                >
                  +91 8302732663
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar - extra right padding so sticky Request Quote doesn't cover links */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <div>
              &copy; 2026 Shiv Om Industries. All rights
              reserved.
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
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
