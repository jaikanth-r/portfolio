export default function Education() {
  return (
    <article className="max-w-5xl">
      <p className="text-sm text-neutral-500">
        about / education
      </p>

      <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">
        Education
      </h2>

      <div className="mt-10 space-y-3">
        <section className="glass-panel rounded-xl p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-medium text-white">
                M.Tech
              </h3>

              <p className="mt-1 text-sm text-neutral-400">
                Cloud Computing &amp; Blockchain
              </p>
            </div>

            <span className="text-sm text-neutral-500">
              Postgraduate
            </span>
          </div>
        </section>

        <section className="glass-panel rounded-xl p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-medium text-white">
                B.E. Computer Science &amp; Engineering
              </h3>

              <p className="mt-1 text-sm text-neutral-400">
                Computer Science &amp; Engineering
              </p>
            </div>

            <span className="text-sm text-neutral-500">
              Undergraduate
            </span>
          </div>
        </section>

        <section className="glass-panel rounded-xl p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-medium text-white">
                Diploma in Computer Engineering
              </h3>

              <p className="mt-1 text-sm text-neutral-400">
                Government of Tamil Nadu — Department of Technical Education
              </p>
            </div>

            <span className="text-sm text-neutral-500">
              Diploma
            </span>
          </div>
        </section>
      </div>
    </article>
  );
}
