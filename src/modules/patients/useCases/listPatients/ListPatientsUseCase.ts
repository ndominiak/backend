import { Patient } from "../../entities/Patient";
import { IPatientsRepository } from "../../repositories/IPatientsRepository";

class ListPatientsUseCase {
  constructor(private patientsRepository: IPatientsRepository) {}

  execute(): Patient[] {
    const patients = this.patientsRepository.list();

    return patients;
  }
}

export { ListPatientsUseCase };
