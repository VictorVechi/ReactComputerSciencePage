import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledSidebar } from "./sidebar.styles";

const Sidebar = ({ isAdmin }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isPostMenuOpen, setIsPostMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);
  const togglePostMenu = () => setIsPostMenuOpen(!isPostMenuOpen);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <StyledSidebar>
      {isAdmin && (
        <div className="menu">
          <div className="menu-header" onClick={toggleUserMenu}>
            Usuário <span className={`arrow ${isUserMenuOpen ? "open" : ""}`}>▼</span>
          </div>
          {isUserMenuOpen && (
            <ul>
              <li className="menu-item">
                <button onClick={() => handleNavigation("/dashboard/create-user")}>
                  Criar Novo Usuário
                </button>
              </li>
            </ul>
          )}
        </div>
      )}
      <div className="menu">
        <div className="menu-header" onClick={togglePostMenu}>
          Posts <span className={`arrow ${isPostMenuOpen ? "open" : ""}`}>▼</span>
        </div>
        {isPostMenuOpen && (
          <ul>
            <li className="menu-item">
              <button onClick={() => handleNavigation("/dashboard/create-post")}>
                Criar Novo Post
              </button>
            </li>
          </ul>
        )}
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;