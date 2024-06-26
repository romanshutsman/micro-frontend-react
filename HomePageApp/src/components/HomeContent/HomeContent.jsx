import React, {Suspense, useEffect, useState} from "react";
import QuickBooking from "../QuickBooking/QuickBooking.jsx";
import "./HomeContent.scss";
const MovieCard = React.lazy(() => import('components/MovieCard'))
import RoutingProvider from './../../utils/RoutingProvider';

const dummyItem = [{name:"Dummy Movie"}]

const HomeContent = (props) => {
  const [movies, setMovies] = useState(dummyItem);

  useEffect(async () => {
    const response = await fetch('http://localhost:5555/movies');
    const result = await response.json();
    console.log(result)
  setMovies(result);
  }, []);

  const movieClicked = (item) => {
    if (typeof props.movieClicked === "function") {
      props.movieClicked(item);
    }
    console.log(item)
  };

  const renderMovieList = () => {
    let items = movies.map((item) => {
      return (
        <div onClick={() => movieClicked(item)} key={item.name}>
            <MovieCard title={item.name} imageUrl={item.imageUrl}></MovieCard>
        </div>
      );
    });

    return items;
  };
  return (
    <div className="home-content-container">
      <RoutingProvider.Provider value={props.routing}>
        <QuickBooking></QuickBooking>
        <div className="movies-container">
            <Suspense fallback={null}>{renderMovieList()}</Suspense>
        </div>
      </RoutingProvider.Provider>
    </div>
  );
};

export default HomeContent;
