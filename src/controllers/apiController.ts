import { Request, Response } from "express";

import { Phrase } from "../models/Phrase";

export const getAllPhrases = async (req: Request, res: Response) => {
    let phrase = await Phrase.findAll();
    res.json({ phrase });
}

export const getAuthorPhrases = async (req: Request, res: Response) => {
    let author: string = req.params.author
    let phrase = await Phrase.findAll({ where: { author } });
    
    if (phrase.length > 0) {
        res.json({ phrase });
    } else {
        res.json({ error: 'Frase não encontrada' });
    }
}

export const sendPhrase = async (req: Request, res: Response) => {
    let { author, txt } = req.body;
    
    let newPhrase = await Phrase.create({ author, txt });
    res.json({id: newPhrase.id, author, txt});
}

export const putPhrase = async (req: Request, res: Response) => {
    let { id } = req.params;
    let { author, txt } = req.body;

    let phrase = await Phrase.findByPk(id);
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

    let phrase = await Phrase.findByPk(id);
    if (phrase) {
        await phrase.destroy();
        res.status(200).send("Frase deletada com sucesso!");
    } else {
        res.json({ error: 'Frase não encontrada' });
    }
    
}