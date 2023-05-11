import React from "react";
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import MyApp from './MyApp';
import Food from './Food';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={MyApp}>
    {/*<IndexRoute component={MainPage} />*/}
    <Route path="/foods" component={Food} />
    {/*<Route path="/some/otherpage" component={SomeOtherPage} />*/}
  </Route>
);
