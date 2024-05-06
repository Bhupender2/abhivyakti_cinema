import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // before ? if we pass any dynamic value in a path like /:id it is a params;
import InfiniteScroll from "react-infinite-scroll-component";

import "./style.scss";
import { fetchDataFromApi } from "../../utils/api"; //not using costum hook we are using original one's .
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import noResults from "../../assets/no-results.png";
import Spinner from "../../components/spinner/Spinner";

const SearchResult = () => {
  const [data, setData] = useState(null); //the search data

  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams(); // hook to store the params from URL

  const fetchInitialData = () => {
    setLoading(true); // data has not arrived yet so here we set it true
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setLoading(false); // data has arrived so its false now
      }
    );
  };
console.log(data?.results?.length)
  useEffect(() => {
    fetchInitialData(); // it will be executed after the component is rendered
  }, [query]);

  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper>
          {data?.results?.length > 0 ? (
            <div>h</div>
          ) : (
            <span className="resultNotFound">Sorry, Results not found</span>
          )}{" "}
        </ContentWrapper>
      )}
    </div>
  );
};

export default SearchResult;
