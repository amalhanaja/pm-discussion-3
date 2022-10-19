import express, { Express, Request, Response } from "express";
import cors from "cors";
import { FindAllMahasiswa } from "./usecases/mahasiswa/FindAllMahasiswa";
import {
  MahasiswaController,
  MahasiswaControllerImpl,
} from "./controllers/Mahasiswa";
import { MahasiswaRouter } from "./routes/Mahasiswa";

const app: Express = express();
const port = 3000;

const findAllMahasiswa: FindAllMahasiswa = new FindAllMahasiswa();
const mahasiswaController: MahasiswaController = new MahasiswaControllerImpl(
  findAllMahasiswa
);
const mahasiswaRouter: MahasiswaRouter = new MahasiswaRouter(
  mahasiswaController
);

app.use(mahasiswaRouter.router);
app.get("/", (_: Request, res: Response) => {
  res.send("Alfian Akmal Hanantio");
});
app.use(express.json);
app.use(cors());
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
