import Home from './components/Home';
import ListMedoc from './components/ListMedoc';
import Admin from './components/Admin';
import Ajout from './components/Ajout'
import Vente from './components/Vente'
import Login from './components/LogIn'
import {
    Switch,
    Route
  } from "react-router-dom";

function App(props) {
    return (
        <div>

            <Switch>
                
                <Route path='/listMedicament'>
                    <ListMedoc />
                </Route>

                <Route path='/ajout'>
                    <Ajout />
                </Route>

                <Route path='/pointDeVente'>
                    <Vente />
                </Route>

                <Route path='/admin'>
                    <Admin />
                </Route>

                <Route path='/login'>
                    <Login />
                </Route>

                <Route path='/'>
                    <Home />
                </Route>

            </Switch>

        </div>
    )
}

export default App