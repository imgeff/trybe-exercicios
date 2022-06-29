import { WorldCupModel } from "../models/WorldCupModel";

export class WorldCupService {
  private model = new WorldCupModel();

  public getEditionsCup = async () => {
    const editionsCup = await this.model.getEditionsCup();
    return editionsCup;
  }
}