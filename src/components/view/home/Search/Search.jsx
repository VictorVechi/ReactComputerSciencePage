import React, { useState } from "react";
import { StyleSearch } from "./search.styles";
import Field from "../../../common/field/Field";
import Button from "../../../common/button/Button";

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
            <h1>Search</h1>
            <Field
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Pesquisa por titulo"
            />
            <Button texto="Pesquisar" onClick={handleSearchClick} />
        </StyleSearch>
    );
};

export default Search;