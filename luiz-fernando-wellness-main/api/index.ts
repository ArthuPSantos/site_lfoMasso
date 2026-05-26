export const config = {
  runtime: "nodejs",
};

export default async function handler(req: Request) {
  const server = await import("../src/server.ts");
  return server.default.fetch(req, {}, {});
}