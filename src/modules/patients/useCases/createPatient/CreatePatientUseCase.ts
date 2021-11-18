import { IPatientsRepository } from "../../repositories/IPatientsRepository";

interface IRequest {
  name: string;
  cpf: string;
  birthday: Date;
  genre: string;
}

class CreatePatientUseCase {
  constructor(private patientsRepository: IPatientsRepository) {}

  async execute({ name, cpf, birthday, genre }: IRequest): Promise<void> {
    const patientAlreadyExists = await this.patientsRepository.findByCPF(cpf);

    if (patientAlreadyExists) {
      throw new Error("Patient already exists!");
    }

    this.patientsRepository.create({ name, cpf, birthday, genre });
  }
}

export { CreatePatientUseCase };
