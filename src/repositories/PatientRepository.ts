import { Patient } from "../model/Patient";

interface ICreatePatientDTO {
  name: string;
  cpf: string;
  birthday: Date;
  genre: string;
}

class PatientRepository {
  private patients: Patient[];

  constructor() {
    this.patients = [];
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
}

export { PatientRepository };
