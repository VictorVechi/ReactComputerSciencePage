import React, { useState } from "react";
import { StyleSearch } from "./search.styles";
import Field from "../../../common/field/Field";
import Button from "../../../common/button/Button";
import { handleSearch } from "./handle-search/handleSearch";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchClick = async () => {
        if (searchTerm.trim() === '') {
            return;
        }

        const result = await handleSearch(searchTerm);
        navigate('/search', { state: result });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearchClick();
        }
    };

    return (
        <StyleSearch>
            <h1>Ciência da Computação</h1>
            <h2>Pesquise por um post aqui: </h2>
            <div className="search-container">
                <Field
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Pesquisa por titulo"
                    className={"input"}
                />
                <Button texto="Pesquisar" onClick={handleSearchClick} />
            </div>
        </StyleSearch>
    );
};

export default Search;