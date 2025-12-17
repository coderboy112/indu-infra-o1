"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Home } from "lucide-react";
import { BRAND } from "@/config/brand";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
               <div className="bg-primary/10 p-2 rounded-lg">
                  <Home className="h-5 w-5 text-primary" />
                </div>
                <span className="font-serif text-xl font-medium tracking-tight">
                  {BRAND.name}
                </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {BRAND.tagline}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#home" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#sell" className="hover:text-primary transition-colors">Listings</Link></li>
              <li><Link href="#team" className="hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter (Simplified) */}
          <div>
             <h4 className="font-medium mb-4">Office</h4>
             <p className="text-sm text-muted-foreground mb-2">{BRAND.contact.address}</p>
             <p className="text-sm text-muted-foreground mb-2">{BRAND.contact.phone}</p>
             <p className="text-sm text-muted-foreground">{BRAND.contact.email}</p>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {currentYear} {BRAND.name}. All rights reserved.</p>
          <p>Designed with care.</p>
        </div>
      </div>
    </footer>
  );
}
