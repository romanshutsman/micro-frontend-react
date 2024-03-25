import React, {Suspense} from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";

const HomePage = React.lazy(() => import('home/HomePage'))
const DetailsPage = React.lazy(() => import('details/DetailsContent'))
const Seat = React.lazy(() => import('seat/SeatSelectionContent'))

const App = () => {
  return (
    <Switch>
      <Route path="/details">
          <Suspense fallback={null}><DetailsPage></DetailsPage></Suspense>
      </Route>
      <Route path="/book">
          <Suspense fallback={null}><Seat></Seat></Suspense>
      </Route>
      <Route path="/">
          <Suspense fallback={null}><HomePage></HomePage></Suspense>
      </Route>
    </Switch>
  );
};

export default App;
