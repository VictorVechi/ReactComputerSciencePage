import Api from "../../../../../service/gateway/Api";

const apiInstance = Api.getInstance();

export const handleSearch = async (search, setPosts) => {
    try {
        const response = await apiInstance.getPublicacaoByTitle(search);
        if( response ) {
            return response;
        }

        return [];
        
    } catch (error) {
        console.log("Erro na busca de post", error);
        setPosts([])
    }
}