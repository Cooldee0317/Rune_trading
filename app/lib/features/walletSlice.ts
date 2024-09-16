import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  address: {
    payment: string;
    assets: string;
  };
  pubkey: {
    payment: string;
    assets: string;
  };
  key: string;
  balance: number;
}

const initialState: CounterState = {
  address: {
    payment: '',
    assets: '',
  },
  pubkey: {
    payment: '',
    assets: '',
  },
  key: '',
  balance: 0,
};

const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const walletSlice = createAppSlice({
  name: 'wallet',
  initialState,
  reducers: (create: any) => ({
    setConnectedWallet: (
      state,
      action: PayloadAction<{
        key: string;
        address: { payment: string; assets: string };
        pubkey: { payment: string; assets: string };
      }>
    ) => {
      state.key = action.payload.key;
      state.address = action.payload.address;
      state.pubkey = action.payload.pubkey;
    },
    disconnectWallet: (state) => {
      state.key = '';
      state.address = {
        payment: '',
        assets: '',
      };
      state.pubkey = {
        payment: '',
        assets: '',
      };
      state.balance = 0;
    },
    setBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
    fetchBalance: create.asyncThunk(
      // Async payload function as the first argument
      async (id: string, thunkApi: any) => {
        // const res = await fetch(`myApi/todos?id=${id}`);
        // return (await res.json()) as Item;
      },
      {
        // pending: (state) => {
        //   // state.loading = true;
        // },
        // rejected: (state, action) => {
        //   // state.error = action.payload ?? action.error;
        // },
        // fulfilled: (state, action) => {
        //   // state.todos.push(action.payload);
        // },
        // settled: (state, action) => {
        //   // state.loading = false;
        // },
      }
    ),
  }),
  selectors: {
    address: (state) => state.address,
  },
});

export const {
  setConnectedWallet,
  disconnectWallet,
  setBalance,
  fetchBalance,
} = walletSlice.actions;

export default walletSlice.reducer;
