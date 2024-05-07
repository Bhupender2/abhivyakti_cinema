import React from "react";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const ResultsNotFound = () => {
    return (
        <div className="pageNotFound">
            <ContentWrapper>
                <span className="bigText">Oops !</span>
                <span className="smallText">Results not found!</span>
            </ContentWrapper>
        </div>
    );
};

export default ResultsNotFound;