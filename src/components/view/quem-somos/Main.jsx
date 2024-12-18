import React from "react";
import { StyledQuemSomosMain } from "./main.styles";
import UserCard from "./user-card/UserCard";
import { placeholder } from "./user-placeholder/userPlaceholder";

const QuemSomosMain = () => {
    return (
        <StyledQuemSomosMain>
            <h1>Corpo docente</h1>
            {placeholder.map((user, index) => (
                <div key={index} className="user-card">
                    <UserCard user={user} />
                </div>
            ))}
        </StyledQuemSomosMain>
    )
}

export default QuemSomosMain