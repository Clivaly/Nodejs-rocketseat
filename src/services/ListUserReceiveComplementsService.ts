import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserReceiveComplementsService {
  async execute(user_id: string) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

    const compliments = await complimentsRepositories.findOne({
      where: {
        user_receiver: user_id
      },
      //relations: ["userSender", "userReceiver", "tag"]  <= traz todas as informações encadeadas
    });

    return compliments;
  }
}

export { ListUserReceiveComplementsService };