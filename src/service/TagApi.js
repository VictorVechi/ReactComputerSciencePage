export default class TagApi {
    constructor(api) {
        if (TagApi.instance) { 
            return TagApi.instance;
        }
    
        this.api = api;
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
          const response = await this.api.get('/tag/all');
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    async getTagByName(name) {
      try {
          const response = await this.api.get(`/tag/search/${name}`);
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    async postTagRegister(data) {
      try {
          const response = await this.api.post('/tag/create', data)
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    async putTagUpdate(id, data){
      try {
          const response = await this.api.put(`/tag/update/${id}`, data)
          return response;
      } catch (error) {
          console.error(error)
      }
    }

    async deleteTagById(id) {
      try {
          const response = await this.api.delete(`/tag/delete/${id}`);
          return response;
      } catch (error) {
          console.log(error)
      }
    } 
}