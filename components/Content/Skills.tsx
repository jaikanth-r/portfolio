const skills = {
  Programming: [
    "Python",
    "Java",
    "Go",
    "JavaScript",
    "TypeScript",
  ],
  "Cloud & DevOps": [
    "AWS",
    "Docker",
    "Kubernetes",
    "Linux",
    "Git",
  ],
  Blockchain: [
    "Hyperledger Fabric",
    "Solidity",
    "Hardhat",
    "Web3",
  ],
  Web: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
  ],
  Databases: [
    "SQL",
    "MySQL",
    "MongoDB",
  ],
};

const iconMap: Record<string, string> = {
  Python: "https://cdn.simpleicons.org/python",
  Java: "https://cdn.simpleicons.org/openjdk",
  Go: "https://cdn.simpleicons.org/go",
  JavaScript: "https://cdn.simpleicons.org/javascript",
  TypeScript: "https://cdn.simpleicons.org/typescript",

  AWS: "https://cdn.simpleicons.org/amazonwebservices",
  Docker: "https://cdn.simpleicons.org/docker",
  Kubernetes: "https://cdn.simpleicons.org/kubernetes",
  Linux: "https://cdn.simpleicons.org/linux",
  Git: "https://cdn.simpleicons.org/git",

  "Hyperledger Fabric": "https://cdn.simpleicons.org/hyperledger",
  Solidity: "https://cdn.simpleicons.org/solidity",
  Hardhat: "https://cdn.simpleicons.org/hardhat",
  Web3: "https://cdn.simpleicons.org/web3dotjs",

  React: "https://cdn.simpleicons.org/react",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs",

  SQL: "https://cdn.simpleicons.org/mysql",
  MySQL: "https://cdn.simpleicons.org/mysql",
  MongoDB: "https://cdn.simpleicons.org/mongodb",
};

export default function Skills() {
  return (
    <article className="max-w-5xl">
      <p className="text-sm text-neutral-500">
        skills
      </p>

      <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">
        Technical Skills
      </h2>

      <div className="mt-10 space-y-10">
        {Object.entries(skills).map(([category, items]) => (
          <section key={category}>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-neutral-500">
              {category}
            </h3>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {items.map((skill) => (
                <div
                  key={skill}
                  className="glass-panel flex min-h-[76px] items-center gap-3 rounded-xl px-4 py-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                    <span
                      aria-hidden="true"
                      className="h-5 w-5 bg-contain bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url("${iconMap[skill]}")`,
                      }}
                    />
                  </div>

                  <span className="text-sm text-neutral-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
