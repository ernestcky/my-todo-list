import './App.css';
import TodoList from './components/TodoList';
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import DoneListContainer from './containers/DoneListContainer'
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";
import TagEditPortal from './components/TagEditPortal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{
          color: "white",
          margin: 0
        }}>Todo List</h3>
      </header>
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route path="/tag-edit" component={TagEditPortal}/>
          <Route path="/done" component={DoneListContainer}/>
          <Route exact path="/" component={TodoList}/>
          <Route component={NotFound} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
