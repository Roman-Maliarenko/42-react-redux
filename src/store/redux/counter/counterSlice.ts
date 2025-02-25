import { createAppSlice } from "../../createAppSlice"
import { CounterStateSlice } from "./types"

const counterInintialState: CounterStateSlice = {
  count: 0,
}

export const counterSlice = createAppSlice({
  name: "COUNTER",
  initialState: counterInintialState,
  reducers: create => ({
    plus: create.reducer((state: CounterStateSlice) => {
      state.count = state.count + 1
    }),
    minus: create.reducer((state: CounterStateSlice) => {
      state.count = state.count - 1
    }),
  }),
  selectors: {
    count: (state: CounterStateSlice) => state.count,
  },
})

export const counterSlicesActions = counterSlice.actions
export const counterSliceSelectors = counterSlice.selectors
