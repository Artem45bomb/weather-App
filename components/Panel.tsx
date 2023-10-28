import { Text, StyleSheet, FlatList, Dimensions, ImageBackground, View } from "react-native";
import styled from "styled-components/native";
import { PanelItem } from "./PanelItem";
import Animated,{ useSharedValue,withTiming,Easing, useAnimatedStyle } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Type/RootStackPrams";
import { useAppSelector } from "../hooks/redux";




const NavigationScreen = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 25px 32px 0 32px;
  justify-content:space-between;
`;

const Btn = styled.View`
  	width: 100%;
	padding:0 20px;
	display:flex;
	flex-direction:row;
	justify-content:space-between;
	align-items:flex-end;
`;

const BtnImage = styled.Image`
  width: 50px;
  height: 50px;
  margin-bottom:15px;
`;

const BtnCreate = styled.View`
	background-color: white;
	width:80px;
	height:80px;
	border-radius:40px;
	margin:10px auto 20px auto;
`;

const BtnImageBG = styled.ImageBackground`
	width:100%;
`;

const Linear = styled.TouchableOpacity`
	width: 48px;
	margin: 10px  auto 0 auto;
	height: 10px;
	border-radius: 10px;
	background-color: 'rgba(0, 0, 0, 0.60)';
`;



type authScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const Panel = () => {
	const bottom = useSharedValue<number>(45);
	const navigation = useNavigation<authScreenProp>();
	const windowWidth = Dimensions.get('screen').width;
	const windowHeight = Dimensions.get('screen').height;
	const { weathers } = useAppSelector(state => state.weatherReducer);


	const style = useAnimatedStyle(() => ({
		bottom: bottom.value,
		width: windowWidth,
		height: windowHeight * 0.4,
	}));

	const headerPress = () => {
		if (bottom.value >= 30)
			bottom.value = withTiming(bottom.value - windowHeight * 0.4 + 45, {
				duration: 500,
				easing: Easing.bezier(0.25, 0.1, 0.25, 1)
			});
		else
			bottom.value = withTiming(45, {
				duration: 500,
				easing: Easing.bezier(0.25, 0.1, 0.25, 1)
			});
	}

	return (
		<Animated.View  style={[styles.panelContainer, style]}>
				<Linear onPress={headerPress}></Linear>
			<NavigationScreen >
				<Text style={styles.texNav}>
					Hourly Forecast
				</Text>
				<Text style={styles.texNav} onPress={() => navigation.navigate("Weather")}>
					Weekly Forecast
				</Text>
			</NavigationScreen>
			<View style={{ borderTopColor: '#FFF', borderWidth: 1 }}>
				<FlatList
					horizontal={true}
					data={weathers}
					renderItem={({ item }) => <PanelItem date={item.date} temperature={item.temperature} />}
					keyExtractor={item => item.id}
				/>
				<BtnImageBG resizeMode='cover' source={require('../assets/Rectangle.png')}>
					<Btn>
						<BtnImage source={require('../assets/Hover.png')} />
						<ImageBackground style={styles.bgImg} source={require('../assets/Subtract.png')}>
							<BtnCreate>
								<Text style={{ color: 'rgba(72, 49, 157, 1)', fontSize: 40, fontWeight: '700', textAlign: 'center', marginTop: 10 }}>+</Text>
							</BtnCreate>
						</ImageBackground>
						<BtnImage source={require('../assets/List.png')} />
					</Btn>
				</BtnImageBG>
			</View>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	texNav: {
		fontSize: 18,
		fontWeight: '600',
		letterSpacing: -0.5,
		color: 'rgba(235, 235, 245, 0.60)',
	},
	bgImg: {
		width: 258,
		height: 100,
	},
	panelContainer: {
		backgroundColor: 'rgba(72, 49, 157, 0.6)',
		borderTopLeftRadius: 70,
		borderTopRightRadius: 70,
		position: 'absolute',
		bottom: 30,
		left: 0,
		borderColor: '#FFF',
		borderWidth: 1,
	}
})	