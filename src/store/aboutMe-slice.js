import { createSlice } from '@reduxjs/toolkit';

const initialAboutState = {
	loading: true,
	mainImageLoaded: false,
};

const aboutSlice = createSlice({
	name: 'aboutSlice',
	initialState: initialAboutState,
	reducers: {
		aboutMeHander(state) {
			(state.loading = !state.loading);
			(state.mainImageLoaded = !state.mainImageLoaded);
		},
	},
});

export const aboutMeActions = aboutSlice.actions;

export default aboutSlice;
