import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Patient } from "./Patient";

@Entity("samples")
class Sample {
  @PrimaryColumn()
  id: string;

  @Column()
  joinvasc_id?: string;

  @Column()
  tags: boolean;

  @Column()
  toast: string;

  @Column()
  receipt_date: Date;

  @Column()
  flask_qtd: number;

  @Column()
  approx_amount: number;

  @Column()
  presented_by: string;

  @Column()
  receipt_by: string;

  @Column()
  sample_status: string;

  @Column()
  collected_by: string;

  @Column()
  collection_date: Date;

  @Column()
  quantification_date: Date;

  @Column()
  a260nm: number;

  @Column()
  a280nm: number;

  @Column()
  concentration: number;

  @Column()
  purity: number;

  @Column()
  freezing_date: Date;

  @Column()
  freezer_minus20: string;

  @Column()
  freezer_minus80: string;

  @Column()
  observation_one: string;

  @Column()
  observation_two: string;

  @Column()
  pcr_date: Date;

  @Column()
  amplicon_number: number;

  @Column()
  result: string;

  @Column()
  choice_reason: string;

  @OneToOne(() => Patient)
  @JoinColumn({ name: "patient_id" })
  patient: Patient;

  @Column()
  patient_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Sample };
