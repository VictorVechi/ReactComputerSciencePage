import React from "react";
import { StyleStudentSection } from "./studentSection.styles";
import "../../../../translations/pt-br"
import { translation } from "../../../../translations/pt-br";
import { Student } from "phosphor-react";


const StudentSection = () => {
    return (
        <StyleStudentSection>
            <div className='content'>
                <div className='text-second-section'>
                    <p>
                    {translation.studentSection.main.description}
                    </p>
                </div>
            </div>
            <div className='right-button'>
                <a href="https://sei.ifpr.edu.br/sei/modulos/pesquisa/md_pesq_documento_consulta_externa.php?9LibXMqGnN7gSpLFOOgUQFziRouBJ5VnVL5b7-UrE5RWSqtE-LSj0koYd3KUyHCzVmyseU6baq85rW3LNDkcCuYfNj96-xh0PBsewwDdGeZsjV3tOkqRq0z73pqNUXy3&_gl=1*3n7i9g*_ga*NjYxOTI0NDgzLjE2OTk1NzQ2NTc.*_ga_7V1B6HEL02*MTczMjU4NzA4Mi4xNy4xLjE3MzI1ODcwODIuNjAuMC4w" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <button>
                        {translation.studentSection.button.text}
                        <Student size={32} weight="light" />
                    </button>
                </a>
            </div>
        </StyleStudentSection>
    )
}
export default StudentSection