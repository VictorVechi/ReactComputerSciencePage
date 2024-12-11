import React, { useState } from "react";
import { StyleSearch } from "./search.styles";
import Field from "../../../common/field/Field";
import Button from "../../../common/button/Button";
import { Note } from "phosphor-react";

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchClick = () => {
        //    implementar request pra api
    };

    return (
        <StyleSearch>
            <h1>Central da Computaria</h1>
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