export default function Hyperledger() {
  return (
    <article className="max-w-5xl">
      <p className="text-sm text-neutral-500">
        projects / hyperledger
      </p>

      <div className="mt-3 flex items-center gap-4">
        <h2 className="text-4xl font-semibold tracking-tight text-white">
          AI-Audit: Model Integrity Ledger
        </h2>

        <a
          href="https://github.com/jaikanth-r/fabric-lab.git"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open AI-Audit project on GitHub"
          title="Open project"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-neutral-400 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
        >
          <span className="text-lg leading-none">↗</span>
        </a>
      </div>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-400">
        A decentralized audit log for AI models built on Hyperledger
        Fabric. The system helps verify that AI models have not been
        tampered with by storing their cryptographic hashes on a
        permissioned ledger.
      </p>

      <section className="mt-10">
        <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500">
          Key Features
        </h3>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[
            {
              title: "Glassmorphism UI",
              description:
                "A modern transparent interface for interacting with the audit system.",
            },
            {
              title: "Blockchain Integration",
              description:
                "Connects the application to a Hyperledger Fabric network through the Fabric Gateway.",
            },
            {
              title: "Real-time Auditing",
              description:
                "Allows model history and integrity to be verified against ledger records.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="glass-panel rounded-xl p-5"
            >
              <h4 className="text-sm font-medium text-neutral-300">
                {feature.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500">
          Tech Stack
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Next.js 15",
            "Tailwind CSS",
            "Hyperledger Fabric v2.5",
            "Docker",
            "TypeScript",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 px-3 py-1.5 text-sm text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500">
          Local Development
        </h3>

        <div className="mt-4 space-y-5 text-sm leading-7 text-neutral-400">
          <div>
            <p className="mb-2 text-neutral-300">
              01 / Initialize the Fabric Network
            </p>

            <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/20 p-4 text-xs leading-6 text-neutral-400">
{`cd ~/fabric-samples/test-network
./network.sh up createChannel -c mychannel -ca`}
            </pre>
          </div>

          <div>
            <p className="mb-2 text-neutral-300">
              02 / Deploy the AI-Audit Chaincode
            </p>

            <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/20 p-4 text-xs leading-6 text-neutral-400">
{`./network.sh deployCC -ccn aiaudit \\
  -ccp ../../workspaces/fabric-lab/chaincode \\
  -ccl typescript`}
            </pre>
          </div>

          <div>
            <p className="mb-2 text-neutral-300">
              03 / Launch the Next.js Frontend
            </p>

            <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/20 p-4 text-xs leading-6 text-neutral-400">
{`cd /workspaces/fabric-lab/aiaudit-dapp
npm install
npm run dev`}
            </pre>
          </div>

          <div>
            <p className="mb-2 text-neutral-300">
              04 / Verify Docker Infrastructure
            </p>

            <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/20 p-4 text-xs leading-6 text-neutral-400">
{`docker ps`}
            </pre>
          </div>
        </div>
      </section>
    </article>
  );
}
