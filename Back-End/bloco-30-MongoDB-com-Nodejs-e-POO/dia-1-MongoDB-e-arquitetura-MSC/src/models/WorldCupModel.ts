import { model } from 'mongoose';
import { IWorldCup, WorldCupSchema } from '../schemas/WorldCup';

export class WorldCupModel {
  private WorldCupModel = model<IWorldCup>('tournaments', WorldCupSchema);

  public getEditionsCup = async () => {
    const editionsCup = await this.WorldCupModel.find({}, { _id: false, year: true });
    return editionsCup;
  }
}