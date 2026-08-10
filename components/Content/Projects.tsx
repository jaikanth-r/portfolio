export default function Projects() {
  return (
    <article>
      <p className="mb-3 text-sm text-neutral-500">projects</p>

      <h2 className="text-4xl font-semibold tracking-tight text-white">
        Projects
      </h2>

      <div className="mt-8 space-y-6">
        <section className="rounded-xl border border-white/10 p-6">
          <h3 className="text-xl font-medium text-white">
            Hyperledger Fabric Network
          </h3>

          <p className="mt-3 text-neutral-400">
            Built and deployed a permissioned blockchain network using
            Hyperledger Fabric, Docker, and Java chaincode.
          </p>

          <p className="mt-4 text-sm text-neutral-500">
            Java · Hyperledger Fabric · Docker · Linux
          </p>
        </section>

        <section className="rounded-xl border border-white/10 p-6">
          <h3 className="text-xl font-medium text-white">
            Image Matcher
          </h3>

          <p className="mt-3 text-neutral-400">
            An image matching project focused on comparing visual features
            and producing useful similarity results.
          </p>

          <p className="mt-4 text-sm text-neutral-500">
            Python · Computer Vision
          </p>
        </section>

        <section className="rounded-xl border border-white/10 p-6">
          <h3 className="text-xl font-medium text-white">
            Cloud Experiments
          </h3>

          <p className="mt-3 text-neutral-400">
            Experiments involving cloud infrastructure, containers,
            networking, and Linux environments.
          </p>

          <p className="mt-4 text-sm text-neutral-500">
            AWS · Docker · Linux · Networking
          </p>
        </section>
      </div>
    </article>
  );
}
