import React, { useState } from "react";
import { StyleSearch } from "./search.styles";
import Field from "../../../common/field/Field";
import Button from "../../../common/button/Button";
import { handleSearch } from "./handle-search/handleSearch";
import { useNavigate } from "react-router-dom";

const Search = ({ onSearch }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchClick = async () => {
        const result = await handleSearch(searchTerm);
        navigate('/search', { state: result });
    };

    return (
        <StyleSearch>
            <h1>Central da Computação</h1>
            <h2>Pesquise por um post aqui: </h2>
            <div className="search-container">
                <Field
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Pesquisa por titulo"
                />
                <Button texto="Pesquisar" onClick={handleSearchClick} />
            </div>
        </StyleSearch>
    );
};

export default Search;