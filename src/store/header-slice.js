import { createSlice } from "@reduxjs/toolkit";

import logo from '../images/logo.png';
import logoOnHover from "../images/logoOnHover.png";

const initialHeaderState = {
	useLogo: logo,
	isTransitionActive: false,
};


const headerSlice= createSlice({
    name: 'headerSlice',
    initialState:initialHeaderState,
    reducers:{
        otherLogo(state){
            state.useLogo=logoOnHover;
        },
        mainLogo(state){
            state.useLogo=logo;
        },
        transitionHandler(state){
            state.isTransitionActive=!state.isTransitionActive;
        }
    }

})

export const headerActions= headerSlice.actions;

export default headerSlice; 

