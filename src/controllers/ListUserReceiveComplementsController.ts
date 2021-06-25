import { Request, Response } from "express";
import { ListUserReceiveComplementsService } from "../services/ListUserReceiveComplementsService";

class ListUserReceiveComplementsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserSendComplementsService = new ListUserReceiveComplementsService();

    const compliments = await listUserSendComplementsService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserReceiveComplementsController };