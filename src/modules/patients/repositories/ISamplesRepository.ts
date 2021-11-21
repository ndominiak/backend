import { ICreateSampleDTO } from "../dtos/ICreateSampleDTO";

interface ISamplesRepository {
  create(data: ICreateSampleDTO): Promise<void>;
}

export { ISamplesRepository };
