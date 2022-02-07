import { hash } from "bcrypt";
import { v4 as uuidV4 } from "uuid";

import createConnetion from "../index";

async function create() {
  const connection = await createConnetion("localhost");

  const id = uuidV4();
  const password = await hash("admin", 8);

  await connection.query(
    `INSERT INTO USERS(id, name, registration, email, password, "isAdmin", created_at) 
      values('${id}', 'admin', '1', 'admin@univille.br', '${password}', true, 'now()')
    `
  );

  await connection.close();
}

create().then(() => console.log("Admin created"));
