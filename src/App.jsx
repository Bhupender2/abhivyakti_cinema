import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

import { fetchDataFromApi } from "./utils/api";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  const dispactch = useDispatch();

  // to use the data from the redux store we use useSelector
  const { url } = useSelector((state) => state.home); // useSelector basically returns the home(homeSlice) object from the store

  console.log(url);
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      //api fetch ho rahi h uska data apan dispatch karwa rahe h redux store mein baadmein jaake usse useSelector ki help se apne desired component mein use karahe h
      console.log(res); // yahan kaafi saara data aagya h images se related uss particular hum apne kaam ka data "url" object mein daal denge or uss url ko action mein paas kardenge

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispactch(getApiConfiguration(url)); // now we access these images on heroBanner section (as a background image which will be change on every refresh)
    });
  };
  const genresCall = async () => {
    let promises = [];
    let endPonts = ["tv", "movie"];
    let allGenres = {};

    endPonts.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    // console.log(promises);  ---its an array of objects and each object contain three propeties like prototype , promiseState , promiseResults and promiseResults is an object which contains two property first genres(array of objects) and prototype (an object).
    const data = await Promise.all(promises);
    console.log(data);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item)); //dynamically accessing the property here using "[]" brackets here and is id ko key bnake pura item pass kardiya isko {id:{},id:{},id:{}....} like this
    });
    console.log(allGenres);
    dispactch(getGenres(allGenres)); // dispatching the new action so that we can store the data in the redux centralised store
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} /> ?
        {/* media type is like is it a movie or a tv show*/}
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// with the help of usedispatch and use selector we can store the data coming from an API into a store and with the help of actions , we can  dispactch the actions and store the data in the global reux store
