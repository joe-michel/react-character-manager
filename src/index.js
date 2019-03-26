import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import Main from './Main'
import Character from './Character'
import Edit from './Edit'
import Create from './Create'


// const routing = (
//   <HashRouter basename={process.env.PUBLIC_URL}>
//     <div>
//       <Route path='/' component={Main} />
//       <Route exact path={process.env.PUBLIC_URL + '/Character/:id'} component={Character} />
//       <Route exact path={process.env.PUBLIC_URL + '/Edit/:id'} component={Edit} />
//       <Route exact path={process.env.PUBLIC_URL +'/Create'} component={Create} />
//     </div>
//   </HashRouter>
// )

ReactDOM.render(<HashRouter>
  <Main />
</HashRouter>, document.getElementById('root'));