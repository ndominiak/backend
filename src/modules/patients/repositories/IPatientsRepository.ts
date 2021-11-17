import { Patient } from "../entities/Patient";

interface ICreatePatientDTO {
  name: string;
  cpf: string;
  birthday: Date;
  genre: string;
}

interface IPatientsRepository {
  findByCPF(cpf: string): Promise<Patient>;
  list(): Promise<Patient[]>;
  create({ name, cpf, birthday, genre }: ICreatePatientDTO): Promise<void>;
}

export { IPatientsRepository, ICreatePatientDTO };
