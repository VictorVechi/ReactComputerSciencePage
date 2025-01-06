import React from "react";
import { StyledSidebar } from "./sidebar.styles";
import Button from "../../../common/button/Button"; // Importe o componente Button

const Sidebar = ({ isAdmin, setActiveOption }) => {
  return (
    <StyledSidebar>
      {isAdmin && (
        <div className="menu">
          <Button
            texto="Usuário"
            onClick={() => setActiveOption("user")}
          />
        </div>
      )}
      <div className="menu">
        <Button
          texto="Posts"
          onClick={() => setActiveOption("post")}
        />
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;