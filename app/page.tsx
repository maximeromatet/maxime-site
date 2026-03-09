// app/page.tsx
export default function Home() {
  const Card = ({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div
      className={[
        "rounded-2xl border border-[var(--border)] bg-white/70 p-8 shadow-sm",
        "transition hover:shadow-md hover:border-[color:var(--accent)]",
        "dark:bg-black/20",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-semibold tracking-tight mb-10">{children}</h2>
  );

  return (
    <main id="top" className="min-h-screen text-[var(--foreground)]">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        {/* HERO */}
        <section className="mb-20">
          <div className="max-w-3xl">
            <p className="text-sm text-[var(--muted)] mb-4">
              Bocconi University · Milan
            </p>

            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
              Building toward meaningful impact in{" "}
              <span className="text-[var(--accent)]">tech</span>.
            </h1>

            <p className="text-lg text-[var(--muted)] max-w-2xl leading-relaxed mb-10">
              Bocconi student. Founder in training. Focused on execution,
              technology, and building with purpose.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#entrepreneurship"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--accent)] text-white px-6 py-3 text-sm font-medium hover:opacity-95 transition"
              >
                Experience
              </a>

              <a
                href="#connect"
                className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-white/60 px-6 py-3 text-sm font-medium text-[var(--foreground)] hover:border-[color:var(--accent)] hover:text-[var(--accent)] transition dark:bg-black/10"
              >
                Let’s connect
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
              <span>Paris · Milan</span>
              <span>French, English, Italian</span>
              <span>Open to internships</span>
            </div>
          </div>
        </section>

        {/* ENTREPRENEURSHIP */}
        <section
          id="entrepreneurship"
          className="mb-20 border-t border-[var(--border)] pt-12"
        >
          <SectionTitle>Entrepreneurship</SectionTitle>

          <p className="text-[var(--muted)] max-w-2xl mb-10 leading-relaxed">
            I am committed to building in the tech industry. Each project is a
            step toward launching an impactful venture of my own, grounded in
            real execution and purpose. I am now focused on gaining experience
            and technical skills which makes me highly motivated to learn and
            contribute through an internship.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                <h3 className="text-lg font-medium">iLock.</h3>
                <span className="text-xs text-[var(--muted)]">2024–2025</span>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Designed and prototyped an anti-theft phone case. Partnered with
                France’s leading merchandiser (Groupe Full Ace, €60M turnover)
                for B2B distribution. When emails went unanswered, went knocking
                on the door of JustInCase headquarters and secured a partnership
                meeting.
              </p>
            </Card>

            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                <h3 className="text-lg font-medium">LightZone</h3>
                <span className="text-xs text-[var(--muted)]">Winter 2022</span>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Organized large-scale World Cup screenings across bars in Paris
                and Bordeaux, bringing together{" "}
                <span className="font-semibold text-[var(--foreground)]">
                  500+
                </span>{" "}
                attendees and raising{" "}
                <span className="font-semibold text-[var(--foreground)]">
                  €3,000+
                </span>{" "}
                for Amnesty International and PNCC. My first venture.
              </p>
            </Card>
          </div>

          {/* PRESS */}
          <div className="mt-8">
            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-6 mb-4">
                <h3 className="text-lg font-medium">Press</h3>
                <span className="text-xs text-[var(--muted)]">
                  Sud Ouest · 2022
                </span>
              </div>

              <p className="text-sm text-[var(--muted)] mb-6 leading-relaxed">
                LightZone was featured in{" "}
                <span className="font-semibold text-[var(--foreground)]">
                  Sud Ouest
                </span>
                , a leading French regional newspaper.
              </p>

              <a
                href="https://www.sudouest.fr/gironde/bordeaux/coupe-du-monde-2022-a-bordeaux-un-lyceen-organise-une-collecte-de-fonds-pendant-les-matches-des-bleus-13138961.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--accent)] text-white px-5 py-2.5 text-sm font-medium hover:opacity-95 transition"
              >
                Read the article
              </a>
            </Card>
          </div>
        </section>

        {/* EDUCATION */}
        <section
          id="education"
          className="mb-20 border-t border-[var(--border)] pt-12"
        >
          <SectionTitle>Education</SectionTitle>

          <div className="space-y-8">
            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-6 mb-3">
                <h3 className="text-lg font-medium">
                  École 42 — La Piscine (Incoming)
                </h3>
                <span className="text-xs text-[var(--muted)]">
                  July 2026 · Paris
                </span>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed max-w-3xl">
                26-day intensive coding program focused on peer-to-peer
                learning, problem solving, and project-based technical training.
              </p>
            </Card>

            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-6 mb-3">
                <h3 className="text-lg font-medium">
                  Bocconi University — International Politics and Government
                </h3>
                <span className="text-xs text-[var(--muted)]">
                  2023–present · Milan
                </span>
              </div>
              <p className="text-sm text-[var(--muted)]">
                GPA:{" "}
                <span className="font-semibold text-[var(--foreground)]">
                  26/30
                </span>
              </p>
            </Card>

            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-6 mb-3">
                <h3 className="text-lg font-medium">
                  Korea University — Exchange Semester
                </h3>
                <span className="text-xs text-[var(--muted)]">
                  Fall 2025 · Seoul
                </span>
              </div>
              <p className="text-sm text-[var(--muted)]">
                Average Grade:{" "}
                <span className="font-semibold text-[var(--foreground)]">A</span>
              </p>
            </Card>
          </div>
        </section>

        {/* PROFESSIONAL EXPERIENCE */}
        <section
          id="experience"
          className="mb-20 border-t border-[var(--border)] pt-12"
        >
          <SectionTitle>Professional Experience</SectionTitle>

          <div className="space-y-8">
            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-6 mb-3">
                <h3 className="text-lg font-medium">Topcast — Intern</h3>
                <span className="text-xs text-[var(--muted)]">
                  Paris · Summer 2025
                </span>
              </div>
              <ul className="text-sm text-[var(--muted)] space-y-2 leading-relaxed list-disc pl-5">
                <li>Produced 20+ podcasts end-to-end, reaching 100k+ YouTube views.</li>
                <li>
                  Contributed to business strategy discussions and business plan work.
                </li>
              </ul>
            </Card>

            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-6 mb-3">
                <h3 className="text-lg font-medium">
                  Embrace — Freelance Brand Ambassador
                </h3>
                <span className="text-xs text-[var(--muted)]">
                  Paris · June 2025
                </span>
              </div>
              <ul className="text-sm text-[var(--muted)] space-y-2 leading-relaxed list-disc pl-5">
                <li>
                  Promoted beverage brand through in-store demonstrations and tastings
                  at Franprix and Monoprix.
                </li>
                <li>Averaged 50 new Instagram followers and 30 cans sold per hour.</li>
              </ul>
            </Card>

            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-6 mb-3">
                <h3 className="text-lg font-medium">Les Mouettes Vertes — Intern</h3>
                <span className="text-xs text-[var(--muted)]">
                  Paris · Summer 2024
                </span>
              </div>
              <ul className="text-sm text-[var(--muted)] space-y-2 leading-relaxed list-disc pl-5">
                <li>
                  Participated in trade fair operations for an organic textile
                  accessories brand.
                </li>
                <li>
                  Contributed to website rebuild, driving hundreds of new daily visitors
                  post-launch.
                </li>
              </ul>
            </Card>

            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-6 mb-3">
                <h3 className="text-lg font-medium">
                  Ragazzi da Peppone — Team Member
                </h3>
                <span className="text-xs text-[var(--muted)]">
                  Bordeaux · Summer 2023
                </span>
              </div>
              <ul className="text-sm text-[var(--muted)] space-y-2 leading-relaxed list-disc pl-5">
                <li>
                  Supported kitchen operations (prep, plating, service coordination)
                  in a fast-paced Italian restaurant.
                </li>
                <li>Managed 8 tables per service, exceeding manager’s target of 5.</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* EXTRACURRICULAR ACTIVITIES */}
        <section className="mb-20 border-t border-[var(--border)] pt-12">
          <SectionTitle>Extracurricular Activities</SectionTitle>

          <div className="space-y-8 text-sm">
            <Card>
              <div className="font-semibold text-[var(--foreground)] mb-2">
                La Maraude du Cœur & Pane Quotidiano
              </div>
              <div className="text-[var(--muted)]">Volunteer · 2020–present</div>
            </Card>

            <Card>
              <div className="font-semibold text-[var(--foreground)] mb-2">
                Entrepreneurship Club (Bocconi)
              </div>
              <div className="text-[var(--muted)]">Events team · 2023–present</div>
            </Card>

            <Card>
              <div className="font-semibold text-[var(--foreground)] mb-2">
                Bocconi French Society & SpiMilano
              </div>
              <div className="text-[var(--muted)]">
                Corporate team · 2023–present
              </div>
            </Card>
          </div>
        </section>

        {/* SKILLS + CONNECT */}
        <section
          id="skills"
          className="border-t border-[var(--border)] pt-12"
        >
          <SectionTitle>Skills</SectionTitle>

          <Card className="space-y-6">
            <div>
              <div className="font-semibold text-[var(--foreground)] mb-2">
                Languages
              </div>
              <div className="text-[var(--muted)]">
                French (native), English (fluent), Italian (conversational)
              </div>
            </div>

            <div>
              <div className="font-semibold text-[var(--foreground)] mb-2">
                Tools
              </div>
              <div className="text-[var(--muted)]">
                Microsoft 365, Descript (video editing), n8n (automation workflows)
              </div>
            </div>

            <div>
              <div className="font-semibold text-[var(--foreground)] mb-2">
                Interests
              </div>
              <div className="text-[var(--muted)]">
                Tennis, running (sub-3h45 marathon goal), DJ (weekly in Milan clubs)
              </div>
            </div>
          </Card>

          {/* CONNECT */}
          <section id="connect" className="mt-16 pb-16">
            <div className="rounded-2xl border border-[color:var(--accent-soft)] bg-white/70 p-10 shadow-sm dark:bg-black/20">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                Let’s talk
              </h3>

              <p className="text-[var(--muted)] leading-relaxed max-w-2xl">
                If my profile resonates, I would be glad to connect and discuss
                how I can contribute.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-sm">
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-[var(--accent)] text-white px-5 py-2.5 font-medium hover:opacity-95 transition"
                  href="https://wa.me/33769187016"
                >
                  WhatsApp
                </a>

                <a
                  className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-white/60 px-5 py-2.5 font-medium hover:border-[color:var(--accent)] hover:text-[var(--accent)] transition dark:bg-black/10"
                  href="mailto:maximeromatet@gmail.com"
                >
                  Email
                </a>

                <a
                  className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-white/60 px-5 py-2.5 font-medium hover:border-[color:var(--accent)] hover:text-[var(--accent)] transition dark:bg-black/10"
                  href="https://linkedin.com/in/maximeromatet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>

              <div className="mt-8 text-xs text-[var(--muted)]">
                maximeromatet@gmail.com · +33 7 69 18 70 16 (WhatsApp)
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}