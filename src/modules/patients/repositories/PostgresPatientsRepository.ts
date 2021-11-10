import { Patient } from "../model/Patient";
import { ICreatePatientDTO, IPatientsRepository } from "./IPatientsRepository";

class PostgressPatientRepository implements IPatientsRepository {
  findByCPF(cpf: string): Patient {
    console.log(cpf);
    return null;
  }

  list(): Patient[] {
    return null;
  }
  create({ name, cpf, birthday, genre }: ICreatePatientDTO): void {
    console.log(name, cpf, birthday, genre);
  }
}

export { PostgressPatientRepository };
