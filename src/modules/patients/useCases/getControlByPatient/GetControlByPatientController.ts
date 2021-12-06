import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetControlByPatientUseCase } from "./GetControlByPatientUseCase";

class GetControlByPatientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { patient_id } = request.query;

    const getControlByPatientUseCase = container.resolve(
      GetControlByPatientUseCase
    );

    const control = await getControlByPatientUseCase.execute({
      patient_id: patient_id as string,
    });

    return response.json(control);
  }
}

export { GetControlByPatientController };
