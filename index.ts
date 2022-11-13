import express, { Application, Request, Response } from "express";
import cors from "cors";

import users from "./src/routes/clienteRoutes";
import notaVendas from "./src/routes/notaVendaRoutes";
import produtos from "./src/routes/produtoRoutes";
import categoriaProdutoRoutes from "./src/routes/categoriaProdutoRoutes";
import posts from "./src/routes/postRoutes";
import address from "./src/routes/addressRoutes";
import payment from "./src/routes/paymentRoutes";
import cart from "./src/routes/cartRoutes";
import categoriaPost from "./src/routes/categoriaPostRoutes";

import admin from "firebase-admin";

const serviceAccount = require("../petshop-3871e-firebase-adminsdk-khdnf-2c5a74dcf1.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app: Application = express();

app.use(express.static("public"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response) => {
  res.send("Worked");
});

app.use("/api/v1", users);
app.use("/api/v1", produtos);
app.use("/api/v1", notaVendas);
app.use("/api/v1", categoriaProdutoRoutes);
app.use("/api/v1", posts);
app.use("/api/v1", address);
app.use("/api/v1", payment);
app.use("/api/v1", cart);
app.use("/api/v1", categoriaPost);

app.use((req: Request, res: Response) => {
  res.status(404);
});

const port = process.env.PORT || 8030;

app.listen(port, () =>
  console.log(`The server is running on the port ${port}`)
);

//npx prisma db pull
//npx prisma generate

//DATABASE_URL="postgresql://postgres:erik2202@localhost:5432/petshop?schema=public&connection_limit=5"

//API de Pagamento
//API Correios calcular frete
//API Emissão de Nota Fiscal?
