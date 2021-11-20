import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePatientUseCase } from "./CreatePatientUseCase";

class CreatePatientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, cpf, birthday, genre } = request.body;

    const createPatientUseCase = container.resolve(CreatePatientUseCase);

    await createPatientUseCase.execute({ name, cpf, birthday, genre });

    return response.status(201).send();
  }
}

export { CreatePatientController };
