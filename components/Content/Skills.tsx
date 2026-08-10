const skills = {
  "Programming Languages": [
    "Python",
    "Java",
    "C",
    "C++",
    "C#",
    "Go",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Bash",
    "Solidity",
    "Rust",
    "Vyper",
  ],

  "Web & Application Development": [
    "HTML5",
    "CSS3",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Flask",
    "REST APIs",
    "GraphQL",
    "Full-Stack Development",
  ],

  "Cloud & DevOps": [
    "AWS",
    "Docker",
    "Docker Compose",
    "Kubernetes",
    "Linux",
    "Git",
    "GitHub",
    "CI/CD",
    "DevOps",
    "DevSecOps",
    "Containerization",
    "IAM",
  ],

  "Blockchain & Web3": [
    "Hyperledger Fabric",
    "Fabric Gateway",
    "Chaincode",
    "Smart Contracts",
    "Solidity",
    "Hardhat",
    "Web3",
    "Ethereum",
    "Blockchain",
    "Distributed Ledger Technology",
  ],

  "Databases & Data": [
    "SQL",
    "MySQL",
    "MariaDB",
    "MongoDB",
    "DBMS",
    "RDBMS",
    "Data Analytics",
    "Data Mining",
    "Matplotlib",
  ],

  "Systems & Networking": [
    "Linux",
    "Operating Systems",
    "Computer Networks",
    "TCP/IP",
    "DNS",
    "HTTP/HTTPS",
    "SSH",
    "Virtual Machines",
    "Networking",
    "Distributed Systems",
    "Systems Architecture",
  ],

  Security: [
    "Cybersecurity",
    "Cloud Security",
    "DevSecOps",
    "IAM",
    "OAuth 2.0",
    "Cryptographic Hashing",
    "Zero-Knowledge Proofs",
    "Application Security",
    "Vulnerability Management",
    "Container Security",
    "Trivy",
  ],

  "Software Engineering": [
    "Object-Oriented Programming",
    "Data Structures",
    "Algorithms",
    "Software Development",
    "Software Engineering",
    "SDLC",
    "Software Testing",
    "Debugging",
    "Problem Solving",
    "System Design",
  ],

  "Tools & Platforms": [
    "Maven",
    "Gradle",
    "npm",
    "GitHub Codespaces",
    "UTM",
  ],
};

const iconMap: Record<string, string> = {
  Python: "https://cdn.simpleicons.org/python",
  Java: "https://cdn.simpleicons.org/openjdk",
  C: "https://cdn.simpleicons.org/c",
  "C++": "https://cdn.simpleicons.org/cplusplus",
  "C#": "https://cdn.simpleicons.org/csharp",
  Go: "https://cdn.simpleicons.org/go",
  JavaScript: "https://cdn.simpleicons.org/javascript",
  TypeScript: "https://cdn.simpleicons.org/typescript",
  PHP: "https://cdn.simpleicons.org/php",
  Bash: "https://cdn.simpleicons.org/gnubash",
  Solidity: "https://cdn.simpleicons.org/solidity",
  Rust: "https://cdn.simpleicons.org/rust",
  Vyper: "https://cdn.simpleicons.org/vyper",

  HTML5: "https://cdn.simpleicons.org/html5",
  CSS3: "https://cdn.simpleicons.org/css3",
  React: "https://cdn.simpleicons.org/react",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs",
  Flask: "https://cdn.simpleicons.org/flask",
  "REST APIs": "https://cdn.simpleicons.org/postman",
  GraphQL: "https://cdn.simpleicons.org/graphql",
  "Full-Stack Development": "https://cdn.simpleicons.org/stackshare",

  AWS: "https://cdn.simpleicons.org/amazonwebservices",
  Docker: "https://cdn.simpleicons.org/docker",
  "Docker Compose": "https://cdn.simpleicons.org/docker",
  Kubernetes: "https://cdn.simpleicons.org/kubernetes",
  Linux: "https://cdn.simpleicons.org/linux",
  Git: "https://cdn.simpleicons.org/git",
  GitHub: "https://cdn.simpleicons.org/github",
  "CI/CD": "https://cdn.simpleicons.org/githubactions",
  DevOps: "https://cdn.simpleicons.org/azuredevops",
  DevSecOps: "https://cdn.simpleicons.org/owasp",
  Containerization: "https://cdn.simpleicons.org/docker",
  IAM: "https://cdn.simpleicons.org/amazonwebservices",

  "Hyperledger Fabric": "https://cdn.simpleicons.org/hyperledger",
  "Fabric Gateway": "https://cdn.simpleicons.org/hyperledger",
  Chaincode: "https://cdn.simpleicons.org/hyperledger",
  "Smart Contracts": "https://cdn.simpleicons.org/ethereum",
  Hardhat: "https://cdn.simpleicons.org/hardhat",
  Web3: "https://cdn.simpleicons.org/web3dotjs",
  Ethereum: "https://cdn.simpleicons.org/ethereum",
  Blockchain: "https://cdn.simpleicons.org/bitcoin",
  "Distributed Ledger Technology": "https://cdn.simpleicons.org/bitcoin",

  SQL: "https://cdn.simpleicons.org/mysql",
  MySQL: "https://cdn.simpleicons.org/mysql",
  MariaDB: "https://cdn.simpleicons.org/mariadb",
  MongoDB: "https://cdn.simpleicons.org/mongodb",
  DBMS: "https://cdn.simpleicons.org/mysql",
  RDBMS: "https://cdn.simpleicons.org/mysql",
  "Data Analytics": "https://cdn.simpleicons.org/googleanalytics",
  "Data Mining": "https://cdn.simpleicons.org/databricks",
  Matplotlib: "https://cdn.simpleicons.org/matplotlib",

  "Operating Systems": "https://cdn.simpleicons.org/linux",
  "Computer Networks": "https://cdn.simpleicons.org/cisco",
  "TCP/IP": "https://cdn.simpleicons.org/cisco",
  DNS: "https://cdn.simpleicons.org/cloudflare",
  "HTTP/HTTPS": "https://cdn.simpleicons.org/httpie",
  SSH: "https://cdn.simpleicons.org/openssh",
  "Virtual Machines": "https://cdn.simpleicons.org/vmware",
  Networking: "https://cdn.simpleicons.org/cisco",
  "Distributed Systems": "https://cdn.simpleicons.org/apache",
  "Systems Architecture": "https://cdn.simpleicons.org/architecture",

  Cybersecurity: "https://cdn.simpleicons.org/kalilinux",
  "Cloud Security": "https://cdn.simpleicons.org/cloudflare",
  "OAuth 2.0": "https://cdn.simpleicons.org/auth0",
  "Cryptographic Hashing": "https://cdn.simpleicons.org/letsencrypt",
  "Zero-Knowledge Proofs": "https://cdn.simpleicons.org/ethereum",
  "Application Security": "https://cdn.simpleicons.org/owasp",
  "Vulnerability Management": "https://cdn.simpleicons.org/trivy",
  "Container Security": "https://cdn.simpleicons.org/docker",
  Trivy: "https://cdn.simpleicons.org/trivy",

  "Object-Oriented Programming": "https://cdn.simpleicons.org/java",
  "Data Structures": "https://cdn.simpleicons.org/cplusplus",
  Algorithms: "https://cdn.simpleicons.org/codeforces",
  "Software Development": "https://cdn.simpleicons.org/github",
  "Software Engineering": "https://cdn.simpleicons.org/github",
  SDLC: "https://cdn.simpleicons.org/jira",
  "Software Testing": "https://cdn.simpleicons.org/testinglibrary",
  Debugging: "https://cdn.simpleicons.org/bugatti",
  "Problem Solving": "https://cdn.simpleicons.org/codewars",
  "System Design": "https://cdn.simpleicons.org/diagramsdotnet",

  Maven: "https://cdn.simpleicons.org/apachemaven",
  Gradle: "https://cdn.simpleicons.org/gradle",
  npm: "https://cdn.simpleicons.org/npm",
  "GitHub Codespaces": "https://cdn.simpleicons.org/github",
  UTM: "https://cdn.simpleicons.org/apple",
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
                        backgroundImage: `url("${iconMap[skill] ?? "https://cdn.simpleicons.org/github"}")`,
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
