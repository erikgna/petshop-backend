import fs from "fs";

export const saveBase64 = (
  folderID: string,
  file: string,
  id: string
): string => {
  if (file === null || file === undefined || file === "") {
    return "";
  }
  if (file.includes("http")) {
    return file;
  }
  const base64 = file.split(",");

  fs.mkdir(`public/uploads/${folderID}`, (err) => {
    console.log(err);
  });

  const path = `public/uploads/${folderID}/${id}.jpg`;

  const buffer = Buffer.from(base64[1], "base64");
  fs.writeFileSync(path, buffer);

  return "http://localhost:8000/" + path.substring(7);
};
