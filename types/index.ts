export type TreeItem = {
  name: string;
  type: "file" | "folder";
  children?: TreeItem[];
};
