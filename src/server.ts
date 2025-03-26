import 'reflect-metadata';
import app from "./app";
import env from "./environment/env";

const port = env.APP_PORT ? env.APP_PORT : 5173;

app.listen(port, () => {
  console.log(`🚀 Servidor rodando: http://localhost:${port}\n`);
});