import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IDesignationType {
  designationData: null | [];
  count: number;
  activeDesignation: string | number;
}

const initialState = {
  designationData: [],
  count: 0,
  activeDesignation: 0
};

export const DesignationSlice = createSlice({
  name: "designation",
  initialState,
  reducers: {
    setDesignationData: (state, action: PayloadAction<[]>) => {
      state.designationData = action.payload;
    },
    setDesignationCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setActiveDesignation: (state, action: PayloadAction<string | number>) => {
      state.activeDesignation = Number(action.payload);
    },
  },
});

export const designationDataSelector = (state: { designation: IDesignationType }) =>
  state.designation.designationData;

export const designationCountSelector = (state: { designation: IDesignationType }) =>
  state.designation.count;

export const activeDesignationSelector = (state: { designation: IDesignationType }) =>
  state.designation.activeDesignation;

const { actions, reducer } = DesignationSlice;

export const { setDesignationData, setDesignationCount, setActiveDesignation } = actions;
export const setdesignationData = (data: []) => {
  setDesignationData(data);
};
export const setdesignationCount = (count: number) => {
  setDesignationCount(count);
};
export const setactiveDesignation = (activeDesignation: string | number) => {
  setActiveDesignation(activeDesignation);
};

export default reducer;
