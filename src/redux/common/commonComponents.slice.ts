import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type MessageModalState = {
  show: boolean;
  title?: string;
  message?: string;
};

export type commonComponentsState = {
  showSpinner: boolean;
  errorModal: MessageModalState;
  successModal: MessageModalState;
};

const initialState: commonComponentsState = {
  showSpinner: false,
  successModal: {
    show: false,
    title: '',
    message: '',
  },
  errorModal: {
    show: false,
    title: '',
    message: '',
  },
};

const commonComponents = createSlice({
  name: 'commonComponents',
  initialState,
  reducers: {
    setShowSpinner: (state, action: PayloadAction<boolean>) => {
      state.showSpinner = action.payload;
    },
    setAppErrorModal: (state, action: PayloadAction<MessageModalState>) => {
      const { title = '', message = '' } = action.payload;
      state.errorModal.show = action.payload.show;
      state.errorModal.title = title;
      state.errorModal.message = message;
    },
    setAppSuccessModal: (state, action: PayloadAction<MessageModalState>) => {
      const { title = '', message = '' } = action.payload;
      state.successModal.show = action.payload.show;
      state.successModal.title = title;
      state.successModal.message = message;
    },
    resetCommonComponents: (state) => {
      // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
      state.showSpinner = initialState.showSpinner;
      state.errorModal = initialState.errorModal;
      state.successModal = initialState.successModal;
    },
  },
});

export const { setShowSpinner, setAppErrorModal, setAppSuccessModal, resetCommonComponents } =
  commonComponents.actions;

export default commonComponents.reducer;
