import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Timer } from "../components/pages/global/Timer";

interface Timer_Type{
    value:number;
    isStart:boolean
}

const initialState: Timer_Type ={
    value: 10,
    isStart: true,
}

export const timerSlice = createSlice({
    name:'timer',
    initialState,
    reducers: {
        stopCountdown: (state:any ,action: PayloadAction)  => {
            // state.value =  action.payload + state.value;
            state.isStart = false;
        }
    }
})

export const {stopCountdown} = timerSlice.actions;
export default timerSlice.reducer;