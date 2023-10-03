import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient() 

async function main() {
    // const newUser = await prisma.user.create ({
    //     data: {
    //         name: "Ryan",
    //         email: "ryan@gmail.com"
    //     }
    // })
    // console.log(newUser)



    // const allUsers = await prisma.user.findMany()
    // console.log(allUsers)
    
    
    // const User = await prisma.user.findFirst({
    //     where: {
    //         OR: [
    //             {id: 1},
    //             {email: "maria@gmail.com"}
    //         ]
    //     }
    // })
    // console.log(User)


    const user = await prisma.user.delete({
        where: {
            id: 3
        }
    })
    console.log(user)

}


main() //Tenemos que ejecutar la función main, porque si no 
        //no pasaría nada cuando ejecutamos 'node index.js', 
        //solamente habríamos declarado la función.