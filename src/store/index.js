import { configureStore } from '@reduxjs/toolkit';
import scrollReducer from './scroll-slice';
import headerSlice from './header-slice';
import aboutSlice from './aboutMe-slice';
import contactFormSlice from './contactForm-slice';


const store = configureStore({
  reducer: { 
    scroll: scrollReducer.reducer,
    headerState: headerSlice.reducer,
    aboutState: aboutSlice.reducer,
    formState: contactFormSlice.reducer,
   },
});

export default store;