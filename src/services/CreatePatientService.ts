import { PatientsRepository } from "../repositories/PatientsRepository";

interface IRequest {
  name: string;
  cpf: string;
  birthday: Date;
  genre: string;
}

class CreatePatientService {
  constructor(private patientsRepository: PatientsRepository) {}

  execute({ name, cpf, birthday, genre }: IRequest): void {
    const patientAlreadyExists = this.patientsRepository.findByCPF(cpf);

    if (patientAlreadyExists) {
      throw new Error("Patient already exists!");
    }

    this.patientsRepository.create({ name, cpf, birthday, genre });
  }
}

export { CreatePatientService };
