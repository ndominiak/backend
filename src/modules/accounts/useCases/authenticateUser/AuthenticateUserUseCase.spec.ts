import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to athenticate an user", async () => {
    const user: ICreateUserDTO = {
      name: "John Doe",
      email: "test@test.com",
      registration: "000123",
      password: "123456",
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      registration: user.registration,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("should not be able to athenticate a non existent user", () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        registration: "123456",
        password: "123456",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to athenticate with incorrect password", async () => {
    const user: ICreateUserDTO = {
      name: "John Error",
      email: "test@test.com",
      registration: "9999",
      password: "1234",
    };

    await createUserUseCase.execute(user);

    expect(async () => {
      await authenticateUserUseCase.execute({
        registration: user.registration,
        password: "123456",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
