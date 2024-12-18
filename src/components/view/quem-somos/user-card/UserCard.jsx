import React from "react";
import { StyledUserCard } from "./userCard.styles";
import userNoImage from "../../../../assets/img/user-no-image.svg";

const UserCard = ({ user }) => {
    return (
        <StyledUserCard>
            <div className="card">
                <div className="user-image">
                    <img src={userNoImage} alt="" />
                </div>
                <div className="user-details">
                    <h3 className="user-name">{user.name}</h3>
                    <div className="user-info">
                        <p><strong>Disciplinas:</strong> {user.disciplinas}</p>
                        <p><strong>Área de pesquisa:</strong> {user.pesquisa}</p>
                    </div>
                </div>
            </div>
        </StyledUserCard>
    )
}

export default UserCard