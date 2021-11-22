import { ICreateSampleDTO } from "../dtos/ICreateSampleDTO";
import { Sample } from "../infra/typeorm/entities/Sample";

interface ISamplesRepository {
  create(data: ICreateSampleDTO): Promise<void>;

  findByJoinvascId(joinvasc_id: string): Promise<Sample>;
}

export { ISamplesRepository };
