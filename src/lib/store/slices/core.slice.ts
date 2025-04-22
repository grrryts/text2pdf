'use client';

import { localStorageKeys } from '@/lib/constants/localStorage.constants';
import { isServer } from '@/lib/utils/isServer.utils';
import {
  PayloadAction,
  SliceCaseReducers,
  SliceSelectors,
  createSlice,
} from '@reduxjs/toolkit';

type CoreState = {
  convertInputValue: string;
  convertedPdfList: string[];
  isModalOpen: boolean;
  isSubmitting: boolean;
};

const coreSlice = createSlice<
  CoreState,
  SliceCaseReducers<CoreState>,
  string,
  SliceSelectors<CoreState>
>({
  name: 'core',
  initialState: {
    convertInputValue: '',
    convertedPdfList: isServer
      ? []
      : JSON.parse(
          localStorage.getItem(localStorageKeys.convertedPdfList) || '[]',
        ),
    isModalOpen: false,
    isSubmitting: false,
  },
  reducers: {
    setConvertInputValue(state, action: PayloadAction<string>) {
      state.convertInputValue = action.payload;
    },
    addConvertedPdf(state, action: PayloadAction<string>) {
      state.convertedPdfList = [...state.convertedPdfList, action.payload];
    },
    toggleModal(state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload;
    },
    setIsSubmitting(state, action: PayloadAction<boolean>) {
      state.isSubmitting = action.payload;
    },
  },
});

export const {
  setConvertInputValue,
  addConvertedPdf,
  toggleModal,
  setIsSubmitting,
} = coreSlice.actions;

export default coreSlice.reducer;
