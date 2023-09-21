import aluno from "../models/aluno.js";

class AlunoController {
    static async buscaAlunos (req, res) {
        const alunos = await aluno.find();
        res.status(200).send(alunos);
    }
}

export default AlunoController;