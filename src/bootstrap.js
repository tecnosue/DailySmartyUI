import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import Home from './components/home';

function main() {
  ReactDOM.render(
    <Provider store={createStoreeWithMiddleware(reducers)}>
      <BrowerRouter>
        <Switch>
          <Route path='/' component={Home}/>
          <Route path='/results' componet={Home}/>
        </Switch>
      </BrowerRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);