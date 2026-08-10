export default function ImageMatcher() {
  return (
    <article className="max-w-5xl">
      <p className="text-sm text-neutral-500">
        projects / cloud-sec
      </p>

      <div className="mt-3 flex items-center gap-4">
        <h2 className="text-4xl font-semibold tracking-tight text-white">
          Hardened Cloud-Native Microservice
        </h2>

        <a
          href="https://github.com/jaikanth-r/cloud-sec-project"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Cloud Security project on GitHub"
          title="Open project"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-neutral-400 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
        >
          <span className="text-lg leading-none">↗</span>
        </a>
      </div>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-400">
        A hardened cloud-native microservice demonstrating a complete
        DevSecOps lifecycle, transforming a vulnerable Python Flask
        application into a production-ready containerized service.
      </p>

      <section className="mt-10">
        <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500">
          Security Implementations
        </h3>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            {
              title: "Image Hardening",
              description:
                "Migrated from bloated base images to python:3.12-slim, reducing vulnerabilities from 199 to zero critical vulnerabilities.",
            },
            {
              title: "Least Privilege",
              description:
                "Implemented non-root execution using the dedicated python user inside the Docker container.",
            },
            {
              title: "Vulnerability Management",
              description:
                "Integrated Trivy for automated container vulnerability scanning.",
            },
            {
              title: "Command Injection Remediation",
              description:
                "Mitigated command injection and RCE by replacing insecure os.popen calls with parameterized subprocess.run using shell=False.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="glass-panel rounded-xl p-5"
            >
              <h4 className="text-sm font-medium text-neutral-300">
                {item.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                {item.description}
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
            "Python 3.12",
            "Flask",
            "Docker",
            "Multi-stage Builds",
            "Trivy",
            "DevSecOps",
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
    </article>
  );
}
