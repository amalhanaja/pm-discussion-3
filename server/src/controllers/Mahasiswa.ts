import { Request, Response } from "express";
import { FindAllMahasiswa } from "../usecases/mahasiswa/FindAllMahasiswa";
import { Mahasiswa } from "models/Mahasiswa";
import { ResponseWithData } from "controllers/Response";

export interface MahasiswaController {
  getAll: (request: Request, response: Response) => void;
}

export class MahasiswaControllerImpl implements MahasiswaController {
  findAllMahasiswa: FindAllMahasiswa;

  constructor(findAllMahasiswa: FindAllMahasiswa) {
    this.findAllMahasiswa = findAllMahasiswa;
  }

  getAll = (_: Request, response: Response): void => {
    // response.send("Hmm");
    // console.log(this.findAllMahasiswa)
    // new FindAllMahasiswa()
    this.findAllMahasiswa
      .execute()
      .then((data) => {
        const responseBody: ResponseWithData<Mahasiswa[]> = {
          status: "OK",
          data: data,
        };
        response.status(200).json(responseBody);
      })
      .catch((e: Error) => {
        response.status(500).json({
          status: "failed",
          message: e.message || "Unknown error",
        });
      });
  }
}
