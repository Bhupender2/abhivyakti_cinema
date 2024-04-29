import React, { useState, useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; // to show the data store in redux store we use useSelector hook
import useFetch from "../../../hooks/useFetch";

const HeroBanner = () => {
  // on refreshing we call the api and set the background image on every refresh so we need a state(state mein jaake save hojaati h )
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home); //we will get homeSlice object
  const { data, loading } = useFetch("/movie/upcoming");
  useEffect(() => {
    // by adding url.backdrop we are getting the full image http path that we want
    const bg =
      url.backdrop + 
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]); // we'll use optional chaining taaki hmaari application break na ho jab tak optional chaining h aage ka code execute nahi hoga agar vo undefined hoga wahi se value return karlega

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      // only on enter we have to run the search query not like ki every key pe searchQuery run karahe h
      navigate(`/search/${query}`); // searchResults page pe jaana h apne ko
    }
  };
  return (
    <div className="heroBanner">
    <div className="backdrop-img">
      
    </div>
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies , Tv shows and people to discover. Explore now
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
