import { PatientsRepository } from "../../repositories/PatientsRepository";
import { CreatePatientController } from "./CreatePatientController";
import { CreatePatientUseCase } from "./CreatePatientUseCase";

const patientsRepository = new PatientsRepository();
const createPatientUseCase = new CreatePatientUseCase(patientsRepository);
const createPatientController = new CreatePatientController(
  createPatientUseCase
);

export { createPatientController };
