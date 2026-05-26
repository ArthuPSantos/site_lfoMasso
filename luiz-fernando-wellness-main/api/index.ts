import server from "../src/server";

export const config = {
  runtime: "nodejs",
};

export default async function handler(req: Request) {
  return server.fetch(req, {}, {});
}