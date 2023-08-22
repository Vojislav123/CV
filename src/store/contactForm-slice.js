import { createSlice } from "@reduxjs/toolkit";


const initialFormState = {
    errors: {},
    formSubmitted:false,
    formData: {
        name: '',
        email: '',
        message: '',
    }
}

const contactFormSlice = createSlice({
	name: 'contactFormSlice',
	initialState: initialFormState,
    reducers: {
        setErrors: (state, action) => {
            state.errors = action.payload;
        },
        clearErrors: (state) => {
            state.errors = {};
        },
        formSubmittedHander(state){
            state.formSubmitted=!state.formSubmitted;
        },
        setFormData: (state, action) => {
            state.formData = action.payload;
        },
        clearFormData: (state) => {
            state.formData = {
                name: '',
                email: '',
                message: '',
            };
        },
    }
});

export const contactFormActions= contactFormSlice.actions;

export default contactFormSlice;