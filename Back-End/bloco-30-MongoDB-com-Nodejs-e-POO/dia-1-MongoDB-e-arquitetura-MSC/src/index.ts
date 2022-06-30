import { App } from "./app";

const server = new App().app;

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
})