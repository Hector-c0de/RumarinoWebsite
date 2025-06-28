'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, PlayCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

type GalleryItem = {
  src: string;
  hint: string;
  type: 'image' | 'video';
  thumbnail?: string; // Optional thumbnail for videos
};

const activities = [
  {
    title: 'Community Outreach',
    description:
      'We believe in sharing our passion for robotics. We regularly visit local schools and community centers to demonstrate our AUV and inspire the next generation of engineers.',
    gallery: [
      {
        src: '/outreach_1.jpg',
        hint: 'students robotics workshop',
        type: 'image',
      },
      {
        src: '/outreach_2.jpeg',
        hint: 'robot demonstration',
        type: 'image',
      },
      {
        src: 'https://placehold.co/600x400.png',
        hint: 'team presenting school',
        type: 'image',
      },
      {
        src: 'https://placehold.co/600x400.png',
        hint: 'excited children robots',
        type: 'image',
      },
    ] as GalleryItem[],
  },
  {
    title: 'Fundraising Events',
    description:
      "To support our project, we host a variety of fundraising events. Our pickleball tournaments are a great way to bond as a team and engage with the community, while our weekly pizza sales fuel our late-night build sessions and our budget. Every Friday, we sell delicious pizza on campus!",
    gallery: [
      {
        src: '/pickleball_1.jpeg',
        hint: 'pickleball tournament sport',
        type: 'image',
      },
      {
        src: '/pickleball_2.jpeg',
        hint: 'team playing pickleball',
        type: 'image',
      },
      {
        src: '/pickleball_3.jpeg',
        hint: 'community event fundraiser',
        type: 'image',
      },
      {
        src: '/pickleball_4.jpeg',
        hint: 'pickleball action shot',
        type: 'image',
      },
      {
        src: '/pickleball_5.jpg',
        hint: 'team bonding pickleball',
        type: 'image',
      },
      {
        src: '/pizza_sale_1.jpg',
        hint: 'pizza food sales',
        type: 'image',
      },
      {
        src: '/pizza_sale_2.jpg',
        hint: 'pizza sale event',
        type: 'image',
      },
      {
        src: '/pizza_sale_3.jpg',
        hint: 'students enjoying pizza',
        type: 'image',
      },
      {
        src: '/billar_1.jpg',
        hint: 'students buying pizza',
        type: 'image',
      },
    ] as GalleryItem[],
  },
];


export default function ActivitiesPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">

          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Team Activities
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            Beyond the workshop, our team is active in fundraising and community
            engagement. Here's a look at what we do.
          </p>
        </div>

        <div className="space-y-16">
          {activities.map((activity, index) => (
            <React.Fragment key={activity.title}>
              <section>
                <div className="max-w-4xl mx-auto mb-8">
                  <h2 className="font-headline text-3xl font-bold mb-4">{activity.title}</h2>
                  <p className="text-muted-foreground">
                    {activity.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {activity.gallery.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
                      onClick={() => setSelectedItem(item)}
                    >
                      <Image
                        src={item.type === 'video' ? item.thumbnail || 'https://placehold.co/600x400.png' : item.src}
                        alt={`${activity.title} gallery item ${idx + 1}`}
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
              </section>
              {index < activities.length - 1 && <Separator className="my-16" />}
            </React.Fragment>
          ))}
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
          <DialogHeader className="sr-only">
            <DialogTitle>Expanded Media View</DialogTitle>
          </DialogHeader>
          {selectedItem && (
            <>
              {selectedItem.type === 'image' ? (
                <Image
                  src={selectedItem.src.replace(/(\d+x\d+)/, '1200x800')}
                  alt="Expanded activity photo"
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
