import { SamplesRepositoryInMemory } from "@modules/patients/repositories/in-memory/SamplesRepositoryInMemory";

import { ListSamplesUseCase } from "./ListSamplesUseCase";

let listSamplesUseCase: ListSamplesUseCase;
let samplesRepositoryInMemory: SamplesRepositoryInMemory;

describe("List Samples", () => {
  beforeEach(() => {
    samplesRepositoryInMemory = new SamplesRepositoryInMemory();
    listSamplesUseCase = new ListSamplesUseCase(samplesRepositoryInMemory);
  });

  it("should be able to list all samples", async () => {
    const sample = await samplesRepositoryInMemory.create({
      a260nm: 1.1,
      a280nm: 20,
      amplicon_number: 10,
      approx_amount: 5.3,
      choice_reason: "Some Reason",
      collected_by: "Some Person",
      collection_date: new Date(),
      concentration: 2,
      flask_qtd: 5,
      freezer_minus20: "some place",
      freezer_minus80: "other place",
      freezing_date: new Date(),
      observation_one: "Some observation",
      observation_two: "Some other observation",
      patient_id: "some patient id",
      pcr_date: new Date(),
      presented_by: "Some person",
      purity: 2,
      quantification_date: new Date(),
      receipt_by: "Some person",
      receipt_date: new Date(),
      result: "positive",
      sample_status: "collected",
      tags: true,
      toast: "Some toast",
      joinvasc_id: "123",
    });

    const samples = await listSamplesUseCase.execute();

    expect(samples).toEqual([sample]);
  });
});
