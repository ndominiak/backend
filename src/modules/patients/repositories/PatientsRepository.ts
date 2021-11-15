import { Patient } from "../model/Patient";
import { ICreatePatientDTO, IPatientsRepository } from "./IPatientsRepository";

class PatientsRepository implements IPatientsRepository {
  private patients: Patient[];

  private static INSTANCE: PatientsRepository;

  private constructor() {
    this.patients = [];
  }

  public static getInstance(): PatientsRepository {
    if (!PatientsRepository.INSTANCE) {
      PatientsRepository.INSTANCE = new PatientsRepository();
    }

    return PatientsRepository.INSTANCE;
  }

  create({ name, cpf, birthday, genre }: ICreatePatientDTO): void {
    const patient = new Patient();

    Object.assign(patient, {
      name,
      cpf,
      birthday: new Date(birthday),
      genre,
      created_at: new Date(),
    });

    this.patients.push(patient);
  }

  list(): Patient[] {
    return this.patients;
  }

  findByCPF(cpf: string): Patient {
    const patient = this.patients.find((patient) => patient.cpf === cpf);
    return patient;
  }
}

export { PatientsRepository };
