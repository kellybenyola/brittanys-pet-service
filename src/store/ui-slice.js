import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {showNav: false, notification: null, contactInput: ''},
    reducers:{
        showNotification(state, action){
            state.notification = {
                state: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        },
        toggleNav(state){
            state.showNav = !state.showNav;
        },
        resetInput(state){
            state.contactInput = '';
        }
    }
});



export const uiAction = uiSlice.actions;
export default uiSlice;