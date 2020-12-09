import './App.css';
import TodoList from './components/TodoList';
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import DoneListContainer from './containers/DoneListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Todo List</h3>
      </header>
      <BrowserRouter>
        <ul>
          <li>
            <NavLink to="/">nav link</NavLink>
          </li>
          <li>
            <Redirect to="/done">go to done page</Redirect>
          </li>
          <li>
            <Link to="/">go to list page</Link>
          </li>
          <li>
            <Link to="/done">go to done page</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/done" component={DoneListContainer}/>
          <Route path="/" component={TodoList}/>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
