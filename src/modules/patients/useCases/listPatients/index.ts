import { PatientsRepository } from "../../repositories/PatientsRepository";
import { ListPatientsController } from "./ListPatientsController";
import { ListPatientsUseCase } from "./ListPatientsUseCase";

const patientsRepository = new PatientsRepository();
const listPatientsUseCase = new ListPatientsUseCase(patientsRepository);
const listPatientsController = new ListPatientsController(listPatientsUseCase);

export { listPatientsController };
