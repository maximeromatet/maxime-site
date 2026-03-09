import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-5xl mx-auto px-6 py-32">
        {/* HERO */}
        <section className="mb-40">
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight leading-tight mb-8">
            Building toward meaningful impact in{" "}
            <span className="text-blue-600">tech</span>.
          </h1>

          <p className="text-lg text-neutral-600 max-w-2xl mb-10">
            Bocconi student. Founder in training. Focused on execution,
            technology, and building with purpose.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="bg-blue-600 text-white px-6 py-3 text-sm font-medium hover:bg-blue-700 transition"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="border border-neutral-300 px-6 py-3 text-sm hover:border-blue-600 hover:text-blue-600 transition"
            >
              Contact
            </Link>
          </div>
        </section>

        {/* ABOUT */}
        <section className="mb-40 border-t border-neutral-200 pt-20">
          <h2 className="text-2xl font-semibold mb-10">About</h2>

          <div className="max-w-3xl space-y-6 text-neutral-700 leading-relaxed">
            <p>
              I study International Politics and Government at Bocconi, but I chose
              to build in tech. After launching ventures and navigating real operational
              challenges, I realized I want to operate where impact compounds fastest:
              technology and AI.
            </p>

            <p>
              I have built hardware products, organized large-scale public events,
              and worked inside early-stage startups. In July 2026, I will complete
              La Piscine at École 42 to better understand how developers think and build.
            </p>

            <p>
              My ambition is clear: to create and scale meaningful technology companies.
            </p>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="mb-40 border-t border-neutral-200 pt-20">
          <h2 className="text-2xl font-semibold mb-12">Selected Projects</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="border border-neutral-200 p-8 hover:border-blue-600 transition">
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <h3 className="text-lg font-medium">iLock</h3>
                <span className="text-xs text-neutral-500">2024–2025</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Designed and prototyped an anti-theft phone case. Partnered with France’s
                leading merchandiser (Groupe Full Ace, €60M turnover) for B2B distribution.
                When emails went unanswered, I took the train to JustInCase headquarters
                and secured a partnership meeting.
              </p>
            </div>

            <div className="border border-neutral-200 p-8 hover:border-blue-600 transition">
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <h3 className="text-lg font-medium">LightZone</h3>
                <span className="text-xs text-neutral-500">Winter 2022</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Organized large-scale World Cup screenings across bars in Paris and Bordeaux,
                bringing together 500+ attendees and raising €3,000+ for Amnesty International
                and PNCC. Featured in regional press. My first venture.
              </p>
            </div>

            <div className="border border-neutral-200 p-8 hover:border-blue-600 transition">
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <h3 className="text-lg font-medium">Topcast</h3>
                <span className="text-xs text-neutral-500">Summer 2025</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                First intern at a podcast development startup. Contributed to business strategy
                and produced 20+ podcasts end-to-end, reaching 100k+ YouTube views.
              </p>
            </div>
          </div>

          {/* PRESS */}
          <div className="mt-10 border border-neutral-200 p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-6 mb-4">
              <h3 className="text-lg font-medium">Press</h3>
              <span className="text-xs text-neutral-500">
                LightZone featured in regional press (SudOuest)
              </span>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed max-w-3xl">
              Dedicated space for the newspaper article about LightZone and me. I can embed a
              screenshot/PDF preview or link to the article here.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                className="bg-blue-600 text-white px-5 py-2.5 text-sm font-medium hover:bg-blue-700 transition"
              >
                Add article link
              </a>
              <span className="text-xs text-neutral-500 self-center">
                Replace “#” with the real URL or add an image in /public and link it.
              </span>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-40 border-t border-neutral-200 pt-20">
          <h2 className="text-2xl font-semibold mb-12">Experience</h2>

          <div className="space-y-10">
            <div className="border border-neutral-200 p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-6 mb-3">
                <h3 className="text-lg font-medium">Topcast</h3>
                <span className="text-xs text-neutral-500">Paris · Summer 2025</span>
              </div>
              <ul className="text-sm text-neutral-600 leading-relaxed space-y-2">
                <li>Produced 20+ podcasts end-to-end (scripting to editing), 100k+ YouTube views.</li>
                <li>Contributed to business strategy discussions and business plan work.</li>
              </ul>
            </div>

            <div className="border border-neutral-200 p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-6 mb-3">
                <h3 className="text-lg font-medium">Embrace</h3>
                <span className="text-xs text-neutral-500">Paris · June 2025</span>
              </div>
              <ul className="text-sm text-neutral-600 leading-relaxed space-y-2">
                <li>Promoted a beverage brand through in-store demos at Franprix and Monoprix.</li>
                <li>Averaged 50 new Instagram followers and 30 cans sold per hour.</li>
              </ul>
            </div>

            <div className="border border-neutral-200 p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-6 mb-3">
                <h3 className="text-lg font-medium">Les Mouettes Vertes</h3>
                <span className="text-xs text-neutral-500">Paris · Summer 2024</span>
              </div>
              <ul className="text-sm text-neutral-600 leading-relaxed space-y-2">
                <li>Supported trade fair operations for an organic textile accessories brand.</li>
                <li>Contributed to a website rebuild, driving hundreds of new daily visitors post-launch.</li>
              </ul>
            </div>

            <div className="border border-neutral-200 p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-6 mb-3">
                <h3 className="text-lg font-medium">Ragazzi da Peppone</h3>
                <span className="text-xs text-neutral-500">Bordeaux · Summer 2023</span>
              </div>
              <ul className="text-sm text-neutral-600 leading-relaxed space-y-2">
                <li>Supported kitchen operations in a fast-paced Italian restaurant.</li>
                <li>Managed 8 tables per service, exceeding the manager’s target of 5.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EDUCATION + ACTIVITIES + SKILLS */}
        <section className="border-t border-neutral-200 pt-20">
          <div className="grid gap-10 md:grid-cols-3">
            {/* EDUCATION */}
            <div>
              <h2 className="text-2xl font-semibold mb-8">Education</h2>
              <div className="space-y-6 text-sm text-neutral-700">
                <div className="border border-neutral-200 p-6">
                  <div className="font-medium">Bocconi University</div>
                  <div className="text-neutral-600">
                    Bachelor in International Politics and Government · 2023–present
                  </div>
                  <div className="text-neutral-600">GPA: 26/30</div>
                </div>

                <div className="border border-neutral-200 p-6">
                  <div className="font-medium">Korea University</div>
                  <div className="text-neutral-600">Exchange Semester · Fall 2025</div>
                  <div className="text-neutral-600">Avg. Grade: A</div>
                </div>

                <div className="border border-neutral-200 p-6">
                  <div className="font-medium">École 42</div>
                  <div className="text-neutral-600">
                    La Piscine (26-day intensive) · July 2026
                  </div>
                </div>
              </div>
            </div>

            {/* ACTIVITIES */}
            <div>
              <h2 className="text-2xl font-semibold mb-8">Activities</h2>
              <div className="space-y-6 text-sm text-neutral-700">
                <div className="border border-neutral-200 p-6">
                  <div className="font-medium">La Maraude du Cœur & Pane Quotidiano</div>
                  <div className="text-neutral-600">Volunteer · 2020–present</div>
                  <div className="text-neutral-600">
                    Weekly food and essentials distribution to low-income communities.
                  </div>
                </div>

                <div className="border border-neutral-200 p-6">
                  <div className="font-medium">Entrepreneurship Club (Bocconi)</div>
                  <div className="text-neutral-600">Events team · 2023–present</div>
                  <div className="text-neutral-600">
                    Organized events and webinars, secured guest speakers each semester.
                  </div>
                </div>

                <div className="border border-neutral-200 p-6">
                  <div className="font-medium">Bocconi French Society & SpiMilano</div>
                  <div className="text-neutral-600">Corporate team · 2023–present</div>
                  <div className="text-neutral-600">
                    Partnerships and sponsor relations.
                  </div>
                </div>
              </div>
            </div>

            {/* SKILLS */}
            <div>
              <h2 className="text-2xl font-semibold mb-8">Skills</h2>
              <div className="border border-neutral-200 p-6 text-sm text-neutral-700 space-y-4">
                <div>
                  <div className="font-medium mb-2">Languages</div>
                  <div className="text-neutral-600">
                    French (native), English (fluent), Italian (conversational)
                  </div>
                </div>

                <div>
                  <div className="font-medium mb-2">Tools</div>
                  <div className="text-neutral-600">
                    Microsoft 365, Descript (video editing), n8n (automation workflows)
                  </div>
                </div>

                <div>
                  <div className="font-medium mb-2">Interests</div>
                  <div className="text-neutral-600">
                    Tennis, running (sub 3h45 marathon goal), DJ (weekly in Milan clubs)
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-5 py-2.5 text-sm font-medium hover:bg-blue-700 transition"
                  >
                    Reach me on WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <footer className="mt-20 border-t border-neutral-200 pt-10 text-sm text-neutral-500">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-neutral-700 font-medium">Maxime Romatet</div>
                <div>maximeromatet@gmail.com</div>
              </div>

              <div className="flex gap-6">
                <a className="underline" href="https://linkedin.com/in/maximeromatet">
                  LinkedIn
                </a>
                <a className="underline" href="https://wa.me/33769187016">
                  WhatsApp
                </a>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}