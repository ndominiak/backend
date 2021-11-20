import { AppError } from "../../../../errors/AppError";
import { PatientsRepositoryInMemory } from "../../repositories/in-memory/PatientsRepositoryInMemory";
import { CreatePatientUseCase } from "./CreatePatientUseCase";

let createPatientUseCase: CreatePatientUseCase;
let patientsRepositoryInMemory: PatientsRepositoryInMemory;

describe("Create Patient", () => {
  beforeEach(() => {
    patientsRepositoryInMemory = new PatientsRepositoryInMemory();
    createPatientUseCase = new CreatePatientUseCase(patientsRepositoryInMemory);
  });

  it("shoud be able to create a new patient", async () => {
    const patient = {
      name: "Name Test",
      cpf: "12345678910",
      birthday: new Date(),
      genre: "masculino",
    };

    await createPatientUseCase.execute({
      name: patient.name,
      cpf: patient.cpf,
      birthday: patient.birthday,
      genre: patient.genre,
    });

    const patientCreated = await patientsRepositoryInMemory.findByCPF(
      patient.cpf
    );

    expect(patientCreated).toHaveProperty("id");
  });

  it("shoud not be able to create patient with cpf that already exists", async () => {
    expect(async () => {
      const patient = {
        name: "Name Test",
        cpf: "12345678910",
        birthday: new Date(),
        genre: "masculino",
      };

      await createPatientUseCase.execute({
        name: patient.name,
        cpf: patient.cpf,
        birthday: patient.birthday,
        genre: patient.genre,
      });

      await createPatientUseCase.execute({
        name: patient.name,
        cpf: patient.cpf,
        birthday: patient.birthday,
        genre: patient.genre,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
