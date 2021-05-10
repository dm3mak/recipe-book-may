import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import RecipesPage from './pages/RecipesPage'
import Signup from './pages/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipesNavbar from './components/RecipesNavbar'

class App extends React.Component {
  render() {
    return (
      <div>
        <RecipesNavbar></RecipesNavbar>
        <HashRouter>
          <Route  exact path ="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path ="/recipes">
            <RecipesPage></RecipesPage>
          </Route>
          <Route exact path ="/login">
            <Login></Login>
          </Route>
          <Route exact path ="/signup">
            <Signup></Signup>
          </Route>
        </HashRouter>
      </div>
    )
  }
}
export default App;