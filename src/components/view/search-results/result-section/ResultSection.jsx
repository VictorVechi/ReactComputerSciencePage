import React from "react";
import { useLocation } from "react-router-dom";
import { StyleResultSection } from "./resultSection.styles";
import CardResult from "../card-result/CardResult";

const ResultSection = () => {
    const location = useLocation();
    const results = location.state || { results: [] };

    return (
        <StyleResultSection>
            <h1>Resultados da Pesquisa</h1>
            <div className='posts-container'>
                {results.length > 0 ? (
                    results.map((post) => (
                        <div key={post.id} className='post-card'>
                            <CardResult title={post.title} content={post.content} tag={post.tags[0].name} />
                        </div>
                    ))
                ) : (
                    <p>Nenhum resultado encontrado.</p>
                )}
            </div>
        </StyleResultSection>
    );
};

export default ResultSection;