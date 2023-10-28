import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { View,Text, } from "react-native";
import WindRain from '../assets/Moon cloud mid rain.svg';

export const WeatherElem = () => {
	return (
		<LinearGradient style={styles.weatherElem} colors={['#5936B4', '#362A84']}>
			<WindRain style={styles.ElemImg} />
			<Text style={styles.temperature}>19</Text>
			<View style={styles.ElemInfo}>
				<View>
					<Text style={styles.textRange}>H:24 L:16</Text>
					<Text style={styles.textCity}>Montreal, Canada</Text>
				</View>
				<Text style={styles.textWeather}>Mid Rain</Text>
			</View>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	weatherElem: {
		padding: 20,
		position: 'relative',
		marginTop: 50,
		width: 342,
		height: 184,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 100,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
	},
	ElemImg: {
		position: 'absolute',
		top: -40,
		right: -15,
	},
	ElemInfo: {
		marginTop: 10,
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		display: 'flex',
		flexDirection: 'row',
	},
	temperature: {
		marginTop: -20,
		color: 'white',
		fontSize: 64,
		fontWeight: '400',
		letterSpacing: 0.374,
	},
	textRange: {
		color: 'rgba(235, 235, 245, 0.60)',
		fontSize: 13,
		fontWeight: '400',
		letterSpacing: -0.078,
	},
	textCity: {
		fontSize: 17,
		fontWeight: '400',
		color: 'white',
		letterSpacing: -0.408,
	},
	textWeather: {
		fontWeight: '400',
		fontSize: 13,
		color: 'white',
	}
});