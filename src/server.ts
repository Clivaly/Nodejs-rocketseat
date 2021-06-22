import express from "express";
// @types/express =>> biblioteca!
const app = express();
//criando a primeira rota.
/**
 * GET => Buscar informação;
 * POST => Inserir(criar) uma informação;
 * PUT => Alterar uma informação;
 * DELETE => Remover um dado;
 * PATCH => Alterar um informação específica.
*/

app.get("/test", (request, response) => {
  //request => Entrando;
  //response => Saindo.
  return response.send("Olá NLW");
});

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW método POST")
});

//http://localhost:3000 (definir porta)
//aplique o yarn tsc para converter em javascript.
app.listen(3000, () => console.log("Server is running..."));


