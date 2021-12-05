import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetPatientByCpfUseCase } from "./GetPatientByCpfUseCase";

class GetPatientByCpfController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.query;

    const getPatientByCpfUseCase = container.resolve(GetPatientByCpfUseCase);

    const patient = await getPatientByCpfUseCase.execute({
      cpf: cpf as string,
    });

    return response.json(patient);
  }
}

export { GetPatientByCpfController };
