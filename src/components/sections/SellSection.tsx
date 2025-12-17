"use client";

import { motion } from "framer-motion";
import { BedDouble, Bath, Square, ArrowRight, Search, Eye, CheckCircle2, MapPin, Building2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LISTINGS = {
  luxury: [
    {
      id: 1,
      title: "Villa Serenity",
      location: "Beverly Hills, CA",
      price: "$12,500,000",
      beds: 6,
      baths: 7,
      sqft: "8,500",
      image: "villaSerenity.jpg",
      tag: "Featured"
    },
    {
      id: 2,
      title: "The Glass House",
      location: "Malibu, CA",
      price: "$18,900,000",
      beds: 5,
      baths: 6,
      sqft: "6,200",
      image: "theGlassHouse.jpg",
      tag: "New"
    },
    {
      id: 3,
      title: "Modern Estate",
      location: "Bel Air, CA",
      price: "$15,200,000",
      beds: 7,
      baths: 8,
      sqft: "9,000",
      image: "modernEstate.jpg",
      tag: "Exclusive"
    }
  ],

  apartments: [
    {
      id: 4,
      title: "Skyline Penthouse",
      location: "Downtown LA",
      price: "$4,500,000",
      beds: 3,
      baths: 3,
      sqft: "3,200",
      image: "skylinePenthouse.jpg",
      tag: "Penthouse"
    },
    {
      id: 5,
      title: "Sunset Loft",
      location: "West Hollywood",
      price: "$2,800,000",
      beds: 2,
      baths: 2,
      sqft: "1,800",
      image: "sunsetLoft.jpg",
      tag: "Luxury"
    },
    {
      id: 6,
      title: "Marina View",
      location: "Santa Monica",
      price: "$3,200,000",
      beds: 2,
      baths: 2.5,
      sqft: "2,100",
      image: "marinaView.jpg",
      tag: "Waterfront"
    }
  ],

  commercial: [
    {
      id: 7,
      title: "Tech Hub Office",
      location: "Silicon Beach",
      price: "$8,000,000",
      beds: 0,
      baths: 4,
      sqft: "12,000",
      image: "techHubOffice.jpg",
      tag: "Office"
    },
    {
      id: 8,
      title: "Retail Space",
      location: "Rodeo Drive",
      price: "$15,000/mo",
      beds: 0,
      baths: 2,
      sqft: "2,500",
      image: "retailSpace.jpg",
      tag: "Lease"
    },
    {
      id: 9,
      title: "Creative Studio",
      location: "Arts District",
      price: "$5,500,000",
      beds: 0,
      baths: 2,
      sqft: "5,000",
      image: "creativeStudio.jpg",
      tag: "Industrial"
    }
  ],

  plots: [
    {
      id: 10,
      title: "Ocean Bluff",
      location: "Pacific Palisades",
      price: "$9,000,000",
      beds: 0,
      baths: 0,
      sqft: "2.5 Acres",
      image: "oceanBluff.jpg",
      tag: "Land"
    },
    {
      id: 11,
      title: "Canyon View",
      location: "Topanga",
      price: "$1,200,000",
      beds: 0,
      baths: 0,
      sqft: "5 Acres",
      image: "canyonView.jpg",
      tag: "Development"
    },
    {
      id: 12,
      title: "Vineyard Estate",
      location: "Napa Valley",
      price: "$4,500,000",
      beds: 0,
      baths: 0,
      sqft: "10 Acres",
      image: "vineyardEstate.jpg",
      tag: "Agricultural"
    }
  ]
};


const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Discover",
    description: "Browse our curated selection of premium properties.",
    icon: Search
  },
  {
    step: "02",
    title: "Visit",
    description: "Schedule a private tour with our expert agents.",
    icon: Eye
  },
  {
    step: "03",
    title: "Close",
    description: "Secure your dream home with a smooth process.",
    icon: CheckCircle2
  }
];

export function SellSection() {
  return (
    <section id="sell" className="py-20 md:py-32 bg-background relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl text-foreground"
          >
            Curated Collections
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl"
          >
            Explore our exclusive portfolio of properties tailored to your lifestyle.
          </motion.p>
        </div>

        <Tabs defaultValue="luxury" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-secondary/50 p-1 rounded-full border border-border">
              {Object.keys(LISTINGS).map((key) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="rounded-full px-6 py-2 capitalize data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
                >
                  {key}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.entries(LISTINGS).map(([key, items]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="group overflow-hidden border-border/50 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                      <div className={`h-64 w-full relative overflow-hidden ${item.image}`}>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-white/90 backdrop-blur-md text-foreground shadow-sm">
                            {item.tag}
                          </Badge>
                        </div>
                        {/* Placeholder for real image */}
                        <div className="h-64 w-full relative overflow-hidden">
                          <img
                            src={`${item.image}`}
                            alt={item.title}
                            className="h-full w-full object-cover"
                          />

                          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />

                          <div className="absolute top-4 left-4 text-muted-foreground/20">
                            <Badge className="bg-white/90 backdrop-blur-md text-foreground shadow-sm">{item.tag}</Badge>
                          </div>
                        </div>

                      </div>
                      <CardHeader className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
                              <MapPin className="h-3 w-3" /> {item.location}
                            </p>
                          </div>
                          <p className="font-semibold text-lg text-primary">{item.price}</p>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 pt-0">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          {item.beds > 0 && (
                            <div className="flex items-center gap-1">
                              <BedDouble className="h-4 w-4" />
                              <span>{item.beds} Beds</span>
                            </div>
                          )}
                          {item.baths > 0 && (
                            <div className="flex items-center gap-1">
                              <Bath className="h-4 w-4" />
                              <span>{item.baths} Baths</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <Square className="h-4 w-4" />
                            <span>{item.sqft}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                          Enquire Now
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* How it works */}
        <div className="mt-24 pt-16 border-t border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center text-xs font-bold text-muted-foreground">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-serif text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}