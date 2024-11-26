export default class UsuarioApi {
  constructor(api) {
    if (UsuarioApi.instance) {
        return UsuarioApi.instance;
    }

    this.api = api;
    this.api_url = process.env.API_URL
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
        const response = await this.api.get(`${this.api_url}/user/${id}`);
        return response;
    } catch (error) {
        console.error(error)
    }
  }

   async postUsuarioRegister(data) {
    try {
        const response = await this.api.post(`${this.api_url}/user/register`, data)
        return response;
    } catch (error) {
        console.error(error)
    }
  }

   async postUsuarioLogin(data) {
    try {
        const response = await this.api.post(`${this.api_url}/user/login`, data)
        return response;
    } catch (error) {
        console.error(error)
    }
  }

   async putUsuarioPassword(data) {
    try {
        const response = await this.api.put(`${this.api_url}/user/recover`, data)
        return response;
    } catch (error) {
        console.error(error)
    }
  }

   async putUsuarioData(data){
    try {
        const response = await this.api.put(`${this.api_url}/user/update`, data)
        return response;
    } catch (error) {
        console.error(error)
    }
  }

   async deleteUsuarioByEmail(data) {
    try {
        const response = await this.api.delete(`${this.api_url}/user/delete`, data);
        return response;
    } catch (error) {
        console.log(error)
    }
  }
}