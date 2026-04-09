// VERSION: v1 - first stable build (FULL CLEAN RESET)
export default function Local3DPrintingSite() {
  const galleryItems = [
    { title: "Custom Household Fixes", desc: "Solving real problems with simple printed parts." },
    { title: "Replacement Parts", desc: "Hard-to-source parts recreated to extend product life." },
    { title: "Personalised Prints", desc: "Name signs, tags, and custom gifts." },
    { title: "STL Prints", desc: "Anything you’ve found online — printed locally." },
  ];

  const services = [
    "Custom 3D printed solutions",
    "Replacement parts and fixes",
    "Name personalised prints (signs, tags, gifts)",
    "Print STL files you already have or have found online",
    "Personalise or adapt existing designs",
    "Small design-to-print jobs",
    "Local collection, delivery, and part pickup for reference",
  ];

  const processSteps = [
    {
      title: "1. Send over your idea",
      desc: "Message with a description, rough dimensions, a broken part, or a link to an STL file you want printed. You can send photos after we connect.",
    },
    {
      title: "2. Review and quote",
      desc: "I’ll check whether it can be printed well, suggest the best material, and let you know price and lead time.",
    },
    {
      title: "3. Print and finish",
      desc: "Once agreed, I’ll print it, clean it up, and make sure it’s ready for use or gifting.",
    },
    {
      title: "4. Collect or local delivery",
      desc: "You can collect locally, or I can arrange local drop-off and in some cases collect a reference part too.",
    },
  ];

  const filamentInfo = [
    {
      name: "PLA",
      use: "Great for display items, name prints, organisers, and general everyday parts.",
    },
    {
      name: "PETG",
      use: "Better for tougher functional parts where you want a bit more durability and heat resistance.",
    },
    {
      name: "TPU",
      use: "Flexible material suited to soft parts, bumpers, feet, and protective pieces.",
    },
    {
      name: "Specialty filaments",
      use: "Where suitable, stronger or more specialist materials can be used for the right job.",
    },
  ];

  const popularJobs = [
    "Personalised name signs, tags, and gifts",
    "Replacement clips, brackets, and small hard-to-source parts",
    "Prints from STL files you already have or have found online",
    "Prototype parts and simple one-off ideas",
    "Custom organisers, holders, and home fixes",
    "Small business or hobby prints in low quantities",
  ];

  const pricingGuide = [
    {
      title: "Small prints",
      price: "From £5–£10",
      desc: "Keyrings, tags, simple clips, and smaller personalised prints.",
    },
    {
      title: "Medium prints",
      price: "£10–£25",
      desc: "Functional parts, brackets, organisers, and more detailed prints.",
    },
    {
      title: "Larger or complex prints",
      price: "Quoted to suit",
      desc: "Pricing depends on size, print time, material, and finish required.",
    },
  ];

  const extras = [
    "Don’t have a file? I can help create or adjust simple designs from photos, measurements, or an existing part.",
    "Black, white, grey, and selected colours available, with other colours possible on request.",
    "Most small prints can usually be completed within a few days depending on the job.",
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#1e1b4b,_#111827_45%,_#0f172a_100%)] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(96,165,250,0.22),_transparent_30%),radial-gradient(circle_at_left,_rgba(168,85,247,0.16),_transparent_25%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              

              <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] md:text-7xl">
                Custom parts, fixes, and personalised 3D prints.
              </h1>
              <p className="mt-5 max-w-2xl text-xl font-medium leading-8 text-blue-100 md:text-2xl">
                Local 3D printing in Strathaven, including custom jobs, STL printing, and personalised designs.
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                From broken parts to prints you’ve found online, send over what you need and I’ll let you know what’s possible.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#quote"
                  className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-900 shadow-lg transition hover:scale-[1.02]"
                >
                  Get a quote
                </a>
                <a
                  href="#gallery"
                  className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  View work
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
                <div className="mb-3 text-sm text-blue-200">What I can help with</div>
                <ul className="space-y-3 text-slate-100">
                  {services.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/15 to-fuchsia-500/10 p-6 shadow-2xl backdrop-blur-md">
                <div className="text-sm text-blue-200">Ideal for</div>
                <div className="mt-4 space-y-4 text-slate-100">
                  <p>Broken parts that are difficult or impossible to source</p>
                  <p>Small jobs that need a custom fit</p>
                  <p>Quick prototypes and simple ideas brought to life</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-6 px-6 py-5 text-sm text-blue-100">
          <div>✔ Send a photo, STL, or idea</div>
          <div>✔ Local pickup & delivery</div>
          <div>✔ Personalised prints available</div>
          <div>✔ Fast turnaround</div>
        </div>
      </section>

      <section id="about" className="mx-auto my-10 max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200">About</p>
            <h2 className="mt-2 text-3xl font-bold">Local, practical, and built around solving problems</h2>
            <p className="mt-4 text-slate-300">
              I’m a local student heading into Computer Aided Draughting & Design, with a strong interest in design, making, and problem-solving. This started at home — fixing small issues, creating parts that didn’t exist, and improving everyday setups.
            </p>
            <p className="mt-4 text-slate-300">
              The focus is simple: if something is broken, awkward, or just needs a better solution, I can design and print something that works. From practical fixes and replacement parts to personalised name prints and small custom projects.
            </p>
            <p className="mt-4 text-slate-300">
              It’s a straightforward, local service — just useful parts that do the job properly.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 to-sky-500/15 p-8 shadow-2xl backdrop-blur-md">
            <h3 className="text-2xl font-bold">Why this works well</h3>
            <ul className="mt-5 space-y-3 text-slate-200">
              <li>Hands-on approach to real problems at home</li>
              <li>Design skills developing through CAD study</li>
              <li>Ideal for one-off and small custom jobs</li>
              <li>Personalised prints people actually want</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto my-10 max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h2 className="text-xl font-semibold">Simple process</h2>
            <p className="mt-3 text-slate-300">
              Send over a message with what you need, any photos or measurements, and I can let you know what is possible. If needed, I can also collect a broken part or reference locally to work from.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h2 className="text-xl font-semibold">Local and personal</h2>
            <p className="mt-3 text-slate-300">
              Focused on local work, straightforward communication, and practical solutions — including local delivery and the option to collect parts or references if that makes things easier.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h2 className="text-xl font-semibold">Built around real problems</h2>
            <p className="mt-3 text-slate-300">
              Great for clips, mounts, spacers, brackets, covers, organisers, personalised name prints, and replacement parts that just need to work.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto my-10 max-w-6xl px-6 py-16">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-200">How it works</p>
          <h2 className="mt-2 text-3xl font-bold">Simple process from idea to finished print</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            Whether you already have an STL file, need help adapting an existing design, or just have a broken part that needs replaced, the process is kept simple.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md">
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto my-10 max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Materials</p>
            <h2 className="mt-2 text-3xl font-bold">Filament options for different jobs</h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              Different prints need different materials. Some are best for personalised items and display pieces, while others are better suited to tougher functional parts.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {filamentInfo.map((item) => (
                <div key={item.name} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-md">
                  <div className="text-lg font-semibold">{item.name}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.use}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/25 to-sky-500/15 p-8 shadow-2xl backdrop-blur-md">
            <h3 className="text-2xl font-bold">What can be printed?</h3>
            <ul className="mt-5 space-y-3 text-slate-200">
              <li>STL files you already have</li>
              <li>Models you’ve found online</li>
              <li>Personalised versions of existing designs</li>
              <li>Replacement parts based on photos or a sample</li>
              <li>Simple one-off ideas and prototypes</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto my-10 max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Popular jobs</p>
            <h2 className="mt-2 text-3xl font-bold">Common things people ask for</h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              This covers a mix of practical everyday fixes, personalised items, and prints from existing files or ideas.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {popularJobs.map((job) => (
                <div key={job} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg text-slate-200 backdrop-blur-md">
                  {job}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/20 to-fuchsia-500/15 p-8 shadow-2xl backdrop-blur-md">
            <h3 className="text-2xl font-bold">Helpful to know</h3>
            <ul className="mt-5 space-y-4 text-slate-200">
              {extras.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto my-10 max-w-6xl px-6 py-16">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Pricing guide</p>
          <h2 className="mt-2 text-3xl font-bold">Typical pricing</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            Final pricing depends on size, print time, material, and whether any design work is needed, but these guide prices help give a rough idea.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pricingGuide.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md">
              <div className="text-sm uppercase tracking-[0.16em] text-blue-200">{item.title}</div>
              <div className="mt-3 text-3xl font-bold text-white">{item.price}</div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="mx-auto my-10 max-w-6xl px-6 py-16">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Gallery</p>
            <h2 className="mt-2 text-3xl font-bold">Examples of work</h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            Replace these placeholders with photos of finished prints, problem-solving parts, and before-and-after examples.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {galleryItems.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-md">
              <div className="flex h-48 items-center justify-center bg-white/5 text-slate-400">
                Add photo here
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="quote" className="mx-auto my-10 max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Quote</p>
            <h2 className="mt-2 text-3xl font-bold">Get a quick quote</h2>
            <p className="mt-4 text-slate-300">
              Send over a few details and I’ll come back with a price and what’s possible. You can include a link to a file or photo, or just describe what you need. You can also send photos after submitting, and I’m happy to collect parts locally if that’s easier.
            </p>

            <form
              action="https://formspree.io/f/xbdpezrk"
              method="POST"
              className="mt-8 grid gap-4"
            >
              <input type="hidden" name="form_type" value="quote_request" />

              <input
                name="name"
                placeholder="Your name"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                name="contact"
                placeholder="Email or phone"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <textarea
                name="job_description"
                placeholder="What do you need made? Add a link to a file/photo if you have one, or leave blank for now."
                className="h-28 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <select
                  name="material"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
                >
                  <option className="bg-slate-900 text-white">Material (if known)</option>
                  <option className="bg-slate-900 text-white">PLA</option>
                  <option className="bg-slate-900 text-white">PETG</option>
                  <option className="bg-slate-900 text-white">TPU</option>
                  <option className="bg-slate-900 text-white">Not sure</option>
                </select>

                <input
                  name="size"
                  placeholder="Approx size (e.g. 10cm x 5cm)"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="quantity"
                  placeholder="Quantity"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  name="deadline"
                  placeholder="When do you need it?"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <textarea
                name="extra_notes"
                placeholder="Anything else (colour, strength, finish, etc.)"
                className="h-24 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <button
                type="submit"
                className="mt-4 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 font-medium text-white shadow-lg transition hover:scale-[1.02]"
              >
                Send request
              </button>
            </form>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/25 to-sky-500/15 p-8 shadow-2xl backdrop-blur-md">
            <h3 className="text-2xl font-bold">What helps get an accurate quote</h3>
            <ul className="mt-5 space-y-4 text-slate-200">
              <li>Photos or a sample of the part (can collect locally)</li>
              <li>Link to a file, photo, or model if you have one (or send it after)</li>
              <li>Rough size or dimensions</li>
              <li>What the part needs to do (strength, fit, etc.)</li>
              <li>Quantity and deadline</li>
            </ul>
            <p className="mt-6 text-sm text-slate-300">
              Don’t worry if you don’t have everything — even a rough idea is enough to get started.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto my-10 max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Contact</p>
            <h2 className="mt-2 text-3xl font-bold">Get a quote or ask a question</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              The easiest way is to send a quick message with a description of the problem, what the part needs to do, and any useful dimensions or photos. If you already have an STL file or have found a design online, that works too.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500 to-indigo-500 p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold">Ask a quick question</h3>
            <p className="mt-4 text-blue-50">
              Not ready for a full quote? Send a quick message and I’ll get back to you. Prefer Facebook Messenger? That works too.
            </p>

            <form
              action="https://formspree.io/f/xbdpezrk"
              method="POST"
              className="mt-6 grid gap-4"
            >
              <input type="hidden" name="form_type" value="quick_question" />
              <input
                name="name"
                placeholder="Your name"
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-blue-100/70 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <input
                name="contact"
                placeholder="Email or phone"
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-blue-100/70 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <textarea
                name="message"
                placeholder="Ask a question or describe what you need"
                className="h-32 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-blue-100/70 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <button
                type="submit"
                className="mt-2 inline-block rounded-2xl bg-white px-5 py-3 font-medium text-indigo-900 transition hover:scale-[1.02]"
              >
                Send message
              </button>
            </form>
            <p className="mt-4 text-sm text-blue-100/80">Fastest response via Messenger or WhatsApp</p>
            <a
              href="https://m.me/61586250437570"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded-2xl border border-white/25 bg-white/10 px-5 py-3 font-medium text-white transition hover:bg-white/20"
            >
              Message on Facebook
            </a>
            <a
              href="https://wa.me/447368607524"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block rounded-2xl border border-white/25 bg-white/10 px-5 py-3 font-medium text-white transition hover:bg-white/20"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 pb-10 pt-4 text-center text-sm text-slate-400">
        © 2026 Strathaven Prints. Custom prints, replacement parts, and personalised designs.
		<p className="mt-2 text-xs text-slate-500">
  Based in Strathaven, South Lanarkshire. Serving surrounding areas.
</p>
      </footer>
    </div>
  );
}
