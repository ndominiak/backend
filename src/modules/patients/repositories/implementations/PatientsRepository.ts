import { getRepository, Repository } from "typeorm";

import { Patient } from "../../entities/Patient";
import { ICreatePatientDTO, IPatientsRepository } from "../IPatientsRepository";

class PatientsRepository implements IPatientsRepository {
  private repository: Repository<Patient>;

  private static INSTANCE: PatientsRepository;

  private constructor() {
    this.repository = getRepository(Patient);
  }

  public static getInstance(): PatientsRepository {
    if (!PatientsRepository.INSTANCE) {
      PatientsRepository.INSTANCE = new PatientsRepository();
    }

    return PatientsRepository.INSTANCE;
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
