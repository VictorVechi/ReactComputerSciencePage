import Api from "../../../../../../service/gateway/Api";

export const fetchTags = async (setTags) => {
  try {
    const apiInstance = Api.getInstance();
    const response = await apiInstance.getTagAll();
    if (response) {
      setTags(response.tags);
    } else {
      setTags([]);
    }
  } catch (error) {
    console.error("Erro ao buscar tags:", error);
    setTags([]);
  }
};