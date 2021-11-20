import { Patient } from "../../entities/Patient";
import { ICreatePatientDTO, IPatientsRepository } from "../IPatientsRepository";

class PatientsRepositoryInMemory implements IPatientsRepository {
  patients: Patient[] = [];

  async findByCPF(cpf: string): Promise<Patient> {
    const patient = this.patients.find((patient) => patient.cpf === cpf);
    return patient;
  }

  async list(): Promise<Patient[]> {
    const allPatients = this.patients;
    return allPatients;
  }

  async create({
    name,
    cpf,
    birthday,
    genre,
  }: ICreatePatientDTO): Promise<void> {
    const patient = new Patient();

    Object.assign(patient, {
      name,
      cpf,
      birthday: new Date(birthday),
      genre,
    });

    this.patients.push(patient);
  }
}

export { PatientsRepositoryInMemory };
