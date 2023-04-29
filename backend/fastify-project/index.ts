import fastify from "fastify";

const server = fastify();

server.get("/example", async (request, reply) => {
  return {
    hello: "world",
  };
});

server.listen({ port: 5050 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
