import { container } from "tsyringe";

import { PatientsRepository } from "@modules/patients/infra/typeorm/repositories/PatientsRepository";
import { SamplesRepository } from "@modules/patients/infra/typeorm/repositories/SamplesRepository";
import { IPatientsRepository } from "@modules/patients/repositories/IPatientsRepository";
import { ISamplesRepository } from "@modules/patients/repositories/ISamplesRepository";

container.registerSingleton<IPatientsRepository>(
  "PatientsRepository",
  PatientsRepository
);

container.registerSingleton<ISamplesRepository>(
  "SamplesRepository",
  SamplesRepository
);
