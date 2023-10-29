// util/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = "nxs"; 
const options = {
  useUnifiedTopology: true,
};

let client;

async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri, options);
    await client.connect();
  }

  const db = client.db(dbName); // Use o nome do banco de dados especificado

  return { db, client };
}

export { connectToDatabase };
