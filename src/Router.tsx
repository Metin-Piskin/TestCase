import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './Redux/ReduxStore';

import OnePage from './Pages/OnePage';
import TwoPage from './Pages/TwoPage';

const Stack = createNativeStackNavigator();

export type RouterProps = {
  OnePage: undefined;
  TwoPage: undefined;
};

const Router = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="OnePage" component={OnePage} />
          <Stack.Screen name="TwoPage" component={TwoPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Router;
