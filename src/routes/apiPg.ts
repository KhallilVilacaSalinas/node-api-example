import { Router } from "express";

import * as apiPgController from '../controllers/apiPgController';

const router = Router();

router.get('/frases', apiPgController.getAllPhrases)
router.get('/frases/:author', apiPgController.getAuthorPhrases)
router.post('/frases', apiPgController.sendPhrase)
router.put('/frases/:id', apiPgController.putPhrase)
router.delete('/frases/:id', apiPgController.deletePhrase)

export default router;