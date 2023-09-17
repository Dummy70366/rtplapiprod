import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IDepartmentType {
  departmentData: null | [];
  count: number;
  activeDepartment: string | number;
}

const initialState = {
  departmentData: [],
  count: 0,
  activeDepartment: 0
};

export const DepartmentSlice = createSlice({
  name: "department",
  initialState,
  reducers: {
    setDepartmentData: (state, action: PayloadAction<[]>) => {
      state.departmentData = action.payload;
    },
    setDepartmentCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setActiveDepartment: (state, action: PayloadAction<string | number>) => {
      state.activeDepartment = Number(action.payload);
    },
  },
});

export const departmentDataSelector = (state: { department: IDepartmentType }) =>
  state.department.departmentData;

export const departmentCountSelector = (state: { department: IDepartmentType }) =>
  state.department.count;

export const activeDepartmentSelector = (state: { department: IDepartmentType }) =>
  state.department.activeDepartment;

const { actions, reducer } = DepartmentSlice;

export const { setDepartmentData, setDepartmentCount, setActiveDepartment } = actions;
export const setdepartmentData = (data: []) => {
  setDepartmentData(data);
};
export const setdepartmentCount = (count: number) => {
  setDepartmentCount(count);
};
export const setactiveDepartment = (activeDepartment: string | number) => {
  setActiveDepartment(activeDepartment);
};

export default reducer;
