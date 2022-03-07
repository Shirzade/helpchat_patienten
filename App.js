import React from "react";

// screens
import Splash from "./src/screens/ScreenSplash/splash";
import SelectMethod from "./src/screens/ScreenSelectMethod/selectMethod";
import LoginUsername from "./src/screens/ScreenLoginUsername/LoginUsername";
import Setting from "./src/screens/ScreenSetting/Setting";
import User from "./src/screens/ScreenUser/User";
import Home from "./src/screens/ScreenHome/Home";
import ServiceDetailes from "./src/screens/ScreenServiceDetailse/ServiceDetailes";
import SubServiceList from "./src/screens/ScreenSubService/SubServiceList";
import SubServiceDetailes from "./src/screens/ScreenSubServiceDetailse/SubServiceDetailes";
import Profile from "./src/screens/ScreenProfile/profile";
import Langueges from "./src/screens/ScreenLanguege/languege";
import QRScanner from "./src/screens/ScreenQRScanner/QRScanner";

import { RootSiblingParent } from "react-native-root-siblings";

import { Router, Scene, Stack } from "react-native-router-flux";
import store from "./src/redux/store";
import { connect, Provider } from "react-redux";

export default class App extends React.Component {
  constructor(properties) {
    super(properties);
  }

  render() {
    const RouterWithRedux = connect()(Router);
    return (
      <RootSiblingParent>
        <Provider store={store}>
          <RouterWithRedux>
            <Stack hideNavBar>
              <Scene key="splash" component={Splash} initial />
              <Scene key="selectMethod" component={SelectMethod} />
              <Scene key="loginUsername" component={LoginUsername} />
              <Scene key="setting" component={Setting} />
              <Scene key="user" component={User} />
              <Scene key="home" component={Home} />
              <Scene key="serviceDetailes" component={ServiceDetailes} />
              <Scene key="subServiceList" component={SubServiceList} />
              <Scene key="subServiceDetailes" component={SubServiceDetailes} />
              <Scene key="profile" component={Profile} />
              <Scene key="langueges" component={Langueges} />
              <Scene key="QRScanner" component={QRScanner} />
            </Stack>
          </RouterWithRedux>
        </Provider>
      </RootSiblingParent>
    );
  }
}
