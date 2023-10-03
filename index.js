import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient() 

async function main() {
    const newUser = await prisma.user.create ({
        data: {
            name: "Ryan",
            email: "ryan@gmail.com"
        }
    })
    console.log(newUser)
}

main() //Tenemos que ejecutar la función main, porque si no 
        //no pasaría nada cuando ejecutamos 'node index.js', 
        //solamente habríamos declarado la función.