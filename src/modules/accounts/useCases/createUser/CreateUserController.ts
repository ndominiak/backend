import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, reponse: Response): Promise<Response> {
    const { name, registration, email, password } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({ name, registration, email, password });

    return reponse.status(201).send();
  }
}

export { CreateUserController };
