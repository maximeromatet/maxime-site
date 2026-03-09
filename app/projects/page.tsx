export default function ProjectsPage() {
    return (
      <main className="min-h-screen bg-white text-black">
        <div className="max-w-5xl mx-auto px-6 py-32">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12">
            Projects
          </h1>
  
          <p className="text-lg text-neutral-700 max-w-2xl leading-relaxed mb-10">
            If you made it here, you probably want to know more.
            I would be glad to speak ;)
          </p>
  
          <a
            href="https://wa.me/33769187016"
            className="border border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </main>
    );
  }