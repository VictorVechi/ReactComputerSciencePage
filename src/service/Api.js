import axios from "axios";

export default class Api {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.API_URL,
    });
    
    this.api.interceptors.request.use((config) => {
      const token = localStorage.getItem('jwtToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
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
    //metodos Usuario

    static async getUsuarioById(id) {
      try {
          const response = await this.api.get(`/user/${id}`);
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    static async postUsuarioRegister(data) {
      try {
          const response = await this.api.post('/user/register', data)
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    static async postUsuarioLogin(data) {
      try {
          const response = await this.api.post('/user/login', data)
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    static async putUsuarioPassword(data) {
      try {
          const response = await this.api.put('/user/recover', data)
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    static async putUsuarioData(data){
      try {
          const response = await this.api.put('/user/update', data)
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    static async deleteUsuarioByEmail(data) {
      try {
          const response = await this.api.delete(`/user/delete`, data);
          return response;
      } catch (error) {
          console.log(error)
      }
    }
  
};