import { Text,Image,StyleSheet } from "react-native";
import styled from "styled-components/native";

const PanelElem = styled.View`
  display: flex;
  width: 60px;
  padding: 16px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.20);
  background: #1f1d47c2;
  margin: 20px 0 10px 12px;
`;

interface IPanelItem{
	date: string,
	temperature: number
}

export const PanelItem = ({date,temperature}:IPanelItem) => {
	return (
		<PanelElem style={{ backgroundColor: (date.toUpperCase() === 'NOW') ? 'rgba(72, 49, 157, 1)' : '#1f1d47c2'}}>
			<Text style={styles.textPanel}>
				{date}
			</Text>
			<Image style={{ width: 32, height: 32 }} source={require('../assets/rain.png')} />
			<Text style={[styles.textPanel, { color: '#40CBD8', marginTop: -16 }]}>30%</Text>
			<Text style={styles.textPanel}>{temperature}</Text>
		</PanelElem>
	)
}

const styles = StyleSheet.create({
	textPanel: {
		fontSize: 15,
		fontWeight: '600',
		color: 'white',
		letterSpacing: -0.5,
	}
});