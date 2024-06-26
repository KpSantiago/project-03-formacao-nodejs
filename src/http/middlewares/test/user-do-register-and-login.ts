import { app } from "../../../app";
import supertest from "supertest";
import { PrismaUserRespository } from "../../../repositories/prisma/prisma-user-repository";
export async function userDoRegisterAndLogin(): Promise<{ token: string, }> {
    await supertest(app.server).post('/users').send({
        name: "Kauã",
        email: "kaua@gmail.com",
        password: "1233445",
        role: 'ADMIN'
    })

    const response = await supertest(app.server).post('/sessions').send({
        email: "kaua@gmail.com",
        password: "1233445",
    })
    const prismaUserRespository = new PrismaUserRespository();

    return { token: response.body.token };
}