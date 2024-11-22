import axios from "axios";
import UsuarioApi from "./UsuarioApi";

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

    this.usuarioApi = UsuarioApi.getInstance(this.api);
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
      return this.usuarioApi.getUsuarioById(id);
    }
    
    static async postUsuarioRegister(data) {
      return this.usuarioApi.postUsuarioRegister(data);
    }

    static async postUsuarioLogin(data) {
      return this.usuarioApi.postUsuarioLogin(data);
    }

    static async putUsuarioPassword(data) {
      return this.usuarioApi.putUsuarioPassword(data);
    }

    static async putUsuarioData(data) {
      return this.usuarioApi.putUsuarioData(data);
    }

    static async deleteUsuarioByEmail(data) {
      return this.usuarioApi.deleteUsuarioByEmail(data);
    }

    
    // metodos Roles
    
    static async getRoleAll() {
      try {
          const response = await this.api.get('/roles');
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    static async postRoleRegister(data) {
      try {
          const response = await this.api.post('/roles/register', data)
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    static async putRoleUpdate(data){
      try {
          const response = await this.api.put('/roles/update', data)
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    //metodos Tag

    static async getTagAll() {
      try {
          const response = await this.api.get('/tag/all');
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    static async getTagByName(name) {
      try {
          const response = await this.api.get(`/tag/search/${name}`);
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    static async postTagRegister(data) {
      try {
          const response = await this.api.post('/tag/create', data)
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    static async putTagUpdate(id, data){
      try {
          const response = await this.api.put(`/tag/update/${id}`, data)
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    static async deleteTagById(id) {
      try {
          const response = await this.api.delete(`/tag/delete/${id}`);
          return response;
      } catch (error) {
          console.log(error)
      }
    }

    // metodos publicacoes

    static async postPublicacaoRegister(data) {
      try {
          const response = await this.api.post('/posts/create', data)
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    static async postPublicacaoSearch(data) {
      try {
          const response = await this.api.post('/posts/search', data)
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    static async putPublicacaoUpdate(id, data){ 
      try {
          const response = await this.api.put(`/posts/${id}`, data)
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    static async deletePublicacaoById(id) {
      try {
          const response = await this.api.delete(`/posts/${id}`);
          return response;
      } catch (error) {
          console.log(error)
      }
    }

  };