import {transactionsRoutes} from './users.routes'
import { FastifyInstance } from 'fastify'


export async function Routes(app: FastifyInstance){
  transactionsRoutes(app)

}