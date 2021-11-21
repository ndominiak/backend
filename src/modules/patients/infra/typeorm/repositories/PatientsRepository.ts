import { getRepository, Repository } from "typeorm";

import {
  ICreatePatientDTO,
  IPatientsRepository,
} from "@modules/patients/repositories/IPatientsRepository";

import { Patient } from "../entities/Patient";

class PatientsRepository implements IPatientsRepository {
  private repository: Repository<Patient>;

  constructor() {
    this.repository = getRepository(Patient);
  }

  async create({
    name,
    cpf,
    birthday,
    genre,
  }: ICreatePatientDTO): Promise<void> {
    const patient = this.repository.create({
      name,
      cpf,
      birthday,
      genre,
    });

    await this.repository.save(patient);
  }

  async list(): Promise<Patient[]> {
    const patients = await this.repository.find();
    return patients;
  }

  async findByCPF(cpf: string): Promise<Patient> {
    const patient = await this.repository.findOne({ cpf });
    return patient;
  }
}

export { PatientsRepository };
