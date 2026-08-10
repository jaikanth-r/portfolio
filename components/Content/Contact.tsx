export default function Contact() {
  return (
    <article>
      <p className="mb-3 text-sm text-neutral-500">contact</p>

      <h2 className="text-4xl font-semibold tracking-tight text-white">
        Let&apos;s connect.
      </h2>

      <p className="mt-6 max-w-2xl leading-7 text-neutral-400">
        I&apos;m open to interesting software, cloud, research, and
        engineering opportunities.
      </p>

      <div className="mt-8 space-y-3 text-sm">
        <p className="text-neutral-300">
          Email: <span className="text-neutral-500">your@email.com</span>
        </p>

        <p className="text-neutral-300">
          GitHub: <span className="text-neutral-500">github.com/yourusername</span>
        </p>

        <p className="text-neutral-300">
          LinkedIn: <span className="text-neutral-500">linkedin.com/in/yourusername</span>
        </p>
      </div>
    </article>
  );
}
