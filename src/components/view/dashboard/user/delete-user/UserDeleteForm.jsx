import React, { useState, useEffect } from "react";
import { StyledUserDeleteForm } from "./userDeleteForm.styles";
import Api from "../../../../../service/gateway/Api";

const UserDeleteForm = () => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const apiInstance = Api.getInstance();
    // const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await apiInstance.getUsuarioAll();
                // console.log(response)
                setUsers(response.users);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            }
        }

        const fetchRoles = async () => {
            try {
                const response = await apiInstance.getRoleAll();
                setRoles(response.roles);
            } catch (error) {
                console.error("Erro ao buscar roles:", error);
            }
        }

        fetchUsers();
        fetchRoles();

    }, []);

    useEffect(() => {
        console.log(users);
        if (users.length > 0) {
            console.log(users[1]);
        }
    }, [users]);

    return (
        <StyledUserDeleteForm>
            <div>
                <h1>testeeeeeee</h1>
                {users.map((user) => (
                    <div key={user.id}>
                        <h1>email: {user.email}, cargo: {roles.find((role) => role.id === user.id_cargo).roleName}</h1>
                    </div>
                ))}
            </div>
        </StyledUserDeleteForm>
    );
};

export default UserDeleteForm;