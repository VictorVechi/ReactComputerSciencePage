import Api from "../../../../../../../service/gateway/Api";

export const fetchRoles = async (setRoles) => {
  try {
    const apiInstance = Api.getInstance();
    const response = await apiInstance.getRoleAll();
    if (response) {
      setRoles(response.roles);
    } else {
      setRoles([]);
    }
  } catch (error) {
    console.error("Erro ao buscar cargos:", error);
    setRoles([]);
  }
};