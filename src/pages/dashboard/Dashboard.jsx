import React, { useEffect, useState } from "react";
import { RoleEnum } from "../../enum/RoleEnum";
import { LocalStorageEnum } from "../../enum/LocalStorageEnum";
import MainDashboard from "../../components/view/dashboard/Main";
import { StyledDashboard } from "./dashboard.styles";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem(LocalStorageEnum.ROLE_KEY);
    if (role === RoleEnum.ADMIN) {
      setIsAdmin(true);
    }
  }, []);

  return (
    <StyledDashboard>
      <Header />
      <main>
        <div>
          <MainDashboard isAdmin={isAdmin} />
        </div>
      </main>
      <Footer />
    </StyledDashboard>
  );
}; export default Dashboard;