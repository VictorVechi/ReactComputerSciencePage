import styled from "styled-components";

export const StyleMain = styled.main`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;


    .student-area-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 65vh; /* Ocupa a altura total da viewport */
        background-image: url('/backgroundThreeWizard.png'); /* Caminho relativo à pasta public */
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed; /* Parallax effect */
        padding: 0 20px;
        color: white;
        width: 100%;
  }

    .content {
        width: 80%;
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
  }

    .text-second-section {
        flex: 1;
        font-size: 1.2em;
        line-height: 1.5;
        max-width: 600px;
  }

    .right-button button {
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        background-color: #ee544f;
}


    @media (max-width: 768px) {
        .content {
            flex-direction: column;
            align-items: center;
    }

  }
`;