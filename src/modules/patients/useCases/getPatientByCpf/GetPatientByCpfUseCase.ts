import { inject, injectable } from "tsyringe";

import { Patient } from "@modules/patients/infra/typeorm/entities/Patient";
import { IPatientsRepository } from "@modules/patients/repositories/IPatientsRepository";

interface IRequest {
  cpf: string;
}

@injectable()
class GetPatientByCpfUseCase {
  constructor(
    @inject("PatientsRepository")
    private patientsRepository: IPatientsRepository
  ) {}

  async execute({ cpf }: IRequest): Promise<Patient> {
    const patient = await this.patientsRepository.findByCPF(cpf);
    return patient;
  }
}

export { GetPatientByCpfUseCase };
