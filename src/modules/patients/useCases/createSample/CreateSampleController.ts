import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSampleUseCase } from "./CreateSampleUseCase";

class CreateSampleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      joinvasc_id,
      tags,
      toast,
      receipt_date,
      flask_qtd,
      approx_amount,
      presented_by,
      receipt_by,
      sample_status,
      collected_by,
      collection_date,
      quantification_date,
      a260nm,
      a280nm,
      concentration,
      purity,
      freezing_date,
      freezer_minus20,
      freezer_minus80,
      observation_one,
      observation_two,
      pcr_date,
      amplicon_number,
      result,
      choice_reason,
      patient_id,
    } = request.body;

    const createSampleUseCase = container.resolve(CreateSampleUseCase);

    const sample = await createSampleUseCase.execute({
      joinvasc_id,
      tags,
      toast,
      receipt_date,
      flask_qtd,
      approx_amount,
      presented_by,
      receipt_by,
      sample_status,
      collected_by,
      collection_date,
      quantification_date,
      a260nm,
      a280nm,
      concentration,
      purity,
      freezing_date,
      freezer_minus20,
      freezer_minus80,
      observation_one,
      observation_two,
      pcr_date,
      amplicon_number,
      result,
      choice_reason,
      patient_id,
    });

    return response.status(201).json(sample);
  }
}

export { CreateSampleController };
