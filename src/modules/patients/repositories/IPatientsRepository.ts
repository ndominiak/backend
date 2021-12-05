import { Patient } from "../infra/typeorm/entities/Patient";

interface ICreatePatientDTO {
  name: string;
  cpf: string;
  birthday: Date;
  genre: string;
}

interface IPatientsRepository {
  create({ name, cpf, birthday, genre }: ICreatePatientDTO): Promise<void>;

  findByCPF(cpf: string): Promise<Patient>;
  list(): Promise<Patient[]>;
}

export { IPatientsRepository, ICreatePatientDTO };
