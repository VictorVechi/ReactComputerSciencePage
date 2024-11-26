export default class RoleApi {
    constructor(api) {
        if (RoleApi.instance) { 
            return RoleApi.instance;
        }
    
        this.api = api;
        this.api_url = process.env.API_URL
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
            const response = await this.api.get(`${this.api_url}/roles`);
            return response;
        } catch (error) {
            console.error(error)
        }
      }
  
    async postRoleRegister(data) {
        try {
            const response = await this.api.post(`${this.api_url}/roles/register`, data)
            return response;
        } catch (error) {
            console.error(error)
        }
      }
  
    async putRoleUpdate(data) {
        try {
            const response = await this.api.put(`${this.api_url}/roles/update`, data)
            return response;
        } catch (error) {
            console.error(error)
        }
      }

}

