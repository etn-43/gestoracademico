import express from "express";
import router from "./routes/alunoRoutes.js";
import mongoDb from "./config/db.js";

const mongoConnect = await mongoDb();

mongoConnect.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

mongoConnect.once("open", () => {
    console.log("Conexao com o banco feita com sucesso");
});

const app = express();

app.use(express.json());
app.use(router);

export default app;
