import { ICreateSampleDTO } from "@modules/patients/dtos/ICreateSampleDTO";
import { Sample } from "@modules/patients/infra/typeorm/entities/Sample";

import { ISamplesRepository } from "../ISamplesRepository";

class SamplesRepositoryInMemory implements ISamplesRepository {
  samples: Sample[] = [];

  async create({
    a260nm,
    a280nm,
    amplicon_number,
    approx_amount,
    choice_reason,
    collected_by,
    collection_date,
    concentration,
    flask_qtd,
    freezer_minus20,
    freezer_minus80,
    freezing_date,
    observation_one,
    observation_two,
    patient_id,
    pcr_date,
    presented_by,
    purity,
    quantification_date,
    receipt_by,
    receipt_date,
    result,
    sample_status,
    tags,
    toast,
    joinvasc_id,
  }: ICreateSampleDTO): Promise<void> {
    const sample = new Sample();

    Object.assign(sample, {
      a260nm,
      a280nm,
      amplicon_number,
      approx_amount,
      choice_reason,
      collected_by,
      collection_date,
      concentration,
      flask_qtd,
      freezer_minus20,
      freezer_minus80,
      freezing_date,
      observation_one,
      observation_two,
      patient_id,
      pcr_date,
      presented_by,
      purity,
      quantification_date,
      receipt_by,
      receipt_date,
      result,
      sample_status,
      tags,
      toast,
      joinvasc_id,
    });

    this.samples.push(sample);
  }

  async findByJoinvascId(joinvasc_id: string): Promise<Sample> {
    return this.samples.find((sample) => sample.joinvasc_id === joinvasc_id);
  }
}

export { SamplesRepositoryInMemory };
