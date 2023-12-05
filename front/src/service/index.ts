import axios, { AxiosInstance, AxiosResponse } from "axios";
import { NameProps, ResponseProps } from "../types";

class Service {
  private api: AxiosInstance = axios.create({
    baseURL: "http://localhost:3011",
    headers: {
      "Content-Type": "application/json",
    },
  });

  async list(column: string): Promise<NameProps[]> {
    try {
      const response: AxiosResponse<NameProps[]> = await this.api.get(
        `/list/${column}`
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar dados do backend:", error);
      throw error;
    }
  }

  async create(props: NameProps): Promise<NameProps> {
    try {
      const response: AxiosResponse<NameProps> = await this.api.get(
        `/create/${props.firstname}/${props.lastname}`
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar dados do backend:", error);
      throw error;
    }
  }

  async remove(props: NameProps): Promise<ResponseProps> {
    try {
      const response: AxiosResponse<ResponseProps> = await this.api.get(
        `/remove/${props.id}`
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar dados do backend:", error);
      throw error;
    }
  }
}

const service = new Service();
export default service;
