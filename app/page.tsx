import fs from "fs";
import path from "path";
import GalleryGrid from "./components/GalleryGrid";
import ProductGrid from "./components/ProductGrid";


// VERSION: v1 - first stable build (FULL CLEAN RESET)

const galleryBase = path.join(process.cwd(), "public", "gallery");

const galleryItems = fs.readdirSync(galleryBase)
  .map((folder) => {
    const folderPath = path.join(galleryBase, folder);

    if (!fs.statSync(folderPath).isDirectory()) return null;

    const descriptionsPath = path.join(folderPath, "descriptions.json");

    let descriptions: Record<string, string> = {};
    if (fs.existsSync(descriptionsPath)) {
      try {
        descriptions = JSON.parse(fs.readFileSync(descriptionsPath, "utf8")) as Record<string, string>;
      } catch {
        descriptions = {};
      }
    }

    const images = fs
      .readdirSync(folderPath)
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map((file) => {
        const title = file.replace(/\.[^/.]+$/, "");

        return {
          src: `/gallery/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`,
          title,
          description:
            typeof descriptions[title] === "string"
              ? descriptions[title]
              : "",
        };
      });

    if (images.length === 0) return null;

    const category = folder
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    return {
      category,
      images,
    };
  })
  .filter(
    (
      item
    ): item is {
      category: string;
      images: { src: string; title: string; description: string }[];
    } => item !== null
  );

const productsBase = path.join(process.cwd(), "public", "products");

const productItems = fs.readdirSync(productsBase)
  .map((folder) => {
    const folderPath = path.join(productsBase, folder);

    if (!fs.statSync(folderPath).isDirectory()) return null;

    const descriptionsPath = path.join(folderPath, "descriptions.json");

    let descriptions: Record<
      string,
      { title?: string; description?: string; price?: string }
    > = {};

    if (fs.existsSync(descriptionsPath)) {
      try {
        descriptions = JSON.parse(
          fs.readFileSync(descriptionsPath, "utf8")
        ) as Record<
          string,
          { title?: string; description?: string; price?: string }
        >;
      } catch {
        descriptions = {};
      }
    }

    const images = fs
      .readdirSync(folderPath)
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map((file) => {
        const key = file.replace(/\.[^/.]+$/, "");
        const meta = descriptions[key] || {};

        return {
          src: `/products/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`,
          title:
            typeof meta.title === "string" && meta.title.trim()
              ? meta.title
              : key,
          description:
            typeof meta.description === "string" ? meta.description : "",
          price:
            typeof meta.price === "string" ? meta.price : "",
        };
      });

    if (images.length === 0) return null;

    const category = folder
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    return {
      category,
      images,
    };
  })
  .filter(
    (
      item
    ): item is {
      category: string;
      images: {
        src: string;
        title: string;
        description: string;
        price: string;
      }[];
    } => item !== null
  );

const services = [
  "Custom 3D printed solutions",
  "Replacement parts and fixes",
  "Name personalised prints (signs, tags, gifts)",
  "Print STL files you already have or have found online",
  "Personalise or adapt existing designs",
  "Small design-to-print jobs",
  "Local collection, delivery, and part pickup for reference",
];

export default function Local3DPrintingSite() {




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
      use: "Carbon fibre and nylon-infused materials available for stronger, more durable parts where performance matters.",
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
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium tracking-wide text-blue-200 backdrop-blur-sm">
                Local 3D printing in Strathaven
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-[0.9] md:text-7xl">
                Custom parts, fixes, and personalised 3D prints.
              </h1>

              <p className="mt-5 max-w-2xl text-lg font-medium leading-7 text-blue-100 md:text-xl">
                From one-off problem-solving parts to prints from STL files, I help turn ideas, fixes, and replacements into finished parts that actually work.
              </p>

              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                Ideal for broken clips, custom-fit parts, replacement pieces, personalised prints, and simple prototypes — all printed locally with straightforward advice and quick turnaround.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
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
                  View examples
                </a>
              </div>

              <div className="mt-5 flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="rounded-full border border-blue-400/40 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 px-3 py-1 text-blue-200 backdrop-blur-sm">
                    Strong functional parts available
                  </span>
                  <span className="rounded-full border border-blue-400/40 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 px-3 py-1 text-blue-200 backdrop-blur-sm">
                    Carbon fibre & nylon materials
                  </span>
                  <span className="rounded-full border border-blue-400/40 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 px-3 py-1 text-blue-200 backdrop-blur-sm">
                    Local collection & delivery
                  </span>
                  <span className="rounded-full border border-blue-400/40 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 px-3 py-1 text-blue-200 backdrop-blur-sm">
                    Print models you find online
                  </span>
                </div>

                <div className="max-w-md text-sm leading-6 text-slate-300">
                  Used for clips, brackets, mounts, covers and everyday parts that need to do the job properly.
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur-md">
                <div className="mb-4 text-sm font-medium text-blue-200">What I can help with</div>
                <ul className="space-y-3.5 text-slate-100">
                  {services.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-blue-300 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/12 to-fuchsia-500/10 p-7 shadow-2xl backdrop-blur-md">
                <div className="mb-4 text-sm font-medium text-blue-200">Ideal for</div>
                <ul className="space-y-3.5 text-slate-100">
                  {[
                    "Broken parts that are difficult or impossible to source",
                    "Small jobs that need a custom fit",
                    "Prints from files you already have",
                    "Simple ideas and prototypes brought to life",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-blue-300 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
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

      <section id="about" className="mx-auto max-w-6xl px-6 py-12">
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

      <section className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(96,165,250,0.12),transparent_40%)]" />

        <div className="relative">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200">How it works</p>
            <h2 className="mt-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-3xl font-bold text-transparent">
              Simple process from idea to finished print
            </h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              Whether you already have an STL file, need help adapting an existing design, or just have a broken part that needs replaced, the process is kept simple.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md"
              >
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.14),transparent_35%),radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.12),transparent_35%)]" />

        <div className="relative grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Materials</p>
            <h2 className="mt-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-3xl font-bold text-transparent">
              Filament options for different jobs
            </h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              Different prints need different materials. Some are best for personalised items and display pieces, while others are better suited to tougher functional parts.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {filamentInfo.map((item) => (
                <div
                  key={item.name}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-md"
                >
                  <div className="text-lg font-semibold">{item.name}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.use}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-blue-500/10 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/25 to-sky-500/15 p-8 shadow-2xl backdrop-blur-md">
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
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(96,165,250,0.08),transparent_35%)]" />

        <div className="relative grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Popular jobs</p>
            <h2 className="mt-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-3xl font-bold text-transparent">
              Common things people ask for
            </h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              This covers a mix of practical everyday fixes, personalised items, and prints from existing files or ideas.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {popularJobs.map((job) => (
                <div
                  key={job}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl text-slate-200 backdrop-blur-md"
                >
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

      <section className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(96,165,250,0.08),transparent_35%)]" />

        <div className="relative">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Pricing guide</p>
            <h2 className="mt-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-3xl font-bold text-transparent">
              Typical pricing
            </h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              Final pricing depends on size, print time, material, and whether any design work is needed, but these guide prices help give a rough idea.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pricingGuide.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md"
              >
                <div className="text-sm uppercase tracking-[0.16em] text-blue-200">{item.title}</div>
                <div className="mt-3 text-3xl font-bold text-white">{item.price}</div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200">
              Products
            </p>
            <h2 className="mt-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-3xl font-bold text-transparent">
              Ready to order
            </h2>
          </div>

          <p className="max-w-2xl text-slate-300">
            A selection of common items I can make quickly and customise. If you’ve seen something similar, just ask.
          </p>
        </div>

        <ProductGrid items={productItems} />
      </section>

      <section id="gallery" className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(96,165,250,0.06),transparent_35%)]" />

        <div className="relative">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Gallery</p>
              <h2 className="mt-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-3xl font-bold text-transparent">
                Examples of work
              </h2>
            </div>
            <p className="max-w-2xl text-slate-300">
              Real examples of finished prints, problem-solving parts, and before-and-after fixes.
            </p>
          </div>

          <GalleryGrid items={galleryItems} />
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(96,165,250,0.08),transparent_35%)]" />

        <div className="relative grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Print from online</p>
            <h2 className="mt-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-3xl font-bold text-transparent">
              Seen a model online you want printed?
            </h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              If you’ve found a design on a model site, send over the link and I can let you know if it’s suitable for printing, what material would work best, and how much it would cost.
            </p>
            <p className="mt-4 max-w-2xl text-slate-300">
              This is ideal for novelty prints, practical organisers, replacement parts, desk items, articulated toys, and all the little things people come across online and want made locally.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.printables.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                Browse Printables
              </a>

              <a
                href="https://makerworld.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                Browse MakerWorld
              </a>

              <a
                href="https://www.thingiverse.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                Browse Thingiverse
              </a>
            </div>

            <div className="mt-6 flex">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-[1.02]"
              >
                Send a model link →
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/15 to-fuchsia-500/10 p-8 shadow-2xl backdrop-blur-md">
            <h3 className="text-2xl font-bold">How it works</h3>
            <ul className="mt-5 space-y-3 text-slate-200">
              {[
                "Find a model you like online",
                "Send me the link or file",
                "I’ll confirm if it’s suitable for printing",
                "You get a local quote and lead time",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-blue-300 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-slate-300">
              Customers should have the right to use any files or links they submit. I do not sell or distribute third-party designs unless permitted.
            </p>
          </div>
        </div>
      </section>

      <section id="quote" className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(96,165,250,0.14),transparent_35%),radial-gradient(circle_at_85%_20%,rgba(168,85,247,0.12),transparent_35%)]" />

        <div className="relative grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Quote</p>
            <h2 className="mt-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-3xl font-bold text-transparent">
              Get a quick quote
            </h2>
            <p className="mt-4 text-slate-300">
              Send over a few details and I’ll come back with a price and what’s possible. You can include a link to a file or photo, or just describe what you need. You can also send photos after submitting, and I’m happy to collect parts locally if that’s easier.
            </p>

            <form
              id="quote-form"
              action="https://formspree.io/f/xbdpezrk"
              method="POST"
              className="mt-8 grid gap-4"
            >
              <input type="hidden" name="form_type" value="quote_request" />
              <input type="hidden" name="_subject" value="New quote request – Strathaven Prints" />

              <input
                name="name"
                placeholder="Your name"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                name="_replyto"
                placeholder="Email or phone"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <textarea
                id="job_description"
                name="job_description"
                placeholder="What do you need made? Add a model link, file, photo, or rough description if you have one."
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

              <div className="mt-4 flex gap-3">
                <button
                  type="submit"
                  className="flex-1 cursor-pointer rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 font-medium text-white shadow-lg transition hover:scale-[1.02]"
                >
                  Send request
                </button>

                <button
                  type="reset"
                  className="cursor-pointer rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10"
                >
                  Clear
                </button>
              </div>
            </form>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-indigo-500/10 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/25 to-sky-500/15 p-8 shadow-2xl backdrop-blur-md">
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
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.08),transparent_35%)]" />

        <div className="relative grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Contact</p>
            <h2 className="mt-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-3xl font-bold text-transparent">
              Get a quote or ask a question
            </h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              The easiest way is to send a quick message with a description of the problem, what the part needs to do, and any useful dimensions or photos. If you already have an STL file or have found a design online, that works too.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-blue-500/10 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500 to-indigo-500 p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold">Ask a quick question</h3>
              <p className="mt-4 text-blue-50">
                Not ready for a full quote? Send a quick message and I’ll get back to you. If Facebook Messenger or WhatsApp is easier, that works too.
              </p>

              <form
                action="https://formspree.io/f/xbdpezrk"
                method="POST"
                className="mt-6 grid gap-4"
              >
                <input type="hidden" name="form_type" value="quick_question" />
                <input type="hidden" name="_subject" value="New enquiry – Strathaven Prints" />

                <input
                  name="name"
                  placeholder="Your name"
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-blue-100/70 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <input
                  name="_replyto"
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
                  className="mt-2 inline-block cursor-pointer rounded-2xl bg-white px-5 py-3 font-medium text-indigo-900 transition hover:scale-[1.02]"
                >
                  Send message
                </button>
              </form>

              <p className="mt-4 text-sm text-blue-100/80">
                Fastest response via Messenger or WhatsApp
              </p>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                {/* Facebook Messenger */}
                <a
                  href="https://m.me/61586250437570"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 rounded-2xl border border-blue-400/30 bg-blue-500/10 px-5 py-3 font-medium text-blue-100 transition hover:bg-blue-600 hover:text-white hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M12 2C6.48 2 2 6.02 2 10.94c0 2.8 1.45 5.3 3.72 6.94V22l3.52-1.94c.94.26 1.94.4 3 .4 5.52 0 10-4.02 10-8.94S17.52 2 12 2zm1.06 12.34l-2.54-2.7-4.7 2.7 5.18-5.5 2.6 2.7 4.64-2.7-5.18 5.5z" />
                  </svg>
                  Message on Facebook
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/447368607524"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 rounded-2xl border border-green-400/30 bg-green-500/10 px-5 py-3 font-medium text-green-100 transition hover:bg-green-600 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M16.01 3C9.38 3 4 8.37 4 15c0 2.64.86 5.08 2.32 7.06L4 29l7.13-2.28A11.94 11.94 0 0016.01 27C22.64 27 28 21.63 28 15S22.64 3 16.01 3zm6.47 17.06c-.27.76-1.57 1.45-2.16 1.54-.55.08-1.25.12-2.02-.12-.47-.15-1.08-.35-1.86-.68-3.27-1.41-5.4-4.7-5.56-4.92-.15-.21-1.32-1.76-1.32-3.35 0-1.6.84-2.38 1.14-2.71.3-.33.65-.41.87-.41.22 0 .44 0 .63.01.2.01.46-.07.72.55.27.66.91 2.28.99 2.45.08.16.13.35.02.56-.1.21-.15.35-.3.53-.15.18-.31.4-.44.53-.15.15-.31.31-.13.61.18.3.8 1.32 1.72 2.13 1.18 1.05 2.17 1.38 2.47 1.53.3.15.47.13.65-.08.18-.21.76-.88.96-1.18.2-.3.41-.25.69-.15.27.1 1.73.82 2.02.97.3.15.5.22.57.34.07.12.07.7-.2 1.46z" />
                  </svg>
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

      </section >

      <footer className="px-6 pb-10 pt-4 text-center text-sm text-slate-400">
        © 2026 Strathaven Prints. Custom prints, replacement parts, and personalised designs.
        <p className="mt-2 text-xs text-slate-500">
          Based in Strathaven, South Lanarkshire. Serving surrounding areas.
        </p>
      </footer>
    </div >
  );
}