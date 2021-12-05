import { Sample } from "@modules/patients/infra/typeorm/entities/Sample";
import { ISamplesRepository } from "@modules/patients/repositories/ISamplesRepository";

class ListSamplesUseCase {
  constructor(private samplesRepository: ISamplesRepository) {}

  async execute(): Promise<Sample[]> {
    const samples = await this.samplesRepository.list();
    return samples;
  }
}

export { ListSamplesUseCase };
