import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";
import { store } from './src/reduxConfig/store';
import Login from "./src/Config/Login";
import Signup from "./src/Config/Signup";
import StudentNavigation from "./src/Config/StudentNavigation";
import AdminNavigation from "./src/Config/AdminNavigation";
import CompanyNavigation from "./src/Config/CompanyNavigation";
const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}
const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="StudentNavigation" component={StudentNavigation} />
      <Stack.Screen name="AdminNavigation" component={AdminNavigation} />
      <Stack.Screen name="CompanyNavigation" component={CompanyNavigation} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;