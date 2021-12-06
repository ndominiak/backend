interface ICreateControlSampleDTO {
  name: string;
  cpf: string;
  birthday: Date;
  genre: string;
  joinvasc_id?: string;
  tags: boolean;
  toast: string;
  receipt_date: Date;
  flask_qtd: number;
  approx_amount: number;
  presented_by: string;
  receipt_by: string;
  sample_status: string;
  collected_by: string;
  collection_date: Date;
  quantification_date: Date;
  a260nm: number;
  a280nm: number;
  concentration: number;
  purity: number;
  freezing_date: Date;
  freezer_minus20: string;
  freezer_minus80: string;
  observation_one: string;
  observation_two: string;
  pcr_date: Date;
  amplicon_number: number;
  result: string;
  choice_reason: string;
  patient_id: string;
}

export { ICreateControlSampleDTO };
