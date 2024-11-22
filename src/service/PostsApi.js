export default class PostsApi {
    constructor(api) {
        if (PostsApi.instance) { 
            return PostsApi.instance;
        }
    
        this.api = api;
        PostsApi.instance = this;
      }
    
    static getInstance(api) {
        if (!PostsApi.instance) {
            return new PostsApi(api);
        }
        return PostsApi.instance;
      }

    async postPublicacaoRegister(data) {
        try {
            const response = await this.api.post('/posts/create', data)
            return response;
        } catch (error) {
            console.error(error)
        }
      }
  
    async postPublicacaoSearch(data) {
        try {
            const response = await this.api.post('/posts/search', data)
            return response;
        } catch (error) {
            console.error(error)
        }
      }
  
    async putPublicacaoUpdate(id, data){ 
        try {
            const response = await this.api.put(`/posts/${id}`, data)
            return response;
        } catch (error) {
            console.error(error)
        }
      }
  
    async deletePublicacaoById(id) {
        try {
            const response = await this.api.delete(`/posts/${id}`);
            return response;
        } catch (error) {
            console.log(error)
        }
      }
}