import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("patients")
class Patient {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  birthday: Date;

  @Column()
  genre: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Patient };
