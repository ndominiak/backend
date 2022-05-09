import { Request, Response } from "express";
import { container } from "tsyringe";

import { dateToISO } from "@shared/utils/formatDate";

import { CreateControlSampleUseCase } from "./CreateControlSampleUseCase";

class CreateControlSampleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      cpf,
      birthday,
      genre,
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

    const formattedBirthday = dateToISO(birthday);
    const formattedReceiptDate = dateToISO(receipt_date);
    const formattedCollectionDate = dateToISO(collection_date);
    const formattedQuantificationDate = dateToISO(quantification_date);
    const formattedFreezingDate = dateToISO(freezing_date);
    const formattedPCRDate = dateToISO(pcr_date);

    const createControlSampleUseCase = container.resolve(
      CreateControlSampleUseCase
    );

    const controlSample = await createControlSampleUseCase.execute({
      name,
      cpf,
      birthday: formattedBirthday,
      genre,
      joinvasc_id,
      tags,
      toast,
      receipt_date: formattedReceiptDate,
      flask_qtd,
      approx_amount,
      presented_by,
      receipt_by,
      sample_status,
      collected_by,
      collection_date: formattedCollectionDate,
      quantification_date: formattedQuantificationDate,
      a260nm,
      a280nm,
      concentration,
      purity,
      freezing_date: formattedFreezingDate,
      freezer_minus20,
      freezer_minus80,
      observation_one,
      observation_two,
      pcr_date: formattedPCRDate,
      amplicon_number,
      result,
      choice_reason,
      patient_id,
    });

    return response.status(201).json(controlSample);
  }
}

export { CreateControlSampleController };
