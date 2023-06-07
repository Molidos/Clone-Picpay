import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';

import HiddenProvider from './src/contexts/HiddenContext';

export default function App() {
  return (
    <NavigationContainer>
      <HiddenProvider>
        <TabNavigator/>
      </HiddenProvider>
    </NavigationContainer>
  );
}