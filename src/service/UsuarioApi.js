export default class UsuarioApi {
  constructor(api) {
    this.api = api;
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