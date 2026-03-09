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

          <div className="flex gap-4">
            <a
              href="/projects"
              className="bg-blue-600 text-white px-6 py-3 text-sm font-medium hover:bg-blue-700 transition"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="border border-neutral-300 px-6 py-3 text-sm hover:border-blue-600 hover:text-blue-600 transition"
            >
              Contact
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section className="mb-40 border-t border-neutral-200 pt-20">
          <h2 className="text-2xl font-semibold mb-10">About</h2>

          <div className="max-w-3xl space-y-6 text-neutral-700 leading-relaxed">
            <p>
              I study International Politics at Bocconi, but I chose to build in tech.
              After launching ventures and navigating real operational challenges,
              I realized I want to operate where impact compounds fastest:
              technology and AI.
            </p>

            <p>
              I have built hardware products, organized large-scale public events,
              and worked inside early-stage startups. This summer, I will complete
              La Piscine at École 42 to better understand how developers think and build.
            </p>

            <p>
              My ambition is clear: to create and scale meaningful technology companies.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="border-t border-neutral-200 pt-20">
          <h2 className="text-2xl font-semibold mb-12">Selected Projects</h2>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="border border-neutral-200 p-8 hover:border-blue-600 transition">
              <h3 className="text-lg font-medium mb-4">iLock</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Designed and prototyped an anti-theft phone case.
                Partnered with a 70-year-old French manufacturer and secured
                B2B distribution through direct outreach.
              </p>
            </div>

            <div className="border border-neutral-200 p-8 hover:border-blue-600 transition">
              <h3 className="text-lg font-medium mb-4">LightZone</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Organized large-scale public World Cup screenings.
                500 attendees. €3,000 raised. Featured in regional press.
              </p>
            </div>

            <div className="border border-neutral-200 p-8 hover:border-blue-600 transition">
              <h3 className="text-lg font-medium mb-4">Topcast</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                First intern at a startup podcast studio.
                Produced 20+ podcasts end-to-end reaching 100k+ views.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}