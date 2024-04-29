import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

import { fetchDataFromApi } from "./utils/api";
function App() {
  const dispactch = useDispatch();

  // to use the data from the redux store we use useSelector
  const { url } = useSelector((state) => state.home); // useSelector basically returns the home(homeSlice) object from the store

  console.log(url)
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispactch(getApiConfiguration(res));
    });
  };
  return <div className="App">APP{url?.total_pages}</div>;
}

export default App;

// with the help of usedispatch and use selector we can store the data coming from an API into a store and with the help of actions , we can  dispactch the actions and store the data in the global reux store
