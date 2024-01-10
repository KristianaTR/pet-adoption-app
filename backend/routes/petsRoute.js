import express from "express";


const router = express.Router();

router.get('/get-all', getAllPets);
router.get('/get-petfinder-types', getAllTypes);

export default router;