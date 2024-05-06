import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // before ? if we pass any dynamic value in a path like /:id it is a params;
import InfiniteScroll from "react-infinite-scroll-component";

import "./style.scss";
import { fetchDataFromApi } from "../../utils/api"; //not using costum hook we are using original one's .
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import noResults from "../../assets/no-results.png";
import Spinner from "../../components/spinner/Spinner";
import MovieCard from "../../components/movieCard/MovieCard";

const SearchResult = () => {
  const [data, setData] = useState(null); //the search data and we need to update the data for the infinite scroll beacause on api call it will show only 20 movies

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

  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res?.results], //updating the data by adding more data into previous ones
          });
        } else {
          setData(res); //if null h toh normally hi data pass kardo
        }
        setPageNum((prev) => prev + 1); // pehle page 1 ka data mila fetchInitialData se milega phir page 2 ka data fetchNextPage se milega or phir hum uska page increase kardenge 3 ho jaaega ese kark badhta jaaega badhta jaaegaa..
      }
    );
  };

  console.log(data?.results?.length);
  useEffect(() => {
    setPageNum(1); // jab bhi query change hogi toh page num phirsecast 1 kardo coz jab chnage karahe h query toh vo ussi page se dikha raha tha jahan pe pehle chora tha for ex 15 toh query change pe results hi nahi aarahe the
    fetchInitialData(); // it will be executed after the component is rendered
  }, [query]);

  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle">
                {`${data?.total_results} search ${
                  data?.total_results > 1 ? "results" : "result"
                } of ${query}`}
              </div>
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={fetchNextPageData} //jaise hi neeche aaega isko call karega vo
                hasMore={pageNum <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.results?.map((item, index) => {
                  if (item.media_Type === "person") return;
                  return (
                    <MovieCard key={item.id} data={item} fromSearch={true} /> //giving key item.id instead of item
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <div className="resultNotFound"> <span className="modification_letter">Oops !</span> Results not found</div>
          )}
        </ContentWrapper>
      )}
    </div>
  );
};

export default SearchResult;
