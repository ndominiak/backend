// import { inject, injectable } from "tsyringe";

import { ISamplesRepository } from "@modules/patients/repositories/ISamplesRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  joinvasc_id?: string;
  tags: boolean;
  toast: string;
  receipt_date: Date;
  flask_qtd: number;
  approx_amount: number;
  presented_by: string;
  receipt_by: string;
  sample_status: string;
  collected_by: string;
  collection_date: Date;
  quantification_date: Date;
  a260nm: number;
  a280nm: number;
  concentration: number;
  purity: number;
  freezing_date: Date;
  freezer_minus20: string;
  freezer_minus80: string;
  observation_one: string;
  observation_two: string;
  pcr_date: Date;
  amplicon_number: number;
  result: string;
  choice_reason: string;
  patient_id: string;
}

// @injectable()
class CreateSampleUseCase {
  constructor(
    // @inject("SamplesRepository")
    private samplesRepository: ISamplesRepository
  ) {}

  async execute({
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
  }: IRequest): Promise<void> {
    const sampleAlreadyExists = await this.samplesRepository.findByJoinvascId(
      joinvasc_id
    );

    if (sampleAlreadyExists) {
      throw new AppError("Sample already exists!");
    }

    await this.samplesRepository.create({
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
  }
}

export { CreateSampleUseCase };
