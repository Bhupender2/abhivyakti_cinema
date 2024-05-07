import React from "react";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import noResults from "../../assets/no-results.png";
import Img from "../lazyLoadImage/Img";

const ResultsNotFound = () => {
  return (
    <div className="resultsNotFound">
      <ContentWrapper>
        <Img src={noResults} className="image_smaller" />

        <span className="smallText">Results not found!</span>
      </ContentWrapper>
    </div>
  );
};

export default ResultsNotFound;
