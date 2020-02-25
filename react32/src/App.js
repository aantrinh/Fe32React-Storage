import React from 'react';
import './App.css';
// import Baitap1 from './components/baitap1';
import BaiTap2 from './components/baitap2';
import RenderingElements from './rendering-element';
import HandlingEvent from './handling-event';
import ExampleHandlingEvent from './handling-event/example.-handling-event';
import State from './state';
import BaiTapCar from './handling-event/baitap-car';
import ListKeys from './list-keys';
import Props from './components/props/index';
import LiftingStateUp from './lifting-state-up/index';
import LiftingStateUpCart from './lifting-state-up-cart/index';
import DemoProps from './lifting-state-up-cart/demo';
import Home from './user-managerment/Home';
import HomeRedux from './user-managerment-redux/Home';
import LifeCycle from './lifecycle/index';
import FormValidation from './formValidation/form_validation';


function App() {
  return (
    <div>
      {/* <Baitap1 /> */}
      {/* <BaiTap2 /> */}
      <hr />
      {/* < RenderingElements />
      <HandlingEvent />
      <ExampleHandlingEvent/>
      <br/>
      <hr/>
      <State />
      <hr/>
      <BaiTapCar />
      <hr/>
      <ListKeys />
      <hr/>
      <Props />
      <hr/>
      <LiftingStateUp />
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <LiftingStateUpCart />
      <hr/>
      <DemoProps fullName="Hoai ANAN" />
      <hr/> */}
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      < Home />
      <hr/>
      <HomeRedux />

      <LifeCycle />
      <hr/>
      <hr/>
      <FormValidation />

    </div>
  );
}

export default App;
