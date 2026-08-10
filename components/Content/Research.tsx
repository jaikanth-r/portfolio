export default function Research() {
  return (
    <article className="max-w-5xl">
      <p className="text-sm text-neutral-500">
        research
      </p>

      <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">
        Research
      </h2>

      <section className="mt-10">
        <h3 className="text-lg font-medium text-white">
          Blockchain &amp; Privacy
        </h3>

        <p className="mt-3 max-w-3xl leading-7 text-neutral-400">
          Exploring privacy-preserving validation mechanisms for
          blockchain-based systems, with particular interest in
          zero-knowledge proofs, decentralized verification, and
          trustworthy digital authentication.
        </p>
      </section>

      <section className="mt-10">
        <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500">
          Current Research Direction
        </h3>

        <div className="glass-panel mt-4 rounded-xl p-6">
          <h4 className="text-xl font-medium leading-8 text-white">
            Environmental Integrity Monitoring &amp;
            Zero-Knowledge Proof-Based Privacy-Preserving
            Validation for Blockchain-Enabled Product Authentication
          </h4>

          <p className="mt-4 max-w-3xl leading-7 text-neutral-400">
            Exploring a decentralized verification framework that
            combines blockchain-based product authentication with
            environmental integrity monitoring and zero-knowledge
            proofs. The approach focuses on validating product-related
            claims while minimizing the exposure of sensitive
            information.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500">
          Research Focus
        </h3>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            "Blockchain Systems",
            "Zero-Knowledge Proofs",
            "Privacy-Preserving Validation",
            "Distributed Systems",
            "Product Authentication",
            "Supply Chain Systems",
            "Cloud Computing",
            "Security",
          ].map((item) => (
            <div
              key={item}
              className="glass-panel rounded-xl px-4 py-3 text-sm text-neutral-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
