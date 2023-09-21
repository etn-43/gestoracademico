import express from "express";
import AlunoController from "../controllers/alunoController.js";

const router = express.Router();

router.get("/alunos",AlunoController.buscaAlunos);

export default router;