/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  Provider,
} from 'react-redux';
import Base from './container/BaseContainer';
import HomePage from './container/HomepageContainer';
import ItemPage from './container/ItemPageContainer';
import store from './store/store';

const {
  browserHistory,
  IndexRoute,
  Route,
  Router,
} = require('react-router');

type Props = {||};


class App extends React.Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Base}>
            <IndexRoute component={HomePage} />
            <Route path="item" component={ItemPage} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

const dom = document.getElementById('App');
if (dom === null) {
  // Error
  console.error('dom does not exist');
} else {
  ReactDOM.render(<App />, dom);
}
