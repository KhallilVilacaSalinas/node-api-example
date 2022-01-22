import { connect } from "mongoose";
import dotenv from "dotenv"; 

dotenv.config();
export const mongoConnect = async () => {
	try {
		console.log("Conectanto ao MongoDB...");
		await connect(process.env.MONGO_URL as string);
		console.log("MongoDB conectado com sucesso!");
	} catch (error) {
		console.log("Erro MongoDb:" + error);
	}
};