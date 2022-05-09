import { Request, Response } from "express";
import { container } from "tsyringe";

import { dateToISO } from "@shared/utils/formatDate";

import { CreatePatientUseCase } from "./CreatePatientUseCase";

class CreatePatientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, cpf, birthday, genre } = request.body;
    const formattedBirthday = dateToISO(birthday);
    const createPatientUseCase = container.resolve(CreatePatientUseCase);
    await createPatientUseCase.execute({ name, cpf, formattedBirthday, genre });
    return response.status(201).send();
  }
}

export { CreatePatientController };
