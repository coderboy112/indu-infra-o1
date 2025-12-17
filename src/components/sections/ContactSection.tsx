"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { BRAND } from "@/config/brand";
import { Label } from "@/components/ui/label";

export function ContactSection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate submission
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Info */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Begin your journey.</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you are looking to buy, sell, or simply explore the possibilities, our team is here to provide personalized guidance.
              </p>
            </motion.div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Phone</h3>
                  <p className="text-muted-foreground">{BRAND.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Email</h3>
                  <p className="text-muted-foreground">{BRAND.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Office</h3>
                  <p className="text-muted-foreground max-w-xs">{BRAND.contact.address}</p>
                </div>
              </div>
            </div>

            {/* Mini Map Placeholder */}
            <div className="h-48 w-full bg-secondary/50 rounded-xl border border-border flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Beverly+Hills,CA&zoom=13&size=600x300&sensor=false')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all" />
               <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm z-10 text-xs font-medium flex items-center gap-2">
                 <MapPin className="h-3 w-3 text-primary" />
                 View on Map
               </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl border border-border/50">
             {formState === 'success' ? (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="h-full flex flex-col items-center justify-center text-center py-20"
               >
                 <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-6">
                   <Check className="h-8 w-8" />
                 </div>
                 <h3 className="font-serif text-2xl mb-2">Message Sent</h3>
                 <p className="text-muted-foreground">Thank you for reaching out. We will get back to you shortly.</p>
                 <Button variant="link" onClick={() => setFormState('idle')} className="mt-4">
                   Send another message
                 </Button>
               </motion.div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="John Doe" required className="bg-secondary/20" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="+1 (555) 000-0000" type="tel" className="bg-secondary/20" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required className="bg-secondary/20" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select>
                      <SelectTrigger className="bg-secondary/20">
                        <SelectValue placeholder="Select a range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5m">$1M - $5M</SelectItem>
                        <SelectItem value="5-10m">$5M - $10M</SelectItem>
                        <SelectItem value="10m+">$10M+</SelectItem>
                        <SelectItem value="rent">Looking to Rent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your property needs..." 
                      className="min-h-[120px] bg-secondary/20"
                      required 
                    />
                  </div>

                  <Button type="submit" className="w-full h-12 text-base" disabled={formState === 'submitting'}>
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>
               </form>
             )}
          </div>

        </div>
      </div>
    </section>
  );
}
