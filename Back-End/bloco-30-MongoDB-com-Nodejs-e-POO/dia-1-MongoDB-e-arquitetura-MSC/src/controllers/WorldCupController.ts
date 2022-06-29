import { Request, Response } from "express";
import { WorldCupService } from "../services/WorldCupService";

export class WorldCupController {
  private service = new WorldCupService();

  public getEditionsCup = async (req: Request, res: Response) => {
    const editionsCup = await this.service.getEditionsCup();
    return res.status(200).json(editionsCup);
  }

  public getByYear = async (req: Request, res: Response) => {
    try {
      const { year } = req.params;
      const editionCup = await this.service.getByYear(Number(year));
      return res.status(200).json(editionCup);
    } catch (error: any) {
      return res.status(404).json({ message: error.message });
    }
  }

  public createWorldCup = async (req: Request, res: Response) => {
    const {
      year,
      hostCountry,
      champions,
      runnerUp,
      editionGoals,
      editionStrikers,
      bestPlayer,
      bestGoalkeeper,
      bestYoungPlayer,
    } = req.body

    const worldCup = {
      year,
      hostCountry,
      champions,
      runnerUp,
      editionGoals,
      editionStrikers,
      bestPlayer,
      bestGoalkeeper,
      bestYoungPlayer,
    }

    const worldCupCreated = await this.service.createWorldCup(worldCup);
    return res.status(200).json(worldCupCreated);
  }
}
