import { Router } from "express";
import { WorldCupController } from "../controllers/WorldCupController";

const controler = new WorldCupController();
const route = Router();

route.get('/', controler.getEditionsCup)

export default route;