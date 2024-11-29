import React, { useEffect, useState } from "react";
import { RoleEnum } from "../../enum/RoleEnum";
import { LocalStorageEnum } from "../../enum/LocalStorageEnum";

const Dashboard = () => {
    const [isAdmin, setIsAdmin] = useState(false);
  
    useEffect(() => {
      const role = localStorage.getItem(LocalStorageEnum.ROLE_KEY);
      if (role === RoleEnum.ADMIN) {
        setIsAdmin(true);
      }
    }, []);
  
    return (
      <div>
        {isAdmin ? <h1>Dashboard Admin</h1> : <h1>Dashboard</h1>}
      </div>
    );
}; export default Dashboard;