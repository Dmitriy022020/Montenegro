import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home.jsx';
import Cities from './Cities.jsx';
import Hotels from './Hotels.jsx';
import Photos from './Photos.jsx';
import Kotor from './cities/Kotor.jsx';
import Budva from './cities/Budva.jsx';
import Tivat from './cities/Tivat.jsx';
import Bar from './cities/Bar.jsx';
import Cetine from './cities/Cetine.jsx';
import Podgorica from './cities/Podgorica.jsx';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/citiesList' component={CitiesList} />
      <Route path='/hotels' component={Hotels} />
      <Route path='/photos' component={Photos} />
    </Switch>
  </main>
)

const CitiesList = () => (
  <Switch>
    <Route exact path='/citiesList' component={Cities} />
    <Route path='/citiesList/kotor' component={Kotor} />
    <Route path='/citiesList/tivat' component={Tivat} />
    <Route path='/citiesList/budva' component={Budva} />
    <Route path='/citiesList/bar' component={Bar} />
    <Route path='/citiesList/cetine' component={Cetine} />
    <Route path='/citiesList/podgorica' component={Podgorica} />
  </Switch>

)
export default Main;
