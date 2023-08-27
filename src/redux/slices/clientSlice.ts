import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IClientType {
  clientData: null | [];
  count: number;
  activeClient: string | number;
}

const initialState = {
  clientData: [],
  count: 0,
  activeClient: 0
};

export const ClientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setClientData: (state, action: PayloadAction<[]>) => {
      state.clientData = action.payload;
    },
    setClientCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setActiveClient: (state, action: PayloadAction<string | number>) => {
      state.activeClient = Number(action.payload);
    },
  },
});

export const clientDataSelector = (state: { client: IClientType }) =>
  state.client.clientData;

export const clientCountSelector = (state: { client: IClientType }) =>
  state.client.count;

export const activeClientSelector = (state: { client: IClientType }) => 
  state.client.activeClient;

const { actions, reducer } = ClientSlice;

export const { setClientData, setClientCount, setActiveClient } = actions;
export const setclientData = (data: []) => {
  setClientData(data);
};
export const setclientCount = (count: number) => {
  setClientCount(count);
};
export const setactiveClient = (activeClient: string | number) => {
  setActiveClient(activeClient);
};

export default reducer;
