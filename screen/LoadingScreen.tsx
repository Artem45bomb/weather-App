
import Sun from '../assets/Sun cloud angled rain.svg';
import Rain from '../assets/Moon cloud mid rain.svg';
import {View,Text, Button, Dimensions,StyleSheet, ActivityIndicator} from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';


const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const Loading = styled.ActivityIndicator`
	margin-top:120px;
	margin-left:  -90px;

`;

const Container = styled.View`
	display:"flex";
	flex-direction: row;
	column-gap: 100;
`;

export const LoadingScreen = () => {
	const width = useSharedValue(100);


	const style = useAnimatedStyle(() => ({
		width: screenWidth,
		height: screenHeight,
	}));

	return (
		<LinearGradient
			start={{ x: 0, y: 0.7 }}
			end={{ y: 0.30, x: 0 }}
			colors={['#b14cbea2','#8460f0f3']}
			style={styles.background}
		>
			<Sun style={styles.sun} />
			<Loading size={"large"}/>
		</LinearGradient>

	);
}


const styles = StyleSheet.create({
	background: {
		paddingTop: 50,
		display: 'flex',
		flex: 1,
		flexDirection: 'row',
	},
	sun: {
		marginTop: screenHeight * 0.3,
		marginLeft: screenWidth * 0.5 - 150 / 2,
	}
});