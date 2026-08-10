export default function Experience() {
  return (
    <article className="max-w-5xl">
      <p className="text-sm text-neutral-500">
        experience
      </p>

      <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">
        Experience
      </h2>

      <div className="mt-10 space-y-8">
        <section className="glass-panel rounded-xl p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-medium text-white">
                Full Stack Web Development
              </h3>

              <p className="mt-1 text-sm text-neutral-400">
                Skill Vertex · Bangalore
              </p>
            </div>

            <span className="text-sm text-neutral-500">
              2023
            </span>
          </div>

          <p className="mt-5 max-w-3xl leading-7 text-neutral-400">
            Hands-on experience in full-stack web development within a
            professional development environment, working across
            frontend and backend aspects of web applications.
          </p>
        </section>
      </div>
    </article>
  );
}
