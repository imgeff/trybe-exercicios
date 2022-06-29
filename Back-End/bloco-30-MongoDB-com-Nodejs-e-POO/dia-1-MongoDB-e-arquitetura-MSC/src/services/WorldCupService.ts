import { WorldCupModel } from "../models/WorldCupModel";
import { IWorldCup } from "../schemas/WorldCup";

export class WorldCupService {
  private model = new WorldCupModel();

  public getEditionsCup = async () => {
    const editionsCup = await this.model.getEditionsCup();
    return editionsCup;
  }

  public getByYear = async (year: number) => {
    const editionCup = await this.model.getByYear(year);
    if(!editionCup) throw new Error('Nesse Ano não houve Copa do Mundo');
    return editionCup;
  }

  public createWorldCup = async (WorldCup: IWorldCup) => {
    const worldCupCreated = await this.model.createWorldCup(WorldCup);
    return worldCupCreated;
  }
}