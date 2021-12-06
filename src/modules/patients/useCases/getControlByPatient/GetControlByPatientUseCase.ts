import { inject, injectable } from "tsyringe";

import { ControlSample } from "@modules/patients/infra/typeorm/entities/ControlSample";
import { IControlSamplesRepository } from "@modules/patients/repositories/IControlSamplesRepository";

interface IRequest {
  patient_id: string;
}

@injectable()
class GetControlByPatientUseCase {
  constructor(
    @inject("ControlSamplesRepository")
    private controlSamplesRepository: IControlSamplesRepository
  ) {}

  async execute({ patient_id }: IRequest): Promise<ControlSample> {
    const control = await this.controlSamplesRepository.findByPatientId(
      patient_id
    );
    return control;
  }
}

export { GetControlByPatientUseCase };
