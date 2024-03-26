import React, {Suspense} from "react";
import "./App.scss";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";

const HomePage = React.lazy(() => import('home/HomePage'))
const DetailsPage = React.lazy(() => import('details/DetailsContent'))
const Seat = React.lazy(() => import('seat/SeatSelectionContent'))

const App = () => {
    const history = useHistory();
    const location = useLocation();
    const movieClicked = movie => {
        console.log(movie);
        history.push(`details/${movie.id}`)
    }
  return (
    <Switch>
      <Route path="/details/:id">
          <Suspense fallback={null}><DetailsPage routing={{history, location}} location={location}></DetailsPage></Suspense>
      </Route>
      <Route path="/book">
          <Suspense fallback={null}><Seat ></Seat></Suspense>
      </Route>
      <Route path="/">
          <Suspense fallback={null}><HomePage movieClicked={movieClicked} routing={{history, location}}></HomePage></Suspense>
      </Route>
    </Switch>
  );
};

export default App;
