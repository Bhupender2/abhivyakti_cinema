import React from "react";
import "./style.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";

const Details = () => {
  const { mediaType, id } = useParams(); // we gave the params name mediaType and Id in app.js react router
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`); // all the videos related to that particular movie or tv shows will be returned from here
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  ); // dusri api call karwani padegi coz same api k andar credits actor ka data nahi h (endpoint change kark hum ye cheez achieve karenge)
  console.log(data);
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />{" "}
      {/*home details banner mein bass ek pehli video hi pass karni h trailor ki*/}
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  ); 
};

export default Details;
