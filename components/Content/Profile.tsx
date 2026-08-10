import Image from "next/image";

export default function Profile() {
  return (
    <article className="max-w-5xl">
      <p className="text-sm text-neutral-500">
        about / profile
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-[220px_1fr] md:items-start">
        <div className="relative h-[220px] w-[220px] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/images/JAI.jpg"
            alt="Jaikanth R."
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="pt-1">
          <h2 className="text-4xl font-semibold tracking-tight text-white">
            Jaikanth R.
          </h2>

          <p className="mt-2 text-lg text-neutral-400">
            Software Engineer · Cloud &amp; Distributed Systems
          </p>

          <div className="mt-8 max-w-3xl space-y-5">
            <p className="text-lg leading-8 text-neutral-400">
              I’m a software engineer focused on cloud computing,
              distributed systems, blockchain infrastructure, and
              backend development.
            </p>

            <p className="leading-7 text-neutral-500">
              My work involves building and experimenting with systems
              across Linux, containers, networking, cloud platforms, and
              decentralized technologies. I’m particularly interested in
              understanding how complex systems operate beneath their
              abstractions and designing reliable, scalable solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-8">
        <p className="mb-5 text-sm font-medium uppercase tracking-wider text-neutral-500">
          Currently focused on
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Cloud Architecture",
            "Distributed Systems",
            "Blockchain Infrastructure",
            "Linux & Networking",
            "Backend Engineering",
            "Systems Design",
          ].map((item) => (
            <div
              key={item}
              className="glass-panel rounded-xl px-4 py-3 text-sm text-neutral-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
