import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import { Weather } from '../components/Weather';
import { Panel } from '../components/Panel';
import { LoadingScreen } from './LoadingScreen';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchWeather } from '../store/reducers/WeatherSlice';
import { useEffect } from 'react';


const HouseImage = styled.Image`
  width: 100%;
  height: 60%;
  position:absolute;
  bottom:-25px;
`;



export const Home = () => {
	const {isLoading} = useAppSelector(state => state.weatherReducer)

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchWeather());
	}, []);

	if (isLoading) {
		return <LoadingScreen />;
	}

	return (<ImageBackground resizeMode='cover' style={styles.container} source={require('../assets/background.png')}>
		<Weather />
		<HouseImage source={require('../assets/house.png')} />
		<Panel />
		<StatusBar style='auto' />
	</ImageBackground>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
	},
	text: {
		fontSize: 20,
		fontWeight: '600',
		color: 'white',
	},
})