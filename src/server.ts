import Fastify from "fastify";
import cors from "@fastify/cors";
import {Routes} from './Routes/'


async function bootstrap() {
  const app = Fastify({
    logger: true,
  })

  await app.register(cors, {
    origin: true
  })
  app.register(Routes)




  await app.listen({ port: 3333,/* host: '0.0.0.0' */ })
}
bootstrap();