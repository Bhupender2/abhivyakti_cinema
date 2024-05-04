import React from "react";
import "./style.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import DetailsBanner from "./detailsBanner/DetailsBanner";

const Details = () => {
  // const { mediaType, id } = useParams(); // we gave the params name mediaType and Id in app.js react router
  // const { data, loading } = useFetch(`/${mediaType}/${id}`);

  return (
    <div>
      <DetailsBanner />
    </div>
  );
};

export default Details;
