
import { PrismaClient, TodoStatus } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllTodos = async (request, response) => {
    
    try {
        
        const todos = await prisma.todo.findMany()

        response.status(200).json({
            todos
        })

    } catch (error) {
        console.log(error)
        response.status(500).json({
            message: "Bad luck. Try again."
        })
    }
}

export const createTodo = async (request, response) => {
    // const title = request.body.title
    // const descprition = request.body.title    
    const { title, description } = request.body    
    try {        
        const todo = await prisma.todo.create({
            data: {
                // title: title,
                // description: description
                title,
                description,
                status: TodoStatus.TODO
            }
        })        
        response.status(201).json({
            message: "Todo created successfully.",
            todo
        })    
    } catch (error) {
        console.log(error)
        response.status(500).json ({
            message: "Bad luck. Try again!"
        })
    }
}

