import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
    const list = await prisma.link.findMany()
    res.json(list)
    
}