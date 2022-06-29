import { connect } from "mongoose";

const connection = (mongoDatabaseURI = 'mongodb://localhost:/world_cups') => connect(mongoDatabaseURI);

export default connection;
