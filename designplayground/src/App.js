import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Fashion from './Pages/Fashion/Fashion';
import Foaas from './Pages/Foaas/Foaas';
import Space from './Pages/Space/Space';
import Clones from './Pages/Clones/ClonesHome';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/space' component={Space} />
          <Route path='/fashion' component={Fashion} />
          <Route path='/foaas' component={Foaas} />
          <Route path='/clones' component={Clones} />
          <Route path='*' component={Landing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
