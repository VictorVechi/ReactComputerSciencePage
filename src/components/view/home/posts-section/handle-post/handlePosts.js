import Api from "../../../../../service/Api";

const fakePosts = [
    {
        title: 'Post não encontrado',
        content: 'Conteudo do post',
        tags: [{ name: '404' }]
    },
    {
        title: 'Post não encontrado',
        content: 'Conteudo do post',
        tags: [{ name: '404' }]
    },
    {
        title: 'Post não encontrado',
        content: 'Conteudo do post',
        tags: [{ name: '404' }]
    },
    {
        title: 'Post não encontrado',
        content: 'Conteudo do post',
        tags: [{ name: '404' }]
    }
]

export const handleGetPosts = async (setPosts) => {
    try {
        const apiInstance = Api.getInstance();
        const response = await apiInstance.getPublicacaoAll();
        if( response ) {
            setPosts(response.slice(-4))
        } else {
            setPosts(fakePosts)
        }
    } catch (error) {
        console.log("Erro na busca de post", error);
        setPosts(fakePosts)
    }
}