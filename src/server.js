"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const Routes_1 = require("./Routes/");
async function bootstrap() {
    const app = (0, fastify_1.default)({
        logger: true,
    });
    await app.register(cors_1.default, {
        origin: true
    });
    app.register(Routes_1.Routes);
    await app.listen({ port: 3333, /* host: '0.0.0.0' */ });
}
bootstrap();
