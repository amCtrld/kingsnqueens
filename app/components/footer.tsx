import Link from "next/link"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="serif-subtitle text-primary-foreground mb-4">Kings & Queens</h3>
            <p className="text-sm opacity-90">A royal taste in every bite. Experience fine dining at its finest.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline opacity-90 hover:opacity-100">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:underline opacity-90 hover:opacity-100">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline opacity-90 hover:opacity-100">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline opacity-90 hover:opacity-100">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Kwame Nkrumah Road, Thika</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:underline">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@kingsqueens.cafe" className="hover:underline">
                  info@kingsqueens.cafe
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>
            &copy; 2025 Kings & Queens Restaurant. All rights reserved. |{" "}
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>{" "}
            |{" "}
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
