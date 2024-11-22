export default class UsuarioApi {
  constructor(api) {
    if (UsuarioApi.instance) { //Garante que, mesmo que seja criada a classe por um new, ela sempre retornará a mesma instância
        return UsuarioApi.instance;
    }

    this.api = api;
    UsuarioApi.instance = this;
  }

   static getInstance(api) {
    if (!UsuarioApi.instance) {
        return new UsuarioApi(api);
    }
    return UsuarioApi.instance;
  }

   async getUsuarioById(id) {
    try {
        const response = await this.api.get(`/user/${id}`);
        return response;
    } catch (error) {
        console.error(error)
    }
  }

   async postUsuarioRegister(data) {
    try {
        const response = await this.api.post('/user/register', data)
        return response;
    } catch (error) {
        console.error(error)
    }
  }

   async postUsuarioLogin(data) {
    try {
        const response = await this.api.post('/user/login', data)
        return response;
    } catch (error) {
        console.error(error)
    }
  }

   async putUsuarioPassword(data) {
    try {
        const response = await this.api.put('/user/recover', data)
        return response;
    } catch (error) {
        console.error(error)
    }
  }

   async putUsuarioData(data){
    try {
        const response = await this.api.put('/user/update', data)
        return response;
    } catch (error) {
        console.error(error)
    }
  }

   async deleteUsuarioByEmail(data) {
    try {
        const response = await this.api.delete(`/user/delete`, data);
        return response;
    } catch (error) {
        console.log(error)
    }
  }
}