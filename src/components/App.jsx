import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home'
import Layout from './Layout'
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import Badges from '../pages/Badges';
import BadgeDetailsContainer from '../pages/BadgesDetailsContainer';
import NotFound from '../components/NotFound';

function App() {
    return (
    <BrowserRouter>
    <Layout>
    <Switch>
        <Route exact path="/home" component={Home}/>
         <Route exact path="/badges" component={Badges}/>
         <Route  exact path="/badges/new" component={BadgeNew}/>
         <Route  exact path="/badges/:badgeId" component={BadgeDetailsContainer}/>
         <Route  exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
         <Route component={NotFound}/>
        </Switch>         
    </Layout>
   
    </BrowserRouter>
    );
}

export default App
