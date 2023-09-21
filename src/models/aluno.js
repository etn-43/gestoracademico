import mongoose from "mongoose";

const alunoSchema = new mongoose.Schema({
    name: String
  });

  const aluno = mongoose.model("aluno", alunoSchema);

  export default aluno;