import { Router } from "express";
import { WorldCupController } from "../controllers/WorldCupController";

const controler = new WorldCupController();
const route = Router();

route.get('/', controler.getEditionsCup);

route.get('/:year', controler.getByYear);

route.post('/', controler.createWorldCup);

export default route;