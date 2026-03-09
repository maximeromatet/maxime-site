export default function ContactPage() {
    return (
      <main className="min-h-screen bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 py-28">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-10">
            Contact
          </h1>
  
          <p className="text-neutral-700 leading-relaxed max-w-2xl mb-10">
  Best way to reach me is WhatsApp. I am always open to internships,
  early-stage projects, and conversations with builders.
</p>

<div className="space-y-3 text-sm text-neutral-700">
  <p>
    WhatsApp:{" "}
    <a className="underline" href="https://wa.me/33769187016">
      +33 7 69 18 70 16
    </a>
  </p>
  <p>
    Email:{" "}
    <a className="underline" href="mailto:maximeromatet@gmail.com">
      maximeromatet@gmail.com
    </a>
  </p>
  <p>
    LinkedIn:{" "}
    <a className="underline" href="https://linkedin.com/in/maximeromatet">
      linkedin.com/in/maximeromatet
    </a>
  </p>
  <p>Location: Milan, Italy</p>
</div>
        </div>
      </main>
    );
  }