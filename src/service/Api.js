import axios from "axios";
import UsuarioApi from "./UsuarioApi";
import RoleApi from "./RoleApi";
import TagApi from "./TagApi";

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
    this.roleApi = RoleApi.getInstance(this.api);
    this.tagApi = TagApi.getInstance(this.api);
  }
  
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
      return this.roleApi.getRoleAll();
    }

    static async postRoleRegister(data) {
      return this.roleApi.postRoleRegister(data);
    }

    static async putRoleUpdate(data) {
      return this.roleApi.putRoleUpdate(data);
    }

    //metodos Tag
    
    static async getTagAll() {
      return this.tagApi.getTagAll();
    }

    static async getTagByName(name) {
      return this.tagApi.getTagByName(name);
    }

    static async postTagRegister(data) {
      return this.tagApi.postTagRegister(data);
    }

    static async putTagUpdate(id, data) {
      return this.tagApi.putTagUpdate(id, data);
    }

    static async deleteTagById(id) {
      return this.tagApi.deleteTagById(id);
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