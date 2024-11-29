import React, { useEffect, useState } from "react";
import LocalStorageEnum from "../../enum/LocalStorageEnum";
import { RoleEnum } from "../../enum/RoleEnum";

const Dashboard = () => {
    [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const role = localStorage.getItem(LocalStorageEnum.ROLE_KEY);
        if (role === RoleEnum.ADMIN) {
            setIsAdmin(true);
        }
    })

    return (
        <div>
           {isAdmin ? <h1>Dashboard Admin</h1> : <h1>Dashboard</h1>}
        </div>
    )
}; export default Dashboard;