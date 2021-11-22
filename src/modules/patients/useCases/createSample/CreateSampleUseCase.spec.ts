import { SamplesRepositoryInMemory } from "@modules/patients/repositories/in-memory/SamplesRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateSampleUseCase } from "./CreateSampleUseCase";

let createSampleUseCase: CreateSampleUseCase;
let samplesRepositoryInMemory: SamplesRepositoryInMemory;

describe("Create Sample", () => {
  beforeEach(() => {
    samplesRepositoryInMemory = new SamplesRepositoryInMemory();
    createSampleUseCase = new CreateSampleUseCase(samplesRepositoryInMemory);
  });

  it("should be able to create a sample", async () => {
    await createSampleUseCase.execute({
      joinvasc_id: "123456",
      tags: true,
      toast: "abcd1234",
      receipt_date: new Date(),
      flask_qtd: 5,
      approx_amount: 10.1,
      presented_by: "Some Name",
      receipt_by: "Other Name",
      sample_status: "Pending",
      collected_by: "Another Name",
      collection_date: new Date(),
      quantification_date: new Date(),
      a260nm: 10,
      a280nm: 20,
      concentration: 1.3,
      purity: 2.3,
      freezing_date: new Date(),
      freezer_minus20: "Local minus 20",
      freezer_minus80: "Local minus 80",
      observation_one: "The first observation",
      observation_two: "The second observation",
      pcr_date: new Date(),
      amplicon_number: 123,
      result: "positive",
      choice_reason: "The reason",
      patient_id: "patient",
    });
  });

  it("shoud not be able to create a sample whith existing joinvasc id", () => {
    expect(async () => {
      await createSampleUseCase.execute({
        joinvasc_id: "123456",
        tags: true,
        toast: "abcd1234",
        receipt_date: new Date(),
        flask_qtd: 5,
        approx_amount: 10.1,
        presented_by: "Some Name",
        receipt_by: "Other Name",
        sample_status: "Pending",
        collected_by: "Another Name",
        collection_date: new Date(),
        quantification_date: new Date(),
        a260nm: 10,
        a280nm: 20,
        concentration: 1.3,
        purity: 2.3,
        freezing_date: new Date(),
        freezer_minus20: "Local minus 20",
        freezer_minus80: "Local minus 80",
        observation_one: "The first observation",
        observation_two: "The second observation",
        pcr_date: new Date(),
        amplicon_number: 123,
        result: "positive",
        choice_reason: "The reason",
        patient_id: "patient",
      });

      await createSampleUseCase.execute({
        joinvasc_id: "123456",
        tags: true,
        toast: "abcd1234",
        receipt_date: new Date(),
        flask_qtd: 5,
        approx_amount: 10.1,
        presented_by: "Some Name",
        receipt_by: "Other Name",
        sample_status: "Pending",
        collected_by: "Another Name",
        collection_date: new Date(),
        quantification_date: new Date(),
        a260nm: 10,
        a280nm: 20,
        concentration: 1.3,
        purity: 2.3,
        freezing_date: new Date(),
        freezer_minus20: "Local minus 20",
        freezer_minus80: "Local minus 80",
        observation_one: "The first observation",
        observation_two: "The second observation",
        pcr_date: new Date(),
        amplicon_number: 123,
        result: "positive",
        choice_reason: "The reason",
        patient_id: "patient",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
