import React from "react";
import { useLocation } from "react-router-dom";
import { StyleSearchResult } from "./main.styles";

const SearchResults = () => {
    const location = useLocation();
    const results = location.state || { results: [] };

    return (
        <StyleSearchResult>
            <h1>Resultados da Pesquisa</h1>
            {results.length > 0 ? (
                results.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <span>{post.tags[0].name}</span>
                    </div>
                ))
            ) : (
                <p>Nenhum resultado encontrado.</p>
            )}
        </StyleSearchResult>
    );
};

export default SearchResults;