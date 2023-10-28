
import { StyleSheet, View, Text} from 'react-native';
import styled from 'styled-components/native';
import Back from '../assets/chevron.left.svg';
import { LinearGradient } from 'expo-linear-gradient';
import Elem from '../assets/Right Title.svg';
import Item from '../assets/magnifyingglass.svg';
import { useState } from 'react';
import { WeatherElem } from '../components/WeatherElem';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Type/RootStackPrams";

const ret = 'e';

const Position = styled.View`
  display: 'flex';  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.TextInput`
  margin: 0 20px;
  padding:5px 4px; 
  font-size:20px;
  border-radius: 10px;
  color: rgba(235, 235, 245, 0.60);
`;

type authScreenProp = StackNavigationProp<RootStackParamList, 'Weather'>;

export const WeatherScreen =() =>  {
	const [value, setValue] = useState<string>('');
	const navigation = useNavigation<authScreenProp>();

	return (
		<LinearGradient start={{ x: 0, y: 0.95 }} end={{ x: 0, y: 0.16 }} colors={['#48319df5', '#1c1b33fb']} style={styles.container}>
			<Position>
				<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
					<Back onPress={() => navigation.navigate('Home')}/>
					<Text style={styles.text}>Weather</Text>
				</View>
				<Elem />
			</Position>
			<LinearGradient
				colors={['#1F1D47', 'rgba(28, 27, 51, 0.7)']}
				start={[1, 0]}
				end={[1, 1]}
				style={{
					borderRadius: 10,
					marginTop: 30,
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
				<Item style={
					{
						marginLeft: 10,
					}
				} />
				<Input
					value={value}
					onChangeText={setValue}
					placeholder=' Search for a city or airport'
					placeholderTextColor={"rgba(235, 235, 245, 0.60)"}
				/>
			</LinearGradient>
			<WeatherElem/>
		</LinearGradient>
	);
}


const styles = StyleSheet.create({
	container: {
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 40,
		flex: 1,
		height: '100%',
	},
	text: {
		marginLeft: 9,
		color: 'white',
		fontSize: 28,
		fontWeight: '400',
		letterSpacing: 0.364,
	},
});