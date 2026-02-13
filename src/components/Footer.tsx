import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/34.png"
                alt="Bylart Logo"
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
                  BYLART
                </span>
                <span className="text-xs text-emerald-200">
                  Bach Flower Therapy
                </span>
              </div>
            </div>
            <p className="text-sm text-emerald-100 leading-relaxed">
              Nurturing emotional balance and blossoming wellness through the transformative power of Bach flower therapy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-300 transition-colors duration-300 transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-emerald-300 transition-colors duration-300 transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-emerald-300 transition-colors duration-300 transform hover:scale-110">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-emerald-100 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/remedies/introduction" className="text-emerald-100 hover:text-white transition-colors duration-200">
                  Bach Flower Remedies
                </Link>
              </li>
              <li>
                <Link to="/therapists/find" className="text-emerald-100 hover:text-white transition-colors duration-200">
                  Find A Therapist
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-emerald-100 hover:text-white transition-colors duration-200">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-emerald-100 hover:text-white transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blogs" className="text-emerald-100 hover:text-white transition-colors duration-200">
                  Blogs & News
                </Link>
              </li>
              <li>
                <Link to="/expert-advice" className="text-emerald-100 hover:text-white transition-colors duration-200">
                  Expert Advice
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-emerald-100 hover:text-white transition-colors duration-200">
                  Further Reading
                </Link>
              </li>
              <li>
                <Link to="/remedies/seven-groups" className="text-emerald-100 hover:text-white transition-colors duration-200">
                  Seven Bach Flower Groups
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm text-emerald-100">info@bylart.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm text-emerald-100">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm text-emerald-100">Holistic Healing Center<br />123 Wellness Street</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-8 pt-8 text-center">
          <p className="text-sm text-emerald-200">
            &copy; {new Date().getFullYear()} BYLART Bach Flower Therapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
