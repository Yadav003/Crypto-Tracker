import { createSlice } from "@reduxjs/toolkit";
import cryptoData from "../../utils/mockData";

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    assets: cryptoData,
  },
  reducers: {
    updatePrices: (state) => {
      state.assets = state.assets.map((asset) => {
        const multiplier = 1 + (Math.random() - 0.5) * 0.01;
        return {
          ...asset,
          price: +(asset.price * multiplier).toFixed(2),
          percentChange1h: +(Math.random() * 4 - 2).toFixed(2),
          percentChange24h: +(Math.random() * 6 - 3).toFixed(2),
          percentChange7d: +(Math.random() * 10 - 5).toFixed(2),
          volume24h:
            asset.volume24h + Math.floor(Math.random() * 1000000 - 500000),
        };
      });
    },
  },
});

export const { updatePrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;
