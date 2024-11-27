import React from "react";
import { StyleStudentSection } from "./studentSection.styles";



const StudentSection = () => {
    return (
        <StyleStudentSection>
            <div className='content'>
                <div className='text-second-section'>
                    <p>
                    Este site foi desenvolvido com o objetivo de auxiliar alunos e professores do curso de Ciências da Computação do IFPR, campus Pinhais. Para obter mais informações, como horários de aulas e calendário acadêmico, acesse a área destinada aos alunos.
                    </p>
                </div>
            </div>
            <div className='right-button'>
                <a href="https://sei.ifpr.edu.br/sei/modulos/pesquisa/md_pesq_documento_consulta_externa.php?9LibXMqGnN7gSpLFOOgUQFziRouBJ5VnVL5b7-UrE5RWSqtE-LSj0koYd3KUyHCzVmyseU6baq85rW3LNDkcCuYfNj96-xh0PBsewwDdGeZsjV3tOkqRq0z73pqNUXy3&_gl=1*3n7i9g*_ga*NjYxOTI0NDgzLjE2OTk1NzQ2NTc.*_ga_7V1B6HEL02*MTczMjU4NzA4Mi4xNy4xLjE3MzI1ODcwODIuNjAuMC4w" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <button>
                        Área do Aluno
                    </button>
                </a>
            </div>
        </StyleStudentSection>
    )
}
export default StudentSection