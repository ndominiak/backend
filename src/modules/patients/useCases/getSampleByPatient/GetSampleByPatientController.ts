import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetSampleByPatientUseCase } from "./GetSampleByPatientUseCase";

class GetSampleByPatientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { patient_id } = request.query;

    console.log(patient_id);

    const getSampleByPatientUseCase = container.resolve(
      GetSampleByPatientUseCase
    );

    const sample = await getSampleByPatientUseCase.execute({
      patient_id: patient_id as string,
    });

    return response.json(sample);
  }
}

export { GetSampleByPatientController };
