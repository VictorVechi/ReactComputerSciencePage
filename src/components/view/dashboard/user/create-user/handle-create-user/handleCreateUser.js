import Api from "../../../../../../service/gateway/Api";

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

export const regexPassword = (password) => {
  const Uppsercase = /[A-Z]/;
  const Lowercase = /[a-z]/;
  const Number = /[0-9]/;
  const PasswordLength = password.length >= 8;
  return Uppsercase.test(password) && Lowercase.test(password) && Number.test(password) && PasswordLength;
}