import { inject, injectable } from "tsyringe";

import { Sample } from "@modules/patients/infra/typeorm/entities/Sample";
import { ISamplesRepository } from "@modules/patients/repositories/ISamplesRepository";

@injectable()
class ListSamplesUseCase {
  constructor(
    @inject("SamplesRepository")
    private samplesRepository: ISamplesRepository
  ) {}

  async execute(): Promise<Sample[]> {
    const samples = await this.samplesRepository.list();

    return samples;
  }
}

export { ListSamplesUseCase };
