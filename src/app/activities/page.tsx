'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Zap, Search } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

type GalleryImage = {
  src: string;
  hint: string;
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
      },
      {
        src: '/outreach_2.png',
        hint: 'robot demonstration',
      },
      {
        src: 'https://placehold.co/600x400.png',
        hint: 'team presenting school',
      },
       {
        src: 'https://placehold.co/600x400.png',
        hint: 'excited children robots',
      },
    ],
  },
  {
    title: 'Fundraising Events',
    description:
      "To support our project, we host a variety of fundraising events. Our pickleball tournaments are a great way to bond as a team and engage with the community, while our weekly pizza sales fuel our late-night build sessions and our budget. Every Friday, we sell delicious pizza on campus!",
    gallery: [
      {
        src: '/pickleball_1.png',
        hint: 'pickleball tournament sport',
      },
      {
        src: '/pickleball_2.png',
        hint: 'team playing pickleball',
      },
      {
        src: '/pickleball_3.png',
        hint: 'community event fundraiser',
      },
       {
        src: '/pickleball_4.png',
        hint: 'pickleball action shot',
      },
      {
        src: '/pizza_sale_1.jpg',
        hint: 'pizza food sales',
      },
      {
        src: '/billar_1.jpg',
        hint: 'students buying pizza',
      },
      {
        src: 'https://placehold.co/600x400.png',
        hint: 'team selling food',
      },
      {
        src: 'https://placehold.co/600x400.png',
        hint: 'close up pizza',
      },
    ],
  },
];


export default function ActivitiesPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

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
                  {activity.gallery.map((image, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
                      onClick={() => setSelectedImage(image)}
                    >
                      <Image
                        src={image.src}
                        alt={`${activity.title} gallery photo ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.hint}
                      />
                       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Search className="h-10 w-10 text-white" />
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
        open={!!selectedImage}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setSelectedImage(null);
          }
        }}
      >
        <DialogContent className="max-w-5xl p-2 border-0 bg-transparent shadow-none">
          {selectedImage && (
            <Image
              src={selectedImage.src.replace(/(\d+x\d+)/, '1200x800')}
              alt="Expanded activity photo"
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-lg"
              data-ai-hint={selectedImage.hint}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
