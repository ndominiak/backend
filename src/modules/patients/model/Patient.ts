import { v4 as uuidV4 } from "uuid";

class Patient {
  id?: string;
  name: string;
  cpf: string;
  birthday: Date;
  genre: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Patient };
