import { Mahasiswa } from "models/Mahasiswa";

import { PromiseUseCase } from "usecases";
import dataMahasiswa from "../../resources/dataMahasiswa.json";

export class FindAllMahasiswa implements PromiseUseCase<Mahasiswa[]> {
  execute = (): Promise<Mahasiswa[]> => {
    return new Promise((resolve) => resolve(dataMahasiswa));
  };
}
