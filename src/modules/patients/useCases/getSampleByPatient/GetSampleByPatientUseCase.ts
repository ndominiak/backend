import { inject, injectable } from "tsyringe";

import { Sample } from "@modules/patients/infra/typeorm/entities/Sample";
import { ISamplesRepository } from "@modules/patients/repositories/ISamplesRepository";

interface IRequest {
  patient_id: string;
}

@injectable()
class GetSampleByPatientUseCase {
  constructor(
    @inject("SamplesRepository")
    private samplesRepository: ISamplesRepository
  ) {}

  async execute({ patient_id }: IRequest): Promise<Sample> {
    const sample = await this.samplesRepository.findByPatientId(patient_id);
    return sample;
  }
}

export { GetSampleByPatientUseCase };
