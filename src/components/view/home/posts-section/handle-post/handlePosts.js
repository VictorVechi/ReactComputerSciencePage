import Api from "../../../../../service/gateway/Api";

const fakePosts = [
    {
        id: 1,
        title: 'Post não encontrado',
        content: 'Conteudo do post',
        tags: [{ name: '404' }]
    },
    {
        id: 2,
        title: 'Post não encontrado',
        content: 'Conteudo do post',
        tags: [{ name: '404' }]
    },
    {
        id: 3,
        title: 'Post não encontrado',
        content: 'Conteudo do post',
        tags: [{ name: '404' }]
    },
    {
        id: 4,
        title: 'Post não encontrado',
        content: 'Conteudo do post',
        tags: [{ name: '404' }]
    },
    {
        id: 5,
        title: 'Post não encontrado',
        content: 'Conteudo do post',
        tags: [{ name: '404' }]
    },
    {
        id: 6,
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
            setPosts(response.slice(-6))
        } else {
            setPosts(fakePosts)
        }
    } catch (error) {
        console.log("Erro na busca de post", error);
        setPosts(fakePosts)
    }
}