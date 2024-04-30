import React from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

const Trending = () => {
  const onTabChange = (tab) => {};
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["day", "week"]} onTabChange={onTabChange} />
        {/*static nahi hoga dynamic hoga yeh jaise yeh h "month* daalenge toh vo bhi aana chahiye WE WILL MAKE THIS REUSABLE and iska control (onChange) vo iske parent component k pass rahega*/}
      </ContentWrapper>
    </div>
  );
};

export default Trending;
