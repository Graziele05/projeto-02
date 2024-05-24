import express from "express"; 
const app = express();
import cors from"cors";

import { getAllAsg, createAsg, updateAsg, deleteAsg} from "./pController.js";

app.use(express.json());
app.use(cors());

app.get('/asg', getAllAsg);
app.post('/asg', createAsg); 
app.put('/asg/:id', updateAsg);
app.delete('/asg/:id', deleteAsg);

app.listen(3000, () => {
    console.log("Servidor rodando com sucesso na porta 3000");
});
