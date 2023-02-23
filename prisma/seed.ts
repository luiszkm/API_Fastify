import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const nameTest = new Date().toISOString()
  const users= await prisma.users.create({
    data: {
      id: 999,
      name: "test" + nameTest,
      email:"test@example",
      password: "123",
      admin: 0,
     
    }
  })

 
  const ingredients = await prisma.ingredients.create({
    data:{
      ingredientName: "ingredient test",
      id:555,
      product_id: 888,
    }
    })
  
    const products = await prisma.products.create({
      data:{
        id: 888,
        title: "potato",
        price: "1000",
        description: "test description",
        inventory: 10,
        category: "test",
        ingredients: {
           create:{
            id: ingredients.id,
           }
        },
      }
    })
  
    const purchases = await prisma.purchases.create({
      data: {
        amount: 1,
        totalPrice: "1000",
        user_id: 999,
        product_id: 888
          
        
      }
    })
  

}