import Api from "../../../../../service/gateway/Api";

const apiInstance = Api.getInstance();

export const handleSearch = async (search) => {
    try {
        const response = await apiInstance.postPublicacaoSearch({title: search});
        if( response ) {
            return response;
        }

        return [];

    } catch (error) {
        console.log("Erro na busca de post", error);
        return [];
    }
}