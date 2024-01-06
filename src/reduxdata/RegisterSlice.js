import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : 'reg',
    initialState: {
        value :  {}
    },
    reducers : {
        addPersonalData : (state,action)=>{
            state.value = {...state.value , personal : action.payload}
        },

        addEducationalItem : (state,action)=>{
           var oldData = state.value.education==undefined?[]:state.value.education
           state.value = {...state.value, 
            education : [...oldData,action.payload]}
        },

        deleteEducationalItem : (state,action)=>{
            state.value = {...state.value, 
                education : state.value.education.filter(ob=>ob.id!=action.payload.id)}
        },
        
        addWorkItem : (state,action)=>{},
        deleteWorkItem : (state,action)=>{}
    }
})

export const {addPersonalData, addEducationalItem , deleteEducationalItem , addWorkItem , deleteWorkItem} = slice.actions

export default slice.reducer
