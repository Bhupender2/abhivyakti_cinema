import React, { useState } from "react";
import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
        {/*static nahi hoga dynamic hoga yeh jaise yeh h "month* daalenge toh vo bhi aana chahiye WE WILL MAKE THIS REUSABLE and iska control (onChange) vo iske parent component k pass rahega*/}
      </ContentWrapper>

      <Carousel  data={data?.results} loading={loading}/> 
    </div>
  );
};

export default Trending;

// whenever you are sending the api data (properties)as props always use optional chaning  