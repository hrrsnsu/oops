import HomePage from './pages/HomePage';
import LaunchPage from './pages/LaunchPage'
import Onboarding from './pages/Onboarding';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LaunchPage' screenOptions={{headerShown: true}}>
        <Stack.Screen name='LaunchPage' component={LaunchPage} />
        <Stack.Screen name='Onboarding' component={Onboarding} />
        <Stack.Screen name='HomePage' component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}