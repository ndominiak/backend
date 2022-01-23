import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  registration: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    registration: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ registration, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByRegistration(registration);

    if (!user) {
      throw new AppError("Registration or password incorrect!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Registration or password incorrect!");
    }

    const token = sign({}, "0828e69357b402dce5fc11a5299361e7", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        registration: user.registration,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
