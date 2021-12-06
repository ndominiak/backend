import { getRepository, Repository } from "typeorm";

import { ICreateControlSampleDTO } from "@modules/patients/dtos/ICreateControlSampleDTO";
import { IControlSamplesRepository } from "@modules/patients/repositories/IControlSamplesRepository";

import { ControlSample } from "../entities/ControlSample";

class ControlSamplesRepository implements IControlSamplesRepository {
  private repository: Repository<ControlSample>;

  constructor() {
    this.repository = getRepository(ControlSample);
  }

  async create({
    a260nm,
    a280nm,
    amplicon_number,
    approx_amount,
    birthday,
    choice_reason,
    collected_by,
    collection_date,
    concentration,
    cpf,
    flask_qtd,
    freezer_minus20,
    freezer_minus80,
    freezing_date,
    genre,
    name,
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
  }: ICreateControlSampleDTO): Promise<ControlSample> {
    const controlSample = this.repository.create({
      a260nm,
      a280nm,
      amplicon_number,
      approx_amount,
      birthday,
      choice_reason,
      collected_by,
      collection_date,
      concentration,
      cpf,
      flask_qtd,
      freezer_minus20,
      freezer_minus80,
      freezing_date,
      genre,
      name,
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

    await this.repository.save(controlSample);

    return controlSample;
  }

  async findByPatientId(patient_id: string): Promise<ControlSample> {
    const controlSample = await this.repository.findOne({
      patient_id,
    });

    return controlSample;
  }

  async list(): Promise<ControlSample[]> {
    const controlSamples = await this.repository.find();

    return controlSamples;
  }
}

export { ControlSamplesRepository };
