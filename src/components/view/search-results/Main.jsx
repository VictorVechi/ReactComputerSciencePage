import React from "react";
import { useLocation } from "react-router-dom";
import { StyleSearchResult } from "./main.styles";
import Card from "../../common/card/Card"

const SearchResults = () => {
    const location = useLocation();
    const results = location.state || { results: [] };

    return (
        <StyleSearchResult>
            <h1>Resultados da Pesquisa</h1>
            {results.length > 0 ? (
                results.map((post) => ( 
                    <div key={post.id} className='post-card'>
                        <Card title={post.title} content={post.content} tag={post.tags[0].name} />
                    </div>
                ))
            ) : (
                <p>Nenhum resultado encontrado.</p>
            )}
        </StyleSearchResult>
    );
};

export default SearchResults;