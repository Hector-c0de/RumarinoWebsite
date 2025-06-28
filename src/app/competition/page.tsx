'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileText, Trophy, Video, Camera, Search, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent } from '@/components/ui/dialog';

type GalleryItem = {
  src: string;
  hint: string;
  type: 'image' | 'video';
  thumbnail?: string;
};

const gallery2024: GalleryItem[] = [
  {
    src: '/robosub_2024_1.mp4',
    hint: 'RoboSub 2024 recap video',
    type: 'video',
    thumbnail: 'https://placehold.co/1200x675.png',
  },
  {
    src: 'https://placehold.co/400x400.png',
    hint: 'underwater robot action',
    type: 'image',
  },
  {
    src: 'https://placehold.co/400x400.png',
    hint: 'team working robot',
    type: 'image',
  },
  {
    src: 'https://placehold.co/400x400.png',
    hint: 'team celebrating success',
    type: 'image',
  }
];


export default function CompetitionPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <>
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent/10 text-accent p-4 rounded-full mb-4">
            <Trophy className="h-10 w-10" />
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Competition Journey</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            Following our path through the annual RoboSub competition.
          </p>
        </div>

        {/* RoboSub 2025 Section */}
        <section id="robosub2025" className="mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">RoboSub 2025</h2>
            <p className="text-muted-foreground pt-2 mb-6">Our focus for the current season.</p>
            
            <div className="space-y-6">
                <div>
                    <h3 className="font-bold text-xl mb-2">Our Strategy</h3>
                    <p className="text-muted-foreground max-w-4xl">
                    This year, our strategy revolves around enhancing our AUV's perception and decision-making capabilities. We are implementing a new multi-sensor fusion algorithm and a more robust mission planner to tackle the complex tasks of RoboSub 2025. Our mechanical design features a modular system for quick adjustments and repairs during the competition.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg">
                    <Link href="#">
                        <Video className="mr-2 h-5 w-5" />
                        Team Video 2025
                    </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                    <a href="/TDR.pdf" download="Rumarino-TDR-2025.pdf">
                        <FileText className="mr-2 h-5 w-5" />
                        Download TDR
                    </a>
                    </Button>
                </div>
            </div>
        </section>

        <Separator className="my-16"/>

        {/* RoboSub 2024 Section */}
        <section id="robosub2024" className="mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">RoboSub 2024</h2>
            <p className="text-muted-foreground pt-2 mb-8">A look back at our performance last year.</p>

            <div className="space-y-8">
                <div className="flex flex-col sm:flex-row gap-4">
                     <Button asChild>
                        <Link href="#">
                            <Video className="mr-2 h-5 w-5" />
                            Watch 2024 Recap
                        </Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="#">
                            <FileText className="mr-2 h-5 w-5" />
                            View 2024 TDR
                        </Link>
                    </Button>
                </div>

                <div>
                    <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><Camera className="h-5 w-5 text-accent"/>Competition Gallery</h3>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {gallery2024.map((item, idx) => (
                          <div
                            key={idx}
                            className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
                            onClick={() => setSelectedItem(item)}
                          >
                            <Image
                              src={item.type === 'video' ? item.thumbnail! : item.src}
                              alt={`RoboSub 2024 gallery item ${idx + 1}`}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              data-ai-hint={item.hint}
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              {item.type === 'video' ? (
                                <PlayCircle className="h-12 w-12 text-white" />
                              ) : (
                                <Search className="h-10 w-10 text-white" />
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        
        <Separator className="my-16"/>

        {/* Previous Competitions */}
        <div className="text-center text-muted-foreground">
          <p>Previous competition history coming soon as we continue to document our journey.</p>
        </div>

      </div>
    </div>
      <Dialog
        open={!!selectedItem}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setSelectedItem(null);
          }
        }}
      >
        <DialogContent className="max-w-5xl w-full p-0 border-0 bg-transparent shadow-none">
          {selectedItem && (
            <>
              {selectedItem.type === 'image' ? (
                <Image
                  src={selectedItem.src.replace(/(\d+x\d+)/, '1200x800')}
                  alt="Expanded competition media"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain rounded-lg"
                  data-ai-hint={selectedItem.hint}
                />
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
