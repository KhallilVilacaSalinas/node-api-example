import { Router } from "express";

import * as apiMongoController from '../controllers/apiMongoController';

const router = Router();

router.get('/frases', apiMongoController.getAllPhrases)
router.get('/frases/:author', apiMongoController.getAuthorPhrases)
router.post('/frases', apiMongoController.sendPhrase)
router.put('/frases/:id', apiMongoController.putPhrase)
router.delete('/frases/:id', apiMongoController.deletePhrase)

export default router;