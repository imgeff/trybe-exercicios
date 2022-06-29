import { Request, Response } from "express";
import { WorldCupService } from "../services/WorldCupService";

export class WorldCupController {
  private service = new WorldCupService();

  public getEditionsCup = async (req: Request, res: Response) => {
    const editionsCup = await this.service.getEditionsCup();
    return res.status(200).json(editionsCup);
  }
}
