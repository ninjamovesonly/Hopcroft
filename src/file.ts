import fs from "fs";
import path from "path";

export const __readFile = (_path) => {
  const filePath = __filePath(_path);
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
};

export const __writeFile = (filePath, slugs) => {
  return fs.writeFileSync(filePath, JSON.stringify(slugs));
};

export const __filePath = (_path) => {
  return path.join(process.cwd(), _path);
};
