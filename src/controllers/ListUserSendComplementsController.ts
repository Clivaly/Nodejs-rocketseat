import { Request, Response } from "express";
import { ListUserSendComplementsService } from "../services/ListUserSendComplementsService";

class ListUserSendComplementsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserSendComplementsService = new ListUserSendComplementsService();

    const compliments = await listUserSendComplementsService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserSendComplementsController };