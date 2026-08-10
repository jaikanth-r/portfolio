export default function Interests() {
  return (
    <article>
      <p className="mb-3 text-sm text-neutral-500">about / interests</p>

      <h2 className="text-4xl font-semibold tracking-tight text-white">
        Interests
      </h2>

      <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 p-5">
          <h3 className="text-white">Cloud Computing</h3>
          <p className="mt-2 text-sm text-neutral-400">
            Distributed infrastructure, containers, and cloud platforms.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 p-5">
          <h3 className="text-white">Blockchain</h3>
          <p className="mt-2 text-sm text-neutral-400">
            Distributed ledgers, smart contracts, and decentralized systems.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 p-5">
          <h3 className="text-white">Artificial Intelligence</h3>
          <p className="mt-2 text-sm text-neutral-400">
            AI systems, automation, and intelligent software.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 p-5">
          <h3 className="text-white">Systems & Linux</h3>
          <p className="mt-2 text-sm text-neutral-400">
            Operating systems, networking, terminals, and low-level systems.
          </p>
        </div>
      </div>
    </article>
  );
}
