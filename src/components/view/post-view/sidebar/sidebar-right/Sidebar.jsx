import React from "react";
import { StyledSidebar } from "../sidebar.styles";

const SidebarRight = () => {
  return (
    <StyledSidebar>
      <h3>Veja mais: </h3>
      <ul>
        <li><a href="https://ifpr.edu.br/pinhais/ifpr-pinhais/nossos-cursos/cursos-superiores/bacharelado-em-ciencia-da-computacao/" target="_blank" rel="noopener noreferrer">Informações do Curso</a></li>
        <li><a href="https://ifpr.edu.br/pinhais/wp-content/uploads/sites/22/2021/12/PPC-Ciencia-da-Computacao-IFPR-PINHAIS.pdf" target="_blank" rel="noopener noreferrer">PPC do Curso</a></li>
        <li><a href="https://ifpr.edu.br/pinhais/wp-content/uploads/sites/22/2021/12/MatrizCurricular_CienciadaComputacao.pdf" target="_blank" rel="noopener noreferrer">Matriz Curricular</a></li>
        <li><a href="https://ifpr.edu.br/pinhais/wp-content/uploads/sites/22/2021/12/ListaDisciplinasOptativas_CIenciadaComputacao.pdf" target="_blank" rel="noopener noreferrer">Disciplinas Optativas</a></li>
        <li><a href="https://ifpr.edu.br/pinhais/wp-content/uploads/sites/22/2024/08/Horarios-30-08-BCC.pdf" target="_blank" rel="noopener noreferrer">Horário de aulas</a></li>
      </ul>
      <h3>Redes Sociais:</h3>
      <ul>
        <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a></li>
        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
      </ul>
    </StyledSidebar>
  );
};

export default SidebarRight;