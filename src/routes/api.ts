import { Router } from "express";

import * as apiController from '../controllers/apiController';

const router = Router();

router.get('/name/:name', apiController.name)

router.get('/frases', apiController.getAllPhrases)

router.post('/frases', apiController.sendPhrase)


export default router;