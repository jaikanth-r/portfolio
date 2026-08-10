"use client";

import { fileTree } from "./tree-data";
import File from "./File";
import Folder from "./Folder";

type FileTreeProps = {
  selectedFile: string;
  onSelect: (name: string) => void;
};

export default function FileTree({
  selectedFile,
  onSelect,
}: FileTreeProps) {
  return (
    <div className="space-y-1">
      {fileTree.map((item) =>
        item.type === "folder" ? (
          <Folder
            key={item.name}
            name={item.name}
            onSelect={() =>
              onSelect(item.children?.[0]?.name ?? item.name)
            }
            onClose={() => onSelect("")}
          >
            {item.children?.map((child) => (
              <File
                key={child.name}
                name={child.name}
                selected={selectedFile === child.name}
                onClick={() => onSelect(child.name)}
              />
            ))}
          </Folder>
        ) : (
          <File
            key={item.name}
            name={item.name}
            selected={selectedFile === item.name}
            onClick={() => onSelect(item.name)}
          />
        )
      )}
    </div>
  );
}
