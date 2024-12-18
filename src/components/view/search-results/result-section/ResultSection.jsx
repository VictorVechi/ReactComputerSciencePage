import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { StyleResultSection } from "./resultSection.styles";
import CardResult from "../card-result/CardResult";
import { sortResults, orderPostOptions } from "./handle-dropdown/handleDropdown";
import DropdownBtn from "../../../common/dropdown/Dropdown";

const ResultSection = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const results = location.state || { results: [] };
    const [order, setOrder] = useState("oldest")

    const handleOrderChange = (e) => {
        setOrder(e.target.value);
    }

    const sortedResults = sortResults(results, order)

    const handleCardClick = (post) => {
        navigate(`/post/${post.id}`, { state: { post } })
    }

    return (
        <StyleResultSection>
            <h1>Resultados da Pesquisa</h1>
            <div className='order-container'>
                <p>{sortedResults.length} resultados encontrados</p>
                <DropdownBtn
                    label="Ordenar por: "
                    options={orderPostOptions}
                    value={order}
                    onChange={handleOrderChange}
                />
            </div>
            <div className='posts-container'>
                {sortedResults.length > 0 ? (
                    sortedResults.map((post) => (
                        <div key={post.id} className='post-card' onClick={() => handleCardClick(post)}>
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