import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IVisitorType {
    visitorData: null | [];
    count: number;
    activeVisitor: string | number;
}

const initialState = {
    visitorData: [],
    count: 0,
    activeVisitor: 0
};

export const VisitorSlice = createSlice({
    name: "visitor",
    initialState,
    reducers: {
        setVisitorData: (state, action: PayloadAction<[]>) => {
            state.visitorData = action.payload;
        },
        setVisitorCount: (state, action: PayloadAction<number>) => {
            state.count = action.payload;
        },
        setActiveVisitor: (state, action: PayloadAction<string | number>) => {
            state.activeVisitor = Number(action.payload);
        },
    },
});

export const visitorDataSelector = (state: { visitor: IVisitorType }) =>
    state.visitor.visitorData;

export const visitorCountSelector = (state: { visitor: IVisitorType }) =>
    state.visitor.count;

export const activeVisitorSelector = (state: { visitor: IVisitorType }) =>
    state.visitor.activeVisitor;

const { actions, reducer } = VisitorSlice;

export const { setVisitorData, setVisitorCount, setActiveVisitor } = actions;
export const setvisitorData = (data: []) => {
    setVisitorData(data);
};
export const setvisitorCount = (count: number) => {
    setVisitorCount(count);
};
export const setactiveVisitor = (activeVisitor: string | number) => {
    setActiveVisitor(activeVisitor);
};

export default reducer;
