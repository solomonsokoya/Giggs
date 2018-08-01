import { applyMiddleware, compose, createStore} from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import userReducer from '../reducers';

export const history = createBrowserHistory();


const store = createStore(
  connectRouter(history)(userReducer),
  compose(
    applyMiddleware(
      routerMiddleware(history)
    )
  )


)
export default store;
