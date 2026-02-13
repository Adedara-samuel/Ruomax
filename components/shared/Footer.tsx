import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Ruomax"
                width={100}
                height={60}
                className="h-16 w-20 mb-4"
              />
            </Link>
            <p className="text-sm opacity-80 mb-4">
              Premium real estate solutions for your perfect property. Buy, rent, or lease with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/" className="hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:opacity-100 transition-opacity">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/properties?category=buy" className="hover:opacity-100 transition-opacity">
                  Buy Property
                </Link>
              </li>
              <li>
                <Link href="/properties?category=rent" className="hover:opacity-100 transition-opacity">
                  Rent Property
                </Link>
              </li>
              <li>
                <Link href="/properties?category=lease" className="hover:opacity-100 transition-opacity">
                  Lease Property
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:opacity-100 transition-opacity">
                  My Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+234 814 630 8816</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span> ruonarita@gmail.com  </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>House 8 Jed’s court estate opposite lagos business school ajah</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm opacity-70">
          <p>&copy; 2026 Ruomax. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:opacity-100 transition-opacity">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:opacity-100 transition-opacity">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
