import { Request, Response } from "express";

import Phrase from "../models/PhraseMongo";

export const getAllPhrases = async (req: Request, res: Response) => {
    const phrase = await Phrase.find({});
    res.json({ phrase });
}

export const getAuthorPhrases = async (req: Request, res: Response) => {
    let author: string = req.params.author
    let phrase = await Phrase.findOne({ _id: author });
    
    if (phrase.length > 0) {
        res.json({ phrase });
    } else {
        res.json({ error: 'Frase não encontrada' });
    }
}

export const sendPhrase = async (req: Request, res: Response) => {
    let { author, txt } = req.body;
    
    let newPhrase = new Phrase();
    newPhrase.author = author;
    newPhrase.txt = txt;
    try {
        await newPhrase.save();
        res.status(201).send("Frase inserida com sucesso!");
    } catch (error) {
        res.send("Erro ao inserir usuario: " + error);
    }
}

export const putPhrase = async (req: Request, res: Response) => {
    let { id } = req.params;
    let { author, txt } = req.body;

    let phrase = await Phrase.findById(id);
    if (phrase) {
        phrase.author = author;
        phrase.txt = txt;
        await phrase.save();

        res.json({ phrase });
    } else {
        res.json({ error: 'Frase não encontrada' });
    }
}

export const deletePhrase = async (req: Request, res: Response) => {
    let { id } = req.params;

    let phrase = await Phrase.findById(id);
    if (phrase) {
        await phrase.destroy();
        res.status(200).send("Frase deletada com sucesso!");
    } else {
        res.json({ error: 'Frase não encontrada' });
    }
    
}