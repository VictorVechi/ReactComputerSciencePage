export default class TagApi {
    constructor(api) {
        if (TagApi.instance) { 
            return TagApi.instance;
        }
    
        this.api = api;
        this.api_url = process.env.API_URL
        TagApi.instance = this;
      }
    
    static getInstance(api) {
        if (!TagApi.instance) {
            return new TagApi(api);
        }
        return TagApi.instance;
      }

    async getTagAll() {
      try {
          const response = await this.api.get(`${this.api_url}/tag/`);
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    async getTagByName(name) {
      try {
          const response = await this.api.get(`${this.api_url}/tag/search/${name}`);
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    async postTagRegister(data) {
      try {
          const response = await this.api.post(`${this.api_url}/tag/create`, data)
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    async putTagUpdate(id, data){
      try {
          const response = await this.api.put(`${this.api_url}/tag/update/${id}`, data)
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    async deleteTagById(id) {
      try {
          const response = await this.api.delete(`${this.api_url}/tag/delete/${id}`);
          return response;
      } catch (error) {
          console.log(error)
      }
    } 
}