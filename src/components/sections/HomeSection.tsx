"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Star, Sparkles } from "lucide-react";

export function HomeSection() {
  return (
    <section id="home" className="pt-24 pb-8 md:pt-32 md:pb-12 bg-secondary/30 border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="h-px w-8 bg-primary/50 hidden md:block" />
            <span className="text-sm md:text-base font-medium tracking-wider text-muted-foreground uppercase">
              Trusted Real Estate Partner
            </span>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-4">
            {[
              { icon: ShieldCheck, text: "Verified Listings" },
              { icon: Star, text: "Local Expertise" },
              { icon: Sparkles, text: "End-to-End Support" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-2 text-foreground/80"
              >
                <item.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
