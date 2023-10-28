import { Text,View,StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const WeatherContainer = styled.View`
    width: 140px;
    margin: 0 auto;
    margin-top: 80px;
`;

const City = styled.Text`
  text-align: center;
  color: white;
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.374px;
`;

const Temperature = styled.Text`
color: #FFF;
text-align: center;
font-size: 96px;
font-weight: 200;
letter-spacing: 0.374px;
`;

const WeatherText = styled.Text`
color:  rgba(235, 235, 245, 0.60);
text-align: center;
font-size: 20px;
font-weight: 600;
letter-spacing: 0.38px;
`;

export const Weather = () => {
	return (
		<WeatherContainer >
			<City>
				Montreal
			</City>
			<Temperature>
				19
			</Temperature>
			<WeatherText>
				Mostly Clear
			</WeatherText>
			<View style={{
				display: 'flex',
				padding: 10,
				flexDirection: 'row',
				justifyContent: 'space-between',
			}}>
				<Text style={styles.text}>
					H:24
				</Text>
				<Text style={styles.text}>
					L:18
				</Text>
			</View>
		</WeatherContainer>
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
	texNav: {
		fontSize: 18,
		fontWeight: '600',
		letterSpacing: -0.5,
		color: 'rgba(235, 235, 245, 0.60)',
	}
})