import { configureStore, createSlice, Slice } from "@reduxjs/toolkit";

const spellStore: Slice<{ spells: string[]; lastSpell: string }> = createSlice({
  name: "spells",
  initialState: {
    spells: [],
    lastSpell: "",
    level: 0,
  },
  reducers: {
    spellcast: (state, action) => {
      // @ts-expect-error
      state.spells.push(action.payload);
      state.lastSpell = action.payload;
    },
  },
});

export const { spellcast } = spellStore.actions;

const store = configureStore({ reducer: spellStore.reducer });

export default store;
