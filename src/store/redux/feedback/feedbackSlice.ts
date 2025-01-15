import { createAppSlice } from "../../createAppSlice"
import { LikeStateSlice, DislikeStateSlice } from "./types"

const likeInitialState: LikeStateSlice = {
  sum: 0,
}

const dislikeInitialState: DislikeStateSlice = {
  sum: 0,
}

export const likeSlice = createAppSlice({
  name: "LIKE",
  initialState: likeInitialState,
  reducers: create => ({
    plus: create.reducer((state: LikeStateSlice) => {
      state.sum = state.sum + 1
    }),
    reset: create.reducer((state: LikeStateSlice) => {
      state.sum = state.sum * 0
    }),
  }),
  selectors: {
    sum: (state: LikeStateSlice) => state.sum,
  },
})

export const dislikeSlice = createAppSlice({
  name: "DISLIKE",
  initialState: dislikeInitialState,
  reducers: create => ({
    plus: create.reducer((state: DislikeStateSlice) => {
      state.sum = state.sum + 1
    }),
    reset: create.reducer((state: DislikeStateSlice) => {
      state.sum = state.sum * 0
    }),
  }),
  selectors: {
    sum: (state: DislikeStateSlice) => state.sum,
  },
})

export const likeSliceActions = likeSlice.actions
export const likeSliceSelectors = likeSlice.selectors

export const dislikeSliceActions = dislikeSlice.actions
export const disllikeSliceSelectors = dislikeSlice.selectors
