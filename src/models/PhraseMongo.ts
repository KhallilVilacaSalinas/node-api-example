import { Schema, model, connection } from "mongoose";

type UserType = {
    author: string,
    txt: string
}

const schema = new Schema<UserType>({
    author: { type: String, required: true },
    txt: { type: String, required: true },
});

const modelName: string = 'Phrase';

export default (connection && connection.models[modelName])
    ? connection.models[modelName]
    : model<UserType>(modelName, schema);