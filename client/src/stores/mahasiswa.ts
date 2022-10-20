import { ref } from "vue";
import { defineStore } from "pinia";
import axios, { type AxiosInstance } from "axios";

export interface Mahasiswa {
  name: string;
  class: string;
  score: number;
}

interface ApiResponse<T> {
  status: string;
  data?: T;
}

export const useMahasiswaStore = defineStore("mahasiswa", () => {
  const mahasiswa = ref<Mahasiswa[]>([]);
  const errorMessage = ref<string>("");
  const isLoading = ref<boolean>(false);

  const loadMahasiswa = async (): Promise<any> => {
    const axiosInstance: AxiosInstance = axios.create();
    isLoading.value = true;
    try {
      const response = await axiosInstance.get<ApiResponse<Mahasiswa[]>>(
        "http://localhost:3000/mahasiswas"
      );
      mahasiswa.value = response.data.data ?? [];
      isLoading.value = false;
    } catch (e: unknown) {
      isLoading.value = false;
      errorMessage.value = "Failed";
    }
  };

  return { mahasiswa, errorMessage, isLoading, loadMahasiswa };
});
