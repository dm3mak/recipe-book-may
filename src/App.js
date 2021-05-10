import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import RecipesPage from './pages/RecipesPage'
import Signup from './pages/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipesNavbar from './components/RecipesNavbar'
//App is the main component for our Recipe app
// State:
// activeUser: Either null , if
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //activeUser: null
      activeUser: {
        id: 1,
        name: 'Yaron',
        email: 'skarlinski@gmail.com',
        pwd: '123'
      }
    }
  }
  logout = () => {
    this.setState ({
      activeUser: null
    })
  }
  render() {
    return (
      <div>
        <HashRouter>
          <Route  exact path ={["/", "/recipes"]}>
            <RecipesNavbar 
            activeUser = {this.state.activeUser}
            logout = {this.logout}
            ></RecipesNavbar>
          </Route>
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