import { connect } from "mongoose";

const options = { dbName: 'world_cups' }

export const connection = connect('mongodb://localhost:/27017/', options);
