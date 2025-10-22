"use client";

import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const navItems = ["Home", "About", "Portfolio", "Services", "Contact"];

  return (
    <footer className="bg-[#0a2540] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Logo */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center mb-4">
              <Image
                src="/main-logo.svg"
                alt="Main Logo"
                width={140}
                height={50}
                priority
                className="object-contain"
              />
            </a>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
              Emmanuel Biloli
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Creative graphic designer passionate about crafting visual
              experiences that tell compelling stories and drive meaningful
              connections.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="p-2 rounded-lg bg-[#0a2540]/80 transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-400 hover:via-orange-500 hover:to-orange-600"
                >
                  <Icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-400" />
                <span className="text-gray-300 text-sm">365biloli@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-400" />
                <span className="text-gray-300 text-sm">+254 719 172 691</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-orange-400" />
                <span className="text-gray-300 text-sm">NAIROBI, KENYA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-500/30 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Emmanuel Biloli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
