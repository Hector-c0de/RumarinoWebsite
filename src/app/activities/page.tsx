import { Users, ArrowRight } from 'lucide-react';

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#171919] to-black overflow-hidden">

        {/* Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00A68C20,transparent_60%)]"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">

          <div className="inline-block mb-8">
            <div className="flex items-center justify-center gap-3">
              <div className="w-16 h-1.5 bg-gradient-to-r from-[#1FB355] to-[#51DFC9] rounded-full"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-[#1FB355] to-[#51DFC9] rotate-45"></div>
              <div className="w-16 h-1.5 bg-gradient-to-r from-[#51DFC9] to-[#1FB355] rounded-full"></div>
            </div>
          </div>

          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-6">
            <span className="bg-gradient-to-r from-[#1FB355] via-[#51DFC9] to-white bg-clip-text text-transparent">
              BEYOND THE ROBOT
            </span>
          </h1>

          <p className="font-roboto text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At RUMarino, we build more than autonomous vehicles. 
            We build community, leadership, innovation, and lifelong experiences.
          </p>
        </div>
      </section>

      {/* COMPETITIONS */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#00A68C] via-[#51DFC9] to-white bg-clip-text text-transparent">
                COMPETITIONS & CHALLENGES
              </span>
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Proving our skills in engineering, innovation, and teamwork.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

            {/* Shark Tank */}
            <div className="group relative overflow-hidden rounded-3xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#00A68C]/20 hover:-translate-y-2">

              <div className="absolute -inset-1 bg-gradient-to-r from-[#00A68C]/10 via-transparent to-[#51DFC9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative p-8">

                <h3 className="font-headline text-3xl text-white mb-2">
                  UPRM Shark Tank
                </h3>

                <p className="text-[#51DFC9] mb-6">
                  Organized by L3Harris
                </p>

                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-5 rounded-2xl border border-blue-700/30 mb-6">

                  <div className="inline-block bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs font-bold mb-3">
                    PARTICIPATION
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    Participated in the UPRM Shark Tank competition organized by L3Harris, presenting innovative engineering solutions and competing alongside top student teams.
                  </p>

                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Annual competition where student teams pitch engineering solutions to industry professionals.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    'Public Speaking',
                    'Business Pitching',
                    'Project Management',
                    'Leadership',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#00A68C]/20 text-[#51DFC9] px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* AUVSI */}
            <div className="group relative overflow-hidden rounded-3xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#00A68C]/20 hover:-translate-y-2">

              <div className="absolute -inset-1 bg-gradient-to-r from-[#00A68C]/10 via-transparent to-[#51DFC9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative p-8">

                <h3 className="font-headline text-3xl text-white mb-6">
                  AUVSI RoboSub
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                  International autonomous underwater vehicle competition where we compete against universities worldwide.
                </p>

                <div className="space-y-4">

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#51DFC9] rounded-full"></div>
                    <span className="text-gray-300">
                      Autonomous Navigation
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#51DFC9] rounded-full"></div>
                    <span className="text-gray-300">
                      Technical Documentation
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#51DFC9] rounded-full"></div>
                    <span className="text-gray-300">
                      Real-world Engineering
                    </span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FUNDRAISING */}
      <section className="py-24 bg-gradient-to-b from-[#111] to-black">

        <div className="container mx-auto px-4">

          <div className="text-center mb-16">

            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#1FB355] via-[#51DFC9] to-white bg-clip-text text-transparent">
                FUNDRAISING & EVENTS
              </span>
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Supporting innovation through creativity, teamwork, and community involvement.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {[
              {
                title: 'Pizza Sales',
                image: '/pizza_sale_3.webp',
                text: 'Weekly fundraising tradition that supports our engineering projects.',
              },
              {
                title: 'Pickleball Tournament',
                image: '/pickleball_4.webp',
                text: 'Competitive and social event that strengthens our community.',
              },
              {
                title: 'Industry Partnerships',
                image: '/outreach_8.webp',
                text: 'Collaborations with industry leaders supporting our mission.',
              },
            ].map((card) => (

              <div
                key={card.title}
                className="group relative overflow-hidden rounded-3xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#00A68C]/20 hover:-translate-y-2"
              >

                <div className="absolute -inset-1 bg-gradient-to-r from-[#00A68C]/10 via-transparent to-[#51DFC9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                <div className="relative aspect-[16/10] overflow-hidden">

                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                </div>

                <div className="relative p-6">

                  <h3 className="font-headline text-2xl text-white mb-4">
                    {card.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {card.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* OUTREACH */}
      <section className="py-24 bg-black">

        <div className="container mx-auto px-4">

          <div className="text-center mb-16">

            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#00A68C] via-[#51DFC9] to-white bg-clip-text text-transparent">
                OUTREACH & EDUCATION
              </span>
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Inspiring future engineers through education and mentorship.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-3xl p-10 border border-blue-700/20">

              <h3 className="font-headline text-3xl text-white mb-4">
                School Visits
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8">
                Demonstrating underwater robotics and motivating students to pursue STEM careers.
              </p>

              <div className="flex justify-between">

              </div>

            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl p-10 border border-purple-700/20">

              <h3 className="font-headline text-3xl text-white mb-4">
                Technical Workshops
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8">
                Teaching programming, CAD, electronics, and engineering fundamentals.
              </p>

              <div className="flex flex-wrap gap-3">

                {[
                  'Python',
                  'CAD',
                  'Electronics',
                  '3D Printing',
                ].map((skill) => (

                  <span
                    key={skill}
                    className="bg-white/10 text-white px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* TEAM CULTURE */}
      <section className="py-24 bg-gradient-to-b from-[#111] to-black">

        <div className="container mx-auto px-4 text-center">

          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-16">
            <span className="bg-gradient-to-r from-[#1FB355] via-[#51DFC9] to-white bg-clip-text text-transparent">
              MORE THAN A TEAM
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

            {[
              {
                title: 'Mentorship',
                text: 'Experienced members guide and support new recruits.',
              },
              {
                title: 'Social Events',
                text: 'Celebrations, gatherings, and unforgettable moments together.',
              },
              {
                title: 'Career Development',
                text: 'Professional growth through networking and workshops.',
              },
            ].map((item) => (

              <div
                key={item.title}
                className="p-8 rounded-3xl bg-white/5 border border-gray-700/50 backdrop-blur-sm hover:border-[#00A68C]/30 transition-all duration-300"
              >

                <h3 className="font-headline text-2xl text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-24 text-center">

        <div className="bg-gradient-to-r from-[#00A68C]/10 to-[#51DFC9]/10 border border-[#00A68C]/20 rounded-3xl p-12 max-w-5xl mx-auto backdrop-blur-sm">

          <h2 className="font-headline text-4xl md:text-5xl text-white mb-6">
            Ready to Join the <span className="text-[#51DFC9]">RUMarino Family?</span>
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Become part of a multidisciplinary team driven by innovation, collaboration, and passion.
          </p>

          <a
            href="https://tally.so/r/pbOZ8b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00A68C] to-[#51DFC9] hover:from-[#00A68C] hover:to-[#1FB355] text-white font-bold px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <Users className="size-6" />

            Join Our Team

            <ArrowRight className="size-5" />
          </a>

        </div>

      </section>

    </div>
  );
}