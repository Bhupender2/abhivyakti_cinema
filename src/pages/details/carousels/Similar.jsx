import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`); //jo bhi movie open ki h humne ussi ka similar content apan ko mil jaaegaa

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies"; // title dynamically change hoga movie ya tv shows

    return (
        <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Similar;