/*
{
		id: '1',
		date: '12AM',
		img: '',
		temperature: '19',
	},
*/

import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export interface WeatherType {
	weathers: {
		id: string,
		date: string,
		img: '',
		temperature: number
	}[],
	isLoading: boolean
}


const initialState: WeatherType = {
	weathers: [
		{
			id: '1',
			date: '12AM',
			img: '',
			temperature: 19,
		},
		{
			id: '2',
			date: 'NOW',
			img: '',
			temperature: 23,
		},
		{
			id: '3',
			date: '2AM',
			img: '',
			temperature: 8,
		},
		{
			id: '4',
			date: '3AM',
			img: '',
			temperature: 9,
		},
		{
			id: '5',
			date: '4AM',
			img: '',
			temperature: 13,
		},
		{
			id: '6',
			date: '4AM',
			img: '',
			temperature: 43,
		},
	],
	isLoading: false
};

export const fetchWeather = createAsyncThunk(
	'weather/fetchWeather',
	async () => {
		const response = await axios.get('https://6538cc17a543859d1bb1ef16.mockapi.io/api/posts/Books');
		return response.data;
	}
);

export const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchWeather.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchWeather.fulfilled, (state, action) => {
				state.weathers = action.payload;
				state.isLoading = false;
			})
			.addCase(fetchWeather.rejected, (state) => {
				state.isLoading = false;
			});
	}
});

export default weatherSlice.reducer;