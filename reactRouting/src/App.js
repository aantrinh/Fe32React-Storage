import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/home/about';
import Listmovie from './pages/home/list-movie';
import PageNotFound from './pages/home/page-not-fount';
import { routesHome, routesAdmin } from './routes';
import HomeTemplate from './templates/hometemplate';
import AdminTemplate from './templates/admintemplate';
import Admin from './pages/admin/admin';

const showMenuHome = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      );
    });
  }
};

const showMenuAdmin = (routes) =>{
  if(routes && routes.length>0){
    return routes.map((item, index)=>{
      return (
        <AdminTemplate 
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      );
    });
  }
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {showMenuHome(routesHome)}
          {showMenuAdmin(routesAdmin)}
          <Route path='/admin' component={Admin} />

          {/* <Route path="/" exact component={Home} />
          {/* thuoc tinh exact chi danh rieng cho Home khi dung 1 dau / */}
          {/* <Route path="/about" component={About} />
          <Route path="/list-moive" component={Listmovie} /> */}
          <Route path="" component={PageNotFound} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
