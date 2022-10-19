import { MahasiswaController } from "controllers/Mahasiswa";
import BaseRoutes from "./BaseRouter";

export class MahasiswaRouter extends BaseRoutes {
  mahasiswaController: MahasiswaController;

  constructor(mahasiswaController: MahasiswaController) {
    super();
    this.mahasiswaController = mahasiswaController;
    this.handleRoutes();
  }

  protected handleRoutes(): void {
    this.router.get("/mahasiswas", this.mahasiswaController.getAll);
  }
}
