export default class PostsApi {
    constructor(api) {
        if (PostsApi.instance) { 
            return PostsApi.instance;
        }
    
        this.api = api;
        this.api_url = process.env.API_URL
        PostsApi.instance = this;
      }
    
    static getInstance(api) {
        if (!PostsApi.instance) {
            return new PostsApi(api);
        }
        return PostsApi.instance;
      }

    async getPublicacaoAll() {
        try {
            const response = await this.api.get(`${this.api_url}/posts/`);
            return response;
        } catch (error) {
            console.error(error)
        }
    }
    
    async postPublicacaoRegister(data) {
        try {
            const response = await this.api.post(`${this.api_url}/posts/create`, data)
            return response;
        } catch (error) {
            console.error(error)
        }
      }
  
    async postPublicacaoSearch(data) {
        try {
            const response = await this.api.post(`${this.api_url}/posts/search`, data)
            return response;
        } catch (error) {
            console.error(error)
        }
      }
  
    async putPublicacaoUpdate(id, data){ 
        try {
            const response = await this.api.put(`${this.api_url}/posts/${id}`, data)
            return response;
        } catch (error) {
            console.error(error)
        }
      }
  
    async deletePublicacaoById(id) {
        try {
            const response = await this.api.delete(`${this.api_url}}/posts/${id}`);
            return response;
        } catch (error) {
            console.log(error)
        }
      }
}