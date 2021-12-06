import { ICreateControlSampleDTO } from "../dtos/ICreateControlSampleDTO";
import { ControlSample } from "../infra/typeorm/entities/ControlSample";

interface IControlSamplesRepository {
  create(data: ICreateControlSampleDTO): Promise<ControlSample>;

  findByPatientId(patient_id: string): Promise<ControlSample>;
  list(): Promise<ControlSample[]>;
}

export { IControlSamplesRepository };
