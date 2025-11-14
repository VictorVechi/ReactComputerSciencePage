import axios from "axios";
import UsuarioApi from "./UsuarioApi";
import RoleApi from "./RoleApi";
import TagApi from "./TagApi";
import PostsApi from "./PostsApi";
import { LocalStorageEnum } from "../../enum/LocalStorageEnum";

export default class Api {
  constructor() {
    if (Api.instance) {
      return Api.instance;
    }

    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    });

    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem(LocalStorageEnum.TOKEN_KEY);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

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
    try {
      const response = await this.usuarioApi.getUsuarioById(id);
      if (response) {
        return response.data;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    } catch (error) {
      console.error("Erro ao buscar usuário", error);
      return null;
    }
  }

  async getUsuarioAll() {
    try {
      const response = await this.usuarioApi.getUsuarioAll();
      if (response) {
        return response.data;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    } catch (error) {
      console.error("Erro ao buscar usuários", error);
      return null;
    }
  }

  async postUsuarioRegister(data) {
    try {
      const response = await this.usuarioApi.postUsuarioRegister(data);
      if (response) {
        return response.data;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    } catch (error) {
      console.error("Erro ao registrar usuário", error);
      return null;
    }
  }

  async postUsuarioLogin(data) {
    try {
      const response = await this.usuarioApi.postUsuarioLogin(data);
      if (response) {
        return response.data.response;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    } catch (error) {
      console.error("Erro ao fazer login", error);
      if (error.response?.data) {
        console.error("Detalhes do erro:", error.response.data);
      }
      return null;
    }
  }

  async putUsuarioPassword(data) {
    try {
      const response = await this.usuarioApi.putUsuarioPassword(data);
      if (response) {
        return response.data;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    } catch (error) {
      console.error("Erro ao atualizar senha", error);
      return null;
    }
  }

  async putUsuarioData(data) {
    try {
      const response = await this.usuarioApi.putUsuarioData(data);
      if (response) {
        return response.data;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    } catch (error) {
      console.error("Erro ao atualizar dados do usuário", error);
      return null;
    }
  }

  async deleteUsuarioByEmail(data) {
    try {
      const response = await this.usuarioApi.deleteUsuarioByEmail(data);
      if (response) {
        return response.data;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    } catch (error) {
      console.error("Erro ao deletar usuário", error);
      return null;
    }
  }

  async getUsuarioByToken() {
    try {
      const response = await this.usuarioApi.getUserInfoByToken();
      if (response) {
        return response.data;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    } catch (error) {
      return null;
    }
  }

  async getUsuarioShow() {
    try {
      const response = await this.usuarioApi.getUserShow();
      if (response) {
        return response.data;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    }
    catch (error) {
      console.error("Erro ao buscar usuários para exibição", error);
      return null;
    }
  }

  // metodos Roles

  async getRoleAll() {
    try {
      const response = await this.roleApi.getRoleAll();
      if (response) {
        return response.data;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    } catch (error) {
      console.error("Erro ao buscar roles", error);
      return null;
    }
  }

  async postRoleRegister(data) {
    try {
      const response = await this.roleApi.postRoleRegister(data);
      if (response) {
        return response.data;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    } catch (error) {
      console.error("Erro ao registrar role", error);
      return null;
    }
  }

  async putRoleUpdate(data, id) {
    try {
      const response = await this.roleApi.putRoleUpdate(data, id);
      if (response) {
        return response.data;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    } catch (error) {
      console.error("Erro ao atualizar role", error);
      return null;
    }
  }

  async deleteRoleById(id) {
    try {
      const response = await this.roleApi.deleteRole(id);
      if (response) {
        return response.data;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    }
    catch (error) {
      console.error("Erro ao deletar role", error);
      return null;
    }
  }

  //metodos Tag

  async getTagAll() {
    try {
      const response = await this.tagApi.getTagAll();
      if (response) {
        return response.data;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    } catch (error) {
      console.error("Erro ao buscar tags", error);
      return null;
    }
  }

  async getTagByName(name) {
    try {
      const response = await this.tagApi.getTagByName(name);
      if (response) {
        return response.data;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    } catch (error) {
      console.error("Erro ao buscar tag por nome", error);
      return null;
    }
  }

  async postTagRegister(data) {
    try {
      const response = await this.tagApi.postTagRegister(data);
      if (response) {
        return response.data;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    } catch (error) {
      console.error("Erro ao registrar tag", error);
      return null;
    }
  }

  async putTagUpdate(id, data) {
    try {
      const response = await this.tagApi.putTagUpdate(id, data);
      if (response) {
        return response.data;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    } catch (error) {
      console.error("Erro ao atualizar tag", error);
      return null;
    }
  }

  async deleteTagById(id) {
    try {
      const response = await this.tagApi.deleteTagById(id);
      if (response) {
        return response.data;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    } catch (error) {
      console.error("Erro ao deletar tag", error);
      return null;
    }
  }

  // metodos publicacoes

  async getPublicacaoAll() {
    try {
      const response = await this.postsApi.getPublicacaoAll();
      if (response) {
        return response.data;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    } catch (error) {
      console.error("Erro ao buscar publicações", error);
      return null;
    }
  }

  async postPublicacaoRegister(data) {
    try {
      const response = await this.postsApi.postPublicacaoRegister(data);
      if (response) {
        return response.data;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    } catch (error) {
      console.error("Erro ao registrar publicação", error);
      return null;
    }
  }

  async postPublicacaoSearch(data) {
    try {
      const response = await this.postsApi.postPublicacaoSearch(data);
      if (response) {
        return response.data;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    } catch (error) {
      console.error("Erro ao buscar publicação", error);
      return null;
    }
  }

  async putPublicacaoUpdate(id, data) {
    try {
      const response = await this.postsApi.putPublicacaoUpdate(id, data);
      if (response) {
        return response.data;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    } catch (error) {
      console.error("Erro ao atualizar publicação", error);
      return null;
    }
  }

  async deletePublicacaoById(id) {
    try {
      const response = await this.postsApi.deletePublicacaoById(id);
      if (response) {
        return response.data;
      } else {
        console.error("Resposta inválida recebida");
        return null;
      }
    } catch (error) {
      console.error("Erro ao deletar publicação", error);
      return null;
    }
  }


};