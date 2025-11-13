export default class UsuarioApi {
  constructor(api) {
    if (UsuarioApi.instance) {
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
        const response = await this.api.get(`/user/info/${id}`);
        return response;
    } catch (error) {
        console.error(error)
    }
  }

  async getUsuarioAll() {
    try {
        const response = await this.api.get('/users');
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
        const response = await this.api.delete('/user/delete', {data});
        return response;
    } catch (error) {
        console.log(error)
    }
  }

  async getUserInfoByToken() {
    try {
        const response = await this.api.get('/user/details');
        return response;
    } catch (error) {
        console.error(error)
    }
  }

  async getUserShow() {
    try {
        const response = await this.api.get('/user/show');
        return response;
    } catch (error) {
        console.error(error)
    }
}
}