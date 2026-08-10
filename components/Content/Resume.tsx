export default function Resume() {
  return (
    <article className="max-w-5xl">
      <p className="text-sm text-neutral-500">
        resume
      </p>

      <div className="mt-3 flex items-center justify-between gap-4">
        <h2 className="text-4xl font-semibold tracking-tight text-white">
          Resume
        </h2>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
            />
          </svg>
          Download
        </a>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-black/20">
        <iframe
          src="/resume.pdf"
          title="Jaikanth R. Resume"
          className="h-[900px] w-full"
        />
      </div>
    </article>
  );
}
