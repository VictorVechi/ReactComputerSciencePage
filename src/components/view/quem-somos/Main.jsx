import React, { useEffect } from "react";
import { StyledQuemSomosMain } from "./main.styles";
import UserCard from "./user-card/UserCard";
import { placeholder } from "./user-placeholder/userPlaceholder";
import Api from "../../../service/gateway/Api";

const QuemSomosMain = () => {

    const [users, setUsers] = React.useState(placeholder);
    const apiInstance = Api.getInstance();

    useEffect(() => {
        const fetchUsers = async () => {
            const usersData = await apiInstance.getUsuarioShow();
            if (usersData) {
                setUsers(usersData);
            }
        };

        fetchUsers();
    }, []);
    

    return (
        <StyledQuemSomosMain>
            <h1>Corpo docente</h1>
            {users.map((user, index) => (
                <div key={index} className="user-card">
                    <UserCard user={user} />
                </div>
            ))}
        </StyledQuemSomosMain>
    )
}

export default QuemSomosMain