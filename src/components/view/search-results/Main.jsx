import React from "react";
import { useLocation } from "react-router-dom";
import { StyleSearchResult } from "./main.styles";
import ResultSection from "./result-section/ResultSection";

const MainSearchResult = () => {
    const location = useLocation();
    const results = location.state || { results: [] };

    return (
        <StyleSearchResult>
            <ResultSection />
        </StyleSearchResult>
    );
};

export default MainSearchResult;