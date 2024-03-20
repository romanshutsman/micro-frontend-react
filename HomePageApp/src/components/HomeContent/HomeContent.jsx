import React, {Suspense, useEffect, useState} from "react";
import QuickBooking from "../QuickBooking/QuickBooking.jsx";
import "./HomeContent.scss";
const MovieCard = React.lazy(() => import('components/MovieCard'))

const dummyItem = [{name:"Dummy Movie"}]

const HomeContent = (props) => {
  const [movies, setMovies] = useState(dummyItem);

  useEffect(async () => {
    const response = await fetch('http://localhost:5555/movies');
    const result = await response.json();
    console.log(result)
  }, []);

  const movieClicked = (item) => {
    if (typeof props.movieClicked === "function") {
      props.movieClicked(item);
    }
  };

  const renderMovieList = () => {
    let items = movies.map((item) => {
      return (
        <div onClick={() => movieClicked(item)} key={item.name}>
          <div>Load the cards Here</div>
          <Suspense fallback={null}>
            <MovieCard></MovieCard>
          </Suspense>
        </div>
      );
    });

    return items;
  };

  return (
    <div className="home-content-container">
      <QuickBooking></QuickBooking>
      <div className="movies-container">
        {renderMovieList()}
      </div>
    </div>
  );
};

export default HomeContent;
