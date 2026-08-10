export default function Experience() {
  return (
    <article>
      <p className="mb-3 text-sm text-neutral-500">experience</p>

      <h2 className="text-4xl font-semibold tracking-tight text-white">
        Experience
      </h2>

      <div className="mt-8 space-y-8">
        <section>
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-lg font-medium text-white">
              Software & Cloud Projects
            </h3>
            <span className="text-sm text-neutral-500">
              Selected work
            </span>
          </div>

          <p className="mt-3 max-w-2xl leading-7 text-neutral-400">
            Hands-on development across cloud computing, blockchain,
            Linux environments, networking, and software engineering.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-medium text-white">
            Research & Development
          </h3>

          <p className="mt-3 max-w-2xl leading-7 text-neutral-400">
            Exploring distributed systems, blockchain architectures,
            privacy-preserving technologies, and emerging computing
            systems.
          </p>
        </section>
      </div>
    </article>
  );
}
