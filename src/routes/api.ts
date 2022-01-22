import { Router } from "express";

import * as apiController from '../controllers/apiController';

const router = Router();

router.get('/frases', apiController.getAllPhrases)
router.get('/frases/:author', apiController.getAuthorPhrases)
router.post('/frases', apiController.sendPhrase)
router.put('/frases/:id', apiController.putPhrase)
router.delete('/frases/:id', apiController.deletePhrase)

export default router;