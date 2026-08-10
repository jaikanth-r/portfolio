export default function Research() {
  return (
    <article>
      <p className="mb-3 text-sm text-neutral-500">research</p>

      <h2 className="text-4xl font-semibold tracking-tight text-white">
        Research
      </h2>

      <div className="mt-8 space-y-8">
        <section>
          <h3 className="text-lg font-medium text-white">
            Blockchain & Privacy
          </h3>

          <p className="mt-3 max-w-2xl leading-7 text-neutral-400">
            Exploring privacy-preserving validation, blockchain-based
            authentication, distributed systems, and zero-knowledge
            technologies.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-medium text-white">
            Areas of Interest
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Distributed Systems",
              "Cloud Computing",
              "Blockchain",
              "Zero-Knowledge Proofs",
              "AI",
              "Security",
            ].map((item) => (
              <span
                key={item}
                className="rounded-md border border-white/10 px-3 py-1.5 text-sm text-neutral-400"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
