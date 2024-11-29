import React from "react";

const Dashboard = ({admin}) => {
    return (
        <div>
            <h1>Dashboard</h1>
            {admin && <h1>VOCE é Admin</h1>}
        </div>
    )
}; export default Dashboard;