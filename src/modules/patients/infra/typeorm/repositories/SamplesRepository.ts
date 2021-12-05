import { getRepository, Repository } from "typeorm";

import { ICreateSampleDTO } from "@modules/patients/dtos/ICreateSampleDTO";
import { ISamplesRepository } from "@modules/patients/repositories/ISamplesRepository";

import { Sample } from "../entities/Sample";

class SamplesRepository implements ISamplesRepository {
  private repository: Repository<Sample>;

  constructor() {
    this.repository = getRepository(Sample);
  }

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
  }: ICreateSampleDTO): Promise<Sample> {
    const sample = this.repository.create({
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

    await this.repository.save(sample);

    return sample;
  }

  async findByJoinvascId(joinvasc_id: string): Promise<Sample> {
    const sample = await this.repository.findOne({
      joinvasc_id,
    });

    return sample;
  }

  async findByPatientId(patient_id: string): Promise<Sample> {
    const sample = await this.repository.findOne({
      patient_id,
    });

    return sample;
  }

  async list(): Promise<Sample[]> {
    const samples = await this.repository.find();

    return samples;
  }
}

export { SamplesRepository };
