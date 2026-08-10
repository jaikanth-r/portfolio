import Image from "next/image";

export default function Profile() {
  return (
    <article className="max-w-4xl">
      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        <div className="shrink-0">
          <Image
            src="/images/JAI.jpg"
            alt="Jaikanth"
            width={240}
            height={240}
            className="h-auto w-48 rounded-2xl border border-white/10"
            priority
          />
        </div>

        <div className="pt-1">
          <p className="text-sm text-neutral-500">
            about / profile
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">
            Jaikanth
          </h2>

          <p className="mt-2 text-lg text-neutral-400">
            Software Developer
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-neutral-500">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Open to opportunities
          </div>
        </div>
      </div>

      <div className="mt-12 max-w-3xl">
        <p className="text-lg leading-8 text-neutral-400">
          I build software with a focus on cloud computing,
          distributed systems, blockchain, and modern software
          engineering.
        </p>

        <p className="mt-5 leading-7 text-neutral-500">
          I enjoy understanding how systems work underneath the
          abstraction and turning that understanding into practical,
          reliable software.
        </p>
      </div>
    </article>
  );
}
