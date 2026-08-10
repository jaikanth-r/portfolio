"use client";

import { useState, type ReactNode } from "react";

type FolderProps = {
  name: string;
  children?: ReactNode;
  onSelect: () => void;
  onClose: () => void;
};

export default function Folder({
  name,
  children,
  onSelect,
  onClose,
}: FolderProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (open) {
      setOpen(false);

      if (name === "about") {
        onSelect();
      } else {
        onClose();
      }

      return;
    }

    setOpen(true);
    onSelect();
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        aria-expanded={open}
        className="flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-sm text-neutral-300 hover:bg-white/[0.04] hover:text-white"
      >
        <span className="w-3 text-[10px] text-neutral-500">
          {open ? "▼" : "▶"}
        </span>

        <span className="text-neutral-500">
          {open ? "▾" : "▸"}
        </span>

        <span>{name}</span>
      </button>

      {open ? (
        <div className="ml-4 border-l border-white/10 pl-2">
          {children}
        </div>
      ) : null}
    </div>
  );
}
