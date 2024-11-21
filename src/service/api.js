import axios from "axios";

export default class Api {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.API_URL,
    });
  }

  // definir as requisições para a API de maneira estatica seguindo um exemplo a seguir
  // VERIFICAR COMO INSERIR O JWT COMO AUTH NA REQUEST
  // obs: da uma olhada na documentação do axios para ver como fazer isso

    // static async postUsuario(data) {
    //     try {
    //         const response = await this.api.post('/usuario', data);
    //         return response.data;
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
  
};