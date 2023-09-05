

import { createSlice} from "@reduxjs/toolkit";

interface QuoteModalProps {
  isQuoteModalOpen: boolean;
}

const initialState:  QuoteModalProps = {
  isQuoteModalOpen: false,
};

const quoteModalSlice = createSlice({
  name: "toggleQuoteModal",
  initialState,
  reducers: {
    openQuoteModal: (state) => {
      state.isQuoteModalOpen = true;
    },
    closeQuoteModal: (state) => {
      state.isQuoteModalOpen = false;
    },
  },
});

export const { openQuoteModal, closeQuoteModal } = quoteModalSlice.actions;
export default quoteModalSlice.reducer;
