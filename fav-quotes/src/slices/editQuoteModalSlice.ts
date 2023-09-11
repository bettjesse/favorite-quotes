import { createSlice } from "@reduxjs/toolkit";


type EditQuoteModal = {
    isEditQuoteModalOpen :boolean
}

const initialState: EditQuoteModal ={
    isEditQuoteModalOpen:false
}
  const editQuoteModalSlice = createSlice({
    name: " toggleEditQuoteModal",
    initialState,
   reducers :{
    openEditQuoteModal: (state)=>{
        state.isEditQuoteModalOpen= true
    },
    closeEditQuoteModal: (state)=>{
        state.isEditQuoteModalOpen= false
    }
   }


})
export const {openEditQuoteModal,closeEditQuoteModal} = editQuoteModalSlice.actions
export default editQuoteModalSlice.reducer
