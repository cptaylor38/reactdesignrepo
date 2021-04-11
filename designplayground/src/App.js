import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Foaas from './Pages/Foaas/Foaas';
import Space from './Pages/Space/Space';
import Clones from './Pages/Clones/ClonesHome';
import Wellzal from './Pages/Wellzal/Wellzal';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/space' component={Space} />
          <Route path='/foaas' component={Foaas} />
          <Route path='/wellzal' component={Wellzal} />
          <Route path='/clones' component={Clones} />
          <Route path='*' component={Landing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
