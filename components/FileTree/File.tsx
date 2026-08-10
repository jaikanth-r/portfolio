"use client";

type FileProps = {
  name: string;
  selected?: boolean;
  onClick: () => void;
};

export default function File({
  name,
  selected = false,
  onClick,
}: FileProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-sm transition ${
        selected
          ? "bg-white/[0.08] text-white"
          : "text-neutral-400 hover:bg-white/[0.04] hover:text-white"
      }`}
    >
      <span className="text-[11px] text-neutral-600">●</span>
      <span>{name}</span>
    </button>
  );
}
