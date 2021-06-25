import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({email, password}: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    //verificar se email existente
    const user = await usersRepositories.findOne({
      email
    });

    if(!user) {
      throw new Error("Email or Password incorrect");
    }

    //verificar se senha está correta
    const passwordMatch = await compare(password, user.password)
    if(!passwordMatch) {
      throw new Error("Email or Password incorrect");
    }

    //Gerar token
    const token = sign({
      email: user.email
    }, "0d1e00d2454d3f00086f73cb03c023b6", {
      subject: user.id,
      expiresIn: "1d"
    });

    return token;
  }
}

export { AuthenticateUserService }