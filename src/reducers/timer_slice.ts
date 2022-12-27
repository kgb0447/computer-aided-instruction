import { createSlice } from "@reduxjs/toolkit";

interface Timer_Type{
    value:any,
    isStart:boolean
}

const initialState: Timer_Type ={
    value: 10, 
    isStart: true
    
}

export const timerSlice = createSlice({
    name:'timer',
    initialState,
    reducers: {
        startCountdown: (state):any=> {
            if(state.isStart){
                state.value =  state.value - 1
            }; 

        },
        stopCountDown: (state)  => {
            state.value = state.value + 10
            
        },
        resetCountDown: (state) => {
            state.value = initialState.value
        }
    }
})

    export const {startCountdown,stopCountDown,resetCountDown} = timerSlice.actions
    export default timerSlice.reducer