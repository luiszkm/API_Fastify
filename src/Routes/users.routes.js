"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionsRoutes = void 0;
const zod_1 = require("zod");
const prisma_1 = require("../lib/prisma");
async function transactionsRoutes(app) {
    app.post('/users', async (req, res) => {
        const createPoolBody = zod_1.z.object({
            name: zod_1.z.string(),
            email: zod_1.z.string(),
            password: zod_1.z.string(),
            admin: zod_1.z.number(),
        });
        const { name, email, password, admin } = createPoolBody.parse(req.body);
        try {
            await prisma_1.prisma.users.create({
                data: {
                    name,
                    email,
                    password,
                    admin,
                }
            });
        }
        catch (error) {
            console.log(error);
        }
        return res.status(201);
    });
}
exports.transactionsRoutes = transactionsRoutes;
