import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/" component={Home} exact />
      <Route component={() => (<div>404 - Not Found</div>)} />
    </Switch>
   </BrowserRouter>,
  document.getElementById('root')
);
