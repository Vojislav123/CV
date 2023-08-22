import { createSlice } from '@reduxjs/toolkit';

const initialScrollState = {
	showButton: false,
};

const scrollSlice = createSlice({
	name: 'scrollToTop',
	initialState: initialScrollState,
	reducers: {
		showButtonHandler(state) {
			state.showButton = true;
		},
        hideButtonHandler(state){
            state.showButton=false;
        }
	},
});

export const scrollActions = scrollSlice.actions;

export default scrollSlice;