import React, { useState } from "react";
import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/popular`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
        {/*static nahi hoga dynamic hoga yeh jaise yeh h "month* daalenge toh vo bhi aana chahiye WE WILL MAKE THIS REUSABLE and iska control (onChange) vo iske parent component k pass rahega*/}
      </ContentWrapper>

      <Carousel  data={data?.results} loading={loading} endpoint={endpoint}/> 
    </div>
  );
};

export default Popular;

// whenever you are sending the api data (properties)as props always use optional chaning  