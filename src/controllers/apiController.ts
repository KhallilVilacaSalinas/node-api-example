import { Request, Response } from "express";

import { Phrase } from "../models/Phrase";

export const name = (req: Request, res: Response) => {
    res.json({ pong: true });
}



export const getAllPhrases = async (req: Request, res: Response) => {
    let phrase = await Phrase.findAll();
    res.json({
        phrase
    });
}

export const sendPhrase = async (req: Request, res: Response) => {
    let { author, txt } = req.body;
    console.log(author);
    
    let newPhrase = await Phrase.create({ author, txt });
    res.json({id: newPhrase.id, author, txt});
}