import { Request, Response } from "express";

import { Phrase } from "../models/Phrase";

export const name = (req: Request, res: Response) => {
    res.json({ pong: true });
}



export const getAllPhrases = async (req: Request, res: Response) => {
    let phrase = await Phrase.findAll();
    res.json({ phrase });
}

export const getAuthorPhrases = async (req: Request, res: Response) => {
    let author: string = req.params.author
    let phrase = await Phrase.findAll({
        where: { author }
    });
    
    if (phrase.length > 0) {
        res.json({ phrase });
    } else {
        res.json({ error: 'Frase não encontrada' });
    }
    
}

export const sendPhrase = async (req: Request, res: Response) => {
    let { author, txt } = req.body;
    console.log(author);
    
    let newPhrase = await Phrase.create({ author, txt });
    res.json({id: newPhrase.id, author, txt});
}

