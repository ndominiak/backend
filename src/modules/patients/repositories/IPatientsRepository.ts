import { Patient } from "../entities/Patient";

interface ICreatePatientDTO {
  name: string;
  cpf: string;
  birthday: Date;
  genre: string;
}

interface IPatientsRepository {
  findByCPF(cpf: string): Patient;
  list(): Patient[];
  create({ name, cpf, birthday, genre }: ICreatePatientDTO): void;
}

export { IPatientsRepository, ICreatePatientDTO };
