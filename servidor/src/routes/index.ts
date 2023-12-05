import { Router, Request, Response } from "express";
import controller from "../controllers/NameController";

const routes = Router();

routes.get("/list/:column", controller.list);
routes.get("/create/:firstname/:lastname", controller.create);
routes.get("/remove/:id", controller.remove);

//aceita qualquer método HTTP ou URL
routes.use((_: Request, res: Response) =>
  res.json({ error: "Requisição desconhecida" })
);

export default routes;