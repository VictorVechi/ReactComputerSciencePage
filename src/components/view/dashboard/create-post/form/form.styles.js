import styled from "styled-components";

export const StyledCreatePostForm = styled.div`

    form {
        display: flex;
        flex-direction: column;

        label {
            margin-bottom: 0.5rem;
            font-weight: bold;
        }

        input, textarea, select {
            margin-bottom: 1rem;
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 1rem;
        }

        button {
            padding: 0.75rem;
            border: none;
            border-radius: 4px;
            background-color: #007bff;
            color: #fff;
            font-size: 1rem;
            cursor: pointer;

            &:hover {
                background-color: #0056b3;
            }
        }
    }
`