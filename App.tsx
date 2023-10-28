import { StatusBar } from 'expo-status-bar';
import { WeatherScreen } from './screen/WeatherScreen';
import { Home } from './screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoadingScreen } from './screen/LoadingScreen';
import { setupStore } from './store/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

const store = setupStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
          <Stack.Screen options={{ headerShown: false }} name="Weather" component={WeatherScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Loading" component={LoadingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


