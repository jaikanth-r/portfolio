export default function Contact() {
  return (
    <article className="max-w-5xl">
      <p className="text-sm text-neutral-500">
        contact
      </p>

      <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">
        Let&apos;s connect.
      </h2>

      <p className="mt-6 max-w-2xl leading-7 text-neutral-400">
        I&apos;m open to software engineering, cloud, research,
        and interesting technical opportunities.
      </p>

      <p className="mt-3 max-w-2xl leading-7 text-neutral-500">
        Feel free to reach out.
      </p>

      <div className="mt-10 space-y-3">
        <a
          href="mailto:jaikanthr01@gmail.com"
          className="glass-panel flex items-center justify-between rounded-xl px-5 py-4 transition hover:bg-white/[0.04]"
        >
          <span className="text-sm text-neutral-300">
            Email
          </span>

          <span className="text-sm text-neutral-500">
            jaikanthr01@gmail.com ↗
          </span>
        </a>

        <a
          href="tel:+919003566338"
          className="glass-panel flex items-center justify-between rounded-xl px-5 py-4 transition hover:bg-white/[0.04]"
        >
          <span className="text-sm text-neutral-300">
            Phone
          </span>

          <span className="text-sm text-neutral-500">
            +91 9003566338 ↗
          </span>
        </a>

        <a
          href="https://github.com/jaikanth-r"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel flex items-center justify-between rounded-xl px-5 py-4 transition hover:bg-white/[0.04]"
        >
          <span className="text-sm text-neutral-300">
            GitHub
          </span>

          <span className="text-sm text-neutral-500">
            jaikanth-r ↗
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/jaikanthr01"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel flex items-center justify-between rounded-xl px-5 py-4 transition hover:bg-white/[0.04]"
        >
          <span className="text-sm text-neutral-300">
            LinkedIn
          </span>

          <span className="text-sm text-neutral-500">
            jaikanthr01 ↗
          </span>
        </a>
      </div>
    </article>
  );
}
