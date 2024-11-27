import axios from "axios";
import UsuarioApi from "./UsuarioApi";
import RoleApi from "./RoleApi";
import TagApi from "./TagApi";
import PostsApi from "./PostsApi";
import LocalStorageEnum from "../enum/LocalStorageEnum";

export default class Api {
  constructor() {
    if (Api.instance) {
      return Api.instance;
    }
    
    this.token_key = LocalStorageEnum.TOKEN_KEY;
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    });
    
    this.api.interceptors.request.use((config) => {
      const token = localStorage.getItem(this.token_key);
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
    this.postsApi = PostsApi.getInstance(this.api);
    Api.instance = this;
  }

  static getInstance() {
    if (!Api.instance) {
      return new Api();
    }
    return Api.instance;
  }

  //metodos Usuario

   async getUsuarioById(id) {
    return this.usuarioApi.getUsuarioById(id);
  }

   async postUsuarioRegister(data) {
    return this.usuarioApi.postUsuarioRegister(data);
  }

   async postUsuarioLogin(data) {
    return this.usuarioApi.postUsuarioLogin(data);
  }

   async putUsuarioPassword(data) {
    return this.usuarioApi.putUsuarioPassword(data);
  }

   async putUsuarioData(data) {
    return this.usuarioApi.putUsuarioData(data);
  }

   async deleteUsuarioByEmail(data) {
    return this.usuarioApi.deleteUsuarioByEmail(data);
  }

  // metodos Roles

   async getRoleAll() {
    return this.roleApi.getRoleAll();
  }

   async postRoleRegister(data) {
    return this.roleApi.postRoleRegister(data);
  }

   async putRoleUpdate(data) {
    return this.roleApi.putRoleUpdate(data);
  }

  //metodos Tag

   async getTagAll() {
    return this.tagApi.getTagAll();
  }

   async getTagByName(name) {
    return this.tagApi.getTagByName(name);
  }

   async postTagRegister(data) {
    return this.tagApi.postTagRegister(data);
  }

   async putTagUpdate(id, data) {
    return this.tagApi.putTagUpdate(id, data);
  }

   async deleteTagById(id) {
    return this.tagApi.deleteTagById(id);
  }

  // metodos publicacoes

   async getPublicacaoAll() {
    return this.postsApi.getPublicacaoAll();
  }

   async postPublicacaoRegister(data) {
    return this.postsApi.postPublicacaoRegister(data);
  }

   async postPublicacaoSearch(data) {
    return this.postsApi.postPublicacaoSearch(data);
  }

   async putPublicacaoUpdate(id, data) {
    return this.postsApi.putPublicacaoUpdate(id, data);
  }

   async deletePublicacaoById(id) {
    return this.postsApi.deletePublicacaoById(id);
  }

};