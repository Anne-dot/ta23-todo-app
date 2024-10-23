import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const createTodo = async (request, response) => {
    const { title, description } = request.body

    try {
        
        const todo = await prisma.todo.create({
            data: {
                title: title,
                description: description
            }
        })

        response.status(201).json({
            message: "Todo created successfully.",
            todo
        })

    } catch (error) {
        response.status(500).json({
            message: "Bad luck. Try again."
        })
    }
}