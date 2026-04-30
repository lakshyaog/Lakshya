"use client";
import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/hover-slider";
import { TypographyH2 } from "@/components/ui/typography";
import RevealAnimation from "@/components/reveal-animations";
import SectionWrapper from "@/components/ui/section-wrapper";

// Certificate data - using local images from public/assets/certificates
const certificates = [
  {
    title: "Developing Secure Software",
    issuer: "The Linux Foundation",
    date: "2025",
    image: "/assets/certificates/linuxfoundation.png",
  },
  {
    title: "Google Cloud Developer",
    issuer: "Google Developers",
    date: "2025",
    image: "/assets/certificates/googledevelopers .png",
  },
  {
    title: "NASA Space Apps Challenge",
    issuer: "NASA",
    date: "2025",
    image: "/assets/certificates/nasa space.png",
  },
  {
    title: "AI Arena Competition",
    issuer: "AI Arena",
    date: "2025",
    image: "/assets/certificates/ai arena.png",
  },
  {
    title: "HackShastra Hackathon",
    issuer: "HackShastra",
    date: "2025",
    image: "/assets/certificates/hackshastra.png",
  },
  {
    title: "HackLoop Hackathon",
    issuer: "HackLoop",
    date: "2025",
    image: "/assets/certificates/hackloop.png",
  },
  {
    title: "Dexterix Competition",
    issuer: "Dexterix",
    date: "2025",
    image: "/assets/certificates/Dexterix.png",
  },
];

export default function Certificates() {
  return (
    <SectionWrapper id="certificates" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <RevealAnimation>
          <TypographyH2 className="text-center mb-4">
            Certifications & Badges
          </TypographyH2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional certifications and hackathon achievements from The Linux Foundation, Google, NASA, and various competitive programming events
          </p>
          
          {/* Profile Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link 
              href="https://www.credly.com/users/lakshya-solanki.48a1bbbc/badges" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                <ExternalLink size={16} />
                View Credly Profile
              </Button>
            </Link>
            <Link 
              href="https://developers.google.com/profile/u/104706084926313078247" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                <ExternalLink size={16} />
                View Google Developer Profile
              </Button>
            </Link>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.2}>
          <HoverSlider className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left side - Certificate titles */}
              <div className="space-y-6 order-2 lg:order-1">
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer"
                  >
                    <TextStaggerHover
                      text={cert.title}
                      index={index}
                      className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight hover:text-[hsl(20,100%,70%)] transition-colors"
                    />
                    <div className="mt-2 text-sm md:text-base text-muted-foreground">
                      <p className="font-medium">{cert.issuer}</p>
                      <p className="text-xs">{cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right side - Certificate images */}
              <div className="order-1 lg:order-2">
                <HoverSliderImageWrap className="aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-white dark:bg-slate-900">
                  {certificates.map((cert, index) => (
                    <HoverSliderImage
                      key={index}
                      index={index}
                      imageUrl={cert.image}
                      src={cert.image}
                      alt={cert.title}
                      className="object-contain w-full h-full p-4"
                    />
                  ))}
                </HoverSliderImageWrap>
              </div>
            </div>
          </HoverSlider>
        </RevealAnimation>
      </div>
    </SectionWrapper>
  );
}
