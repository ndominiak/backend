import { Request, Response } from "express";

import { CreatePatientUseCase } from "./CreatePatientUseCase";

class CreatePatientController {
  constructor(private createPatientUseCase: CreatePatientUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, cpf, birthday, genre } = request.body;

    await this.createPatientUseCase.execute({ name, cpf, birthday, genre });

    return response.status(201).send();
  }
}

export { CreatePatientController };
