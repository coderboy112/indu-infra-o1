"use client";

import { motion } from "framer-motion";
import { User, Check, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TEAM = [
  {
    name: "Sarah Jenkins",
    role: "Senior Broker",
    bio: "15 years of luxury real estate experience in Beverly Hills.",
  },
  {
    name: "David Chen",
    role: "Architectural Specialist",
    bio: "Expert in modern architecture and historic restorations.",
  },
  {
    name: "Elena Rodriguez",
    role: "Client Relations",
    bio: "Ensuring every client journey is smooth and memorable.",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Content */}
          <div className="space-y-8">
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <h2 className="font-serif text-3xl md:text-5xl mb-6">Meet the artisans of your experience.</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Our team is not just about transactions; we are about curating a lifestyle. With decades of combined experience, we guide you with discretion and expertise.
                </p>
                
                <div className="space-y-4">
                  <h3 className="font-medium text-foreground uppercase tracking-wider text-sm">Why clients trust us</h3>
                  <ul className="space-y-3">
                    {["Unmatched local market knowledge", "Discreet and personalized service", "Access to off-market listings"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
             </motion.div>
          </div>

          {/* Right: Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TEAM.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={index === 2 ? "sm:col-span-2 sm:w-2/3 sm:mx-auto" : ""}
              >
                <Card className="border-none shadow-md bg-white/50 dark:bg-zinc-800/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                       <User className="h-10 w-10 text-muted-foreground/50" />
                    </div>
                    <h3 className="font-serif text-lg font-medium">{member.name}</h3>
                    <p className="text-xs text-primary font-medium uppercase tracking-wide mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
