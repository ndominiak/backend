import { inject, injectable } from "tsyringe";

import { ControlSample } from "@modules/patients/infra/typeorm/entities/ControlSample";
import { IControlSamplesRepository } from "@modules/patients/repositories/IControlSamplesRepository";

@injectable()
class ListControlsUseCase {
  constructor(
    @inject("ControlSamplesRepository")
    private controlSamplesRepository: IControlSamplesRepository
  ) {}

  async execute(): Promise<ControlSample[]> {
    const controlSamples = await this.controlSamplesRepository.list();

    return controlSamples;
  }
}

export { ListControlsUseCase };
