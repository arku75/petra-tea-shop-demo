import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
const root = resolve("docs");
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "/petra-tea-shop-demo";
const port = Number(process.env.PORT ?? 3000);
const types = {".html":"text/html; charset=utf-8", ".js":"text/javascript; charset=utf-8", ".css":"text/css; charset=utf-8", ".json":"application/json", ".txt":"text/plain; charset=utf-8", ".png":"image/png", ".webp":"image/webp", ".svg":"image/svg+xml", ".ico":"image/x-icon", ".woff":"font/woff", ".woff2":"font/woff2", ".glb":"model/gltf-binary", ".xml":"application/xml", ".webmanifest":"application/manifest+json"};
createServer(async (request, response) => {
  try {
    const url = new URL(request.url, "http://localhost");
    if (url.pathname === "/") { response.writeHead(302, { Location: `${base}/` }); response.end(); return; }
    if (base && url.pathname !== base && !url.pathname.startsWith(`${base}/`)) throw new Error("not found");
    let path = resolve(root, "." + decodeURIComponent(url.pathname.slice(base.length) || "/"));
    if (path !== root && !path.startsWith(root + sep)) throw new Error("invalid path");
    if ((await stat(path)).isDirectory()) path = resolve(path, "index.html");
    const data = await readFile(path);
    response.writeHead(200, {"Content-Type": types[extname(path)] ?? "application/octet-stream"});
    response.end(data);
  } catch { response.writeHead(404); response.end("Not found"); }
}).listen(port, "0.0.0.0", () => console.log(`Demo: http://localhost:${port}${base}/`));
