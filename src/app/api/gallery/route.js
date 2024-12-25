import fs from "fs";
import path from "path";

export async function GET(req) {
  const galleryPath = path.join(process.cwd(), "public", "gallery");
  const folders = fs.readdirSync(galleryPath, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((folder) => folder.name);

  const data = folders.map((folderName) => {
    const folderPath = path.join(galleryPath, folderName);
    const images = fs.readdirSync(folderPath)
      .filter((file) => /\.(png|jpe?g|gif|webp|JPG)$/.test(file))
      .map((file) => `/gallery/${folderName}/${file}`);

    return { folderName, images };
  });

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
