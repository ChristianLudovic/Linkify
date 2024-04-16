import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const handle = async (req, res) => {
    const list = await prisma.link.findMany()
    res.json(list)
    
}

export default handle