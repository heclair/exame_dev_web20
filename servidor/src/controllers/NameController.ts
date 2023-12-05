import { Request, Response } from "express";
import AppDataSource from "../data-source";
import { Name } from "../entities/Name";

class NameController {
  async create(req: Request, res: Response) {
    const { firstname, lastname } = req.params;
    const register = await AppDataSource.manager.save(Name, { firstname, lastname });
    res.send(register);
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params;
    const { affected: count } = await AppDataSource.manager.delete(Name, {
      id,
    });
    return res.json({ count });
  }

  async list(req: Request, res: Response): Promise<Response> {
    const { column } = req.params;
    const response = await AppDataSource.manager.find(Name, {
      order: {
        [column]: "ASC",
      },
    });
    return res.json(response);
  }
}

export default new NameController();
