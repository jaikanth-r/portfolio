export default function CloudMonitor() {
  return (
    <article className="max-w-5xl">
      <p className="text-sm text-neutral-500">
        projects / payroll
      </p>

      <div className="mt-3 flex items-center gap-4">
        <h2 className="text-4xl font-semibold tracking-tight text-white">
          Payroll Management System
        </h2>

        <a
          href="https://github.com/jaikanth-r/payroll-system"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Payroll Management System on GitHub"
          title="Open project"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-neutral-400 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
        >
          <span className="text-lg leading-none">↗</span>
        </a>
      </div>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-400">
        A containerized payroll management system for employee records,
        automated salary calculations, compensation reporting, and
        persistent database storage.
      </p>

      <section className="mt-10">
        <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500">
          Key Capabilities
        </h3>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            {
              title: "Employee Record Management",
              description:
                "CRUD operations for employee onboarding, records, and organizational assignments.",
            },
            {
              title: "Automated Payroll Computation",
              description:
                "Processes gross pay, statutory deductions, tax withholdings, allowances, and net salary.",
            },
            {
              title: "Containerized Architecture",
              description:
                "Separates the PHP application and MariaDB database into isolated Docker services.",
            },
            {
              title: "Automated Database Provisioning",
              description:
                "Bootstrap scripts initialize the database schema and seed data during first-time deployment.",
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
          Architecture
        </h3>

        <div className="mt-4 glass-panel rounded-xl p-6">
          <div className="grid gap-4 md:grid-cols-3 md:items-center">
            <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
              <p className="text-sm font-medium text-neutral-300">
                Web Application
              </p>
              <p className="mt-2 text-xs leading-5 text-neutral-500">
                PHP / Apache
                <br />
                Service: webapp
                <br />
                Port: 8080
              </p>
            </div>

            <div className="hidden text-center text-neutral-600 md:block">
              →
            </div>

            <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
              <p className="text-sm font-medium text-neutral-300">
                Database
              </p>
              <p className="mt-2 text-xs leading-5 text-neutral-500">
                MariaDB 10.x
                <br />
                Service: db
                <br />
                Port: 3306
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.02] p-4">
            <p className="text-sm font-medium text-neutral-300">
              Persistent Storage
            </p>
            <p className="mt-2 text-xs text-neutral-500">
              Docker named volume: mariadb_data
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500">
          Tech Stack
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "PHP",
            "MariaDB",
            "Docker",
            "Docker Compose",
            "Apache",
            "PDO",
            "SQL",
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
          Quick Start
        </h3>

        <div className="mt-4 space-y-5">
          <div>
            <p className="mb-2 text-sm text-neutral-300">
              01 / Configure environment
            </p>

            <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/20 p-4 text-xs leading-6 text-neutral-400">
{`git clone https://github.com/jaikanth-r/payroll-system.git
cd payroll-system
cp .env.example .env`}
            </pre>
          </div>

          <div>
            <p className="mb-2 text-sm text-neutral-300">
              02 / Build and start the containers
            </p>

            <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/20 p-4 text-xs leading-6 text-neutral-400">
{`docker-compose up -d --build
docker-compose ps`}
            </pre>
          </div>

          <div>
            <p className="mb-2 text-sm text-neutral-300">
              03 / Access the application
            </p>

            <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/20 p-4 text-xs leading-6 text-neutral-400">
{`http://localhost:8080`}
            </pre>
          </div>
        </div>
      </section>
    </article>
  );
}
