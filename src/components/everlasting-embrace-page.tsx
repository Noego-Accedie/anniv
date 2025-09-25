"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FilledHeartIcon } from "@/components/icons/filled-heart-icon";

const staticReasons = [
  "I love the cute things you do for us; the outfit matching, the couple app, and the unfinished couples pfp.",
  "Your support and belief in me makes me feel better about myself.",
  "You're cute and pretty and fashionable, I want to walk around and show you off.",
  "You're sociable, bubbly, friendly and fun to see people around you.",
  "I love starting everyday with a good morning from you.",
  "My world is a brighter place with you in it.",
  "Your pictures and video notes always make me smile, in the middle of whatever I was doing.",
  "I like talking with you everyday, and seeing you through video calls.",
  "The creative ideas that you do for our important days keeps me anticipating.",
  "I love being with you physically, we always make show our affection for one another."
];

const images = [
  "./images/cute.jpg",
  "./images/look.jpg",
  "./images/cake.jpg",
  "./images/appday.jpg",
  "./images/armneck.jpg",
  "./images/sunset.jpg",
  "./images/park.jpg",
  "./images/mdhold.jpg",
  "./images/imm.jpg",
  "./images/kiss.jpg"
]

const next = [
  "Next",
  "And",
  "There's more",
  "But also",
  "And and and",
  "Also",
  "I love this too",
  "That's not all",
  "And uh",
  "And I'll say it again and again"
]

export default function EverlastingEmbracePage() {
  const [currentReasonIndex, setCurrentReasonIndex] = useState(0);

  function showNextReason() {
    setCurrentReasonIndex((prevIndex) => (prevIndex + 1) % staticReasons.length);
  }

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <header className="py-8 text-center">
        <h1 className="font-headline text-5xl md:text-7xl text-primary tracking-wider">
          A forever reminder
        </h1>
        <p className="mt-2 text-lg text-accent-foreground">
          I love you, today and always.
        </p>
      </header>

      <main className="flex-1 container mx-auto px-4 pb-16 flex flex-col justify-center items-center space-y-8">


        <Card
          key={currentReasonIndex}
          className="w-full max-w-2xl animate-fade-in-up shadow-lg border-primary/20 bg-card/80 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-2xl aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                  src={images[currentReasonIndex]}
                  alt="A romantic, loving image"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                  data-ai-hint="couple love"
              />
          </div>
          <CardHeader className="flex-row items-start gap-4 space-y-0 p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <FilledHeartIcon className="h-6 w-6" />
            </span>
            <div>
              <CardTitle className="font-body text-xl">Reason #{currentReasonIndex + 1}</CardTitle>
              <p className="text-foreground/80 leading-relaxed pt-2">{staticReasons[currentReasonIndex]}</p>
            </div>
          </CardHeader>
        </Card>

        <Button
          onClick={showNextReason}
          className="text-lg py-6 px-8 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 transform hover:scale-105"
        >
          {next[currentReasonIndex]}
        </Button>
      </main>

      <footer className="text-center py-6 text-muted-foreground text-sm">
        <p>Made with <FilledHeartIcon className="inline-block h-4 w-4 text-primary" /> for the one I love.</p>
      </footer>
    </div>
  );
}
