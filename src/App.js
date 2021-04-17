import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';

import './App.css';
import routes from "./routes";

import Pokedex from './containers/pokedex/Pokedex';
import PokedexDetail from "./containers/pokedex-detail/PokedexDetail";

import Menu from './components/menu/Menu';

import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import PokedexAdd from "./containers/pokedex-add/PokedexAdd";

/*
import { createContext, useState } from 'react'
import Card from './components/card/Card';
const [show, setShow] = useState(false)
export const MyContext = createContext({ color: 'red' })
<MyContext.Provider value={{ color: 'red' }}>
      <button onClick={() => {
        setShow(!show)
      }}>Toggle Card</button>
      {<Card show={show} />}
    </MyContext.Provider>
*/

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Router>
          <Route path="/">
            <Menu />
          </Route>
          <Switch>
            <Route path={routes.POKEDEX_NEW}>
              <PokedexAdd></PokedexAdd>
            </Route>
            <Route exact path={routes.POKEDEX}>
              <Pokedex />
            </Route>
            <Route path={routes.POKEDEX_DETAIL}>
              <PokedexDetail />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;