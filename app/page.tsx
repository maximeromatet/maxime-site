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

        {/* SELECTED PROJECTS */}
        <section className="mb-40 border-t border-neutral-200 pt-20">
          <h2 className="text-2xl font-semibold mb-6">Entrepreneurship</h2>

          <p className="text-neutral-600 max-w-2xl mb-12 leading-relaxed">
            I am committed to building in the tech industry. Each project is a step toward launching an impactful venture of my own, grounded in real execution and purpose. My determination and drive are constant. I am now focused on building deeper experience and knowledge in the tech industry, which makes me even more motivated to learn and contribute.
          </p>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="border border-neutral-200 p-8 hover:border-blue-600 transition">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-medium">iLock.</h3>
                <span className="text-xs text-neutral-500">2024–2025</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Designed and prototyped an anti-theft phone case. Partnered with France’s leading merchandiser (Groupe Full Ace, €60M turnover) for B2B distribution. When emails went unanswered, took the train to JustInCase headquarters and secured a partnership discussion.
              </p>
            </div>

            <div className="border border-neutral-200 p-8 hover:border-blue-600 transition">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-medium">LightZone</h3>
                <span className="text-xs text-neutral-500">Winter 2022</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Organized large-scale World Cup screenings across bars in Paris and Bordeaux, bringing together <span className="font-semibold">500+</span> attendees and raising <span className="font-semibold">€3,000+</span> for Amnesty International and PNCC. Featured in regional press. My first venture.
              </p>
            </div>

            <div className="border border-neutral-200 p-8 hover:border-blue-600 transition">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-medium">Topcast</h3>
                <span className="text-xs text-neutral-500">Summer 2025</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                First intern at a podcast development startup. Produced 20+ podcasts end-to-end, reaching 100k+ YouTube views while contributing to business strategy discussions.
              </p>
            </div>

          </div>

          {/* PRESS */}
          <div className="mt-12 border border-neutral-200 p-8 hover:border-blue-600 transition">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-medium">Press</h3>
              <span className="text-xs text-neutral-500">Sud Ouest · 2022</span>
            </div>

            <p className="text-sm text-neutral-600 mb-6">
              LightZone was featured in <span className="font-semibold">Sud Ouest</span>, a leading French regional newspaper.
            </p>

            <a
              href="https://www.sudouest.fr/gironde/bordeaux/coupe-du-monde-2022-a-bordeaux-un-lyceen-organise-une-collecte-de-fonds-pendant-les-matches-des-bleus-13138961.php"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2.5 text-sm font-medium hover:bg-blue-700 transition"
            >
              Read the article
            </a>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mb-40 border-t border-neutral-200 pt-20">
          <h2 className="text-2xl font-semibold mb-12">Education</h2>

          <div className="space-y-10">

            <div className="border border-neutral-200 p-8 hover:border-blue-600 transition">
              <div className="flex justify-between mb-3">
                <h3 className="text-lg font-medium">École 42 — La Piscine (Incoming)</h3>
                <span className="text-xs text-neutral-500">July 2026 · Paris</span>
              </div>
              <p className="text-sm text-neutral-600">
                26-day intensive coding program focused on peer-to-peer learning and project-based technical training.
              </p>
            </div>

            <h3 className="text-lg font-semibold mt-12">Universities</h3>

            <div className="border border-neutral-200 p-8 hover:border-blue-600 transition">
              <div className="flex justify-between mb-3">
                <h4 className="text-base font-medium">
                  Bocconi University — Bachelor in International Politics and Government
                </h4>
                <span className="text-xs text-neutral-500">2023–present · Milan</span>
              </div>
              <p className="text-sm text-neutral-600">
                GPA: <span className="font-semibold">26/30</span>
              </p>
            </div>

            <div className="border border-neutral-200 p-8 hover:border-blue-600 transition">
              <div className="flex justify-between mb-3">
                <h4 className="text-base font-medium">
                  Korea University — Exchange Semester
                </h4>
                <span className="text-xs text-neutral-500">Fall 2025 · Seoul</span>
              </div>
              <p className="text-sm text-neutral-600">
                Average Grade: <span className="font-semibold">A</span>
              </p>
            </div>

          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-40 border-t border-neutral-200 pt-20">
          <h2 className="text-2xl font-semibold mb-12">Experience</h2>

          <div className="space-y-8">

            <div className="border border-neutral-200 p-8">
              <div className="flex justify-between mb-3">
                <h3 className="text-lg font-medium">Embrace — Freelance Brand Ambassador</h3>
                <span className="text-xs text-neutral-500">Paris · June 2025</span>
              </div>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>Promoted beverage brand through in-store demonstrations at Franprix and Monoprix.</li>
                <li>Averaged 50 new Instagram followers and 30 cans sold per hour.</li>
              </ul>
            </div>

            <div className="border border-neutral-200 p-8">
              <div className="flex justify-between mb-3">
                <h3 className="text-lg font-medium">Les Mouettes Vertes — Intern</h3>
                <span className="text-xs text-neutral-500">Paris · Summer 2024</span>
              </div>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>Participated in trade fair operations for organic textile accessories brand.</li>
                <li>Contributed to website rebuild, driving hundreds of new daily visitors post-launch.</li>
              </ul>
            </div>

            <div className="border border-neutral-200 p-8">
              <div className="flex justify-between mb-3">
                <h3 className="text-lg font-medium">Ragazzi da Peppone — Team Member</h3>
                <span className="text-xs text-neutral-500">Bordeaux · Summer 2023</span>
              </div>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>Supported kitchen operations in a fast-paced Italian restaurant.</li>
                <li>Managed 8 tables per service, exceeding manager's target of 5.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* ACTIVITIES */}
        <section className="mb-40 border-t border-neutral-200 pt-20">
          <h2 className="text-2xl font-semibold mb-12">Activities</h2>

          <div className="space-y-8 text-sm text-neutral-700">

            <div className="border border-neutral-200 p-8">
              <div className="font-semibold text-neutral-900 mb-2">
                La Maraude du Cœur & Pane Quotidiano
              </div>
              Volunteer · 2020–present
            </div>

            <div className="border border-neutral-200 p-8">
              <div className="font-semibold text-neutral-900 mb-2">
                Entrepreneurship Club (Bocconi)
              </div>
              Events team · 2023–present
            </div>

            <div className="border border-neutral-200 p-8">
              <div className="font-semibold text-neutral-900 mb-2">
                Bocconi French Society & SpiMilano
              </div>
              Corporate team · 2023–present
            </div>

          </div>
        </section>

        {/* SKILLS */}
        <section className="border-t border-neutral-200 pt-20">
          <h2 className="text-2xl font-semibold mb-12">Skills</h2>

          <div className="border border-neutral-200 p-8 text-sm text-neutral-700 space-y-6">

            <div>
              <div className="font-semibold text-neutral-900 mb-2">Languages</div>
              French (native), English (fluent), Italian (conversational)
            </div>

            <div>
              <div className="font-semibold text-neutral-900 mb-2">Tools</div>
              Microsoft 365, Descript (video editing), n8n (automation workflows)
            </div>

            <div>
              <div className="font-semibold text-neutral-900 mb-2">Interests</div>
              Tennis, running (sub-3h45 marathon goal), DJ (weekly in Milan clubs)
            </div>

          </div>

          {/* FINAL CTA */}
          <div className="mt-20 border-t border-neutral-200 pt-12">
            <p className="text-lg text-neutral-800 leading-relaxed max-w-3xl">
              If my profile resonates, I would be glad to connect and discuss how I can contribute.
            </p>

            <div className="mt-6 text-sm text-neutral-600">
              <a className="underline" href="mailto:maximeromatet@gmail.com">
                maximeromatet@gmail.com
              </a>{" "}
              ·{" "}
              <a className="underline" href="https://wa.me/33769187016">
                +33 7 69 18 70 16 (WhatsApp)
              </a>{" "}
              ·{" "}
              <a className="underline" href="https://linkedin.com/in/maximeromatet">
                LinkedIn
              </a>
            </div>
          </div>

        </section>

      </div>
    </main>
  );
}