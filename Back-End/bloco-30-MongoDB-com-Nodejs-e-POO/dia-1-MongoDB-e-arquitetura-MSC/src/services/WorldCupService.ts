import { WorldCupModel } from "../models/WorldCupModel";

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
}