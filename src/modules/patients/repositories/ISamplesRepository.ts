import { ICreateSampleDTO } from "../dtos/ICreateSampleDTO";
import { Sample } from "../infra/typeorm/entities/Sample";

interface ISamplesRepository {
  create(data: ICreateSampleDTO): Promise<Sample>;

  findByJoinvascId(joinvasc_id: string): Promise<Sample>;
  findByPatientId(patient_id: string): Promise<Sample>;
  list(): Promise<Sample[]>;
}

export { ISamplesRepository };
