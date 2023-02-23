import { FastifyInstance } from 'fastify'
import { z } from "zod"
import { prisma } from "../lib/prisma"
interface UserProps {
  name: string
  email: string
  password: string
  admin: boolean
}

export async function transactionsRoutes(app: FastifyInstance) {
  app.post('/users', async (req, res) => {

    const createPoolBody = z.object({
      name: z.string(),
      email: z.string(),
      password: z.string(),
      admin: z.number(),
    })
    const { name, email, password, admin } = createPoolBody.parse(req.body)

    try {
      await prisma.users.create({
        data: {
          name,
          email,
          password,
          admin,
        }
      })
    } catch (error) {
      console.log(error);
      
    }
    return res.status(201)
  })


}