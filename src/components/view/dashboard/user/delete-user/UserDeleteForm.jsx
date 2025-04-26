import React, { useState, useEffect } from "react";
import { StyledUserDeleteForm, ModalOverlay } from "./userDeleteForm.styles";
import Api from "../../../../../service/gateway/Api";
import { LocalStorageEnum } from "../../../../../enum/LocalStorageEnum";

const UserDeleteForm = () => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const currentUserId = localStorage.getItem(LocalStorageEnum.USER_ID);
    const apiInstance = Api.getInstance();

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

    const handleDeleteUser = async () => {
        if (!selectedUser) return;

        try {
            const data = {
                email: selectedUser.email
            }

            await apiInstance.deleteUsuarioByEmail(data);
            setUsers(users.filter((user) => user.id !== selectedUser.id));
            setIsModalOpen(false);
            setSelectedUser(null);
        } catch (error) {
            console.error("Erro ao deletar usuário.", error);
        }
    }

    return (
        <StyledUserDeleteForm>
            <div>
                <h1>Deletar um usuário</h1>
                {users.filter(user => user.id !== currentUserId).map((user) => (
                    <div className="user-card" key={user.id}>
                        <div>
                            <p>{console.log(user)}</p>
                            <strong>{user.name}</strong>
                            <p className="email">{user.email}</p>
                            <p>{roles.find((role) => role.id === user.id_cargo)?.roleName || "Cargo não encontrado"}</p>
                        </div>
                        <button className="delete-button" onClick={() => { setSelectedUser(user); setIsModalOpen(true); }}>
                            🗑️
                        </button>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <ModalOverlay>
                    <div className="modal-content">
                        <h2>Tem certeza que deseja excluir?</h2>
                        <p>
                            Nome: <strong>{selectedUser.name}</strong><br />
                            Email: <code>{selectedUser.email}</code>
                        </p>
                        <div className="modal-actions">
                            <button className="cancel" onClick={() => { setIsModalOpen(false); }}>Cancelar</button>
                            <button className="confirm" onClick={() => { handleDeleteUser() }}>Deletar</button>
                        </div>
                    </div>
                </ModalOverlay>
            )}
        </StyledUserDeleteForm>
    );
};

export default UserDeleteForm;