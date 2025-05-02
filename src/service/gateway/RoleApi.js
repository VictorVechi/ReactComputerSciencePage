export default class RoleApi {
    constructor(api) {
        if (RoleApi.instance) { 
            return RoleApi.instance;
        }
    
        this.api = api;
        RoleApi.instance = this;
      }
    
    static getInstance(api) {
        if (!RoleApi.instance) {
            return new RoleApi(api);
        }
        return RoleApi.instance;
      }

    async getRoleAll() {
        try {
            const response = await this.api.get('/roles');
            return response;
        } catch (error) {
            console.error(error)
        }
      }
  
    async postRoleRegister(data) {
        try {
            const response = await this.api.post('/roles/register', data)
            return response;
        } catch (error) {
            console.error(error)
        }
      }
  
    async putRoleUpdate(data, id) {
        try {
            const response = await this.api.put(`/roles/${id}`, data)
            return response;
        } catch (error) {
            console.error(error)
        }
      }

}

