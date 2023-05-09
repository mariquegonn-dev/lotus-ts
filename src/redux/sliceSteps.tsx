import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StepsType {
  step: number;
  error: boolean;
  sexo: string | null;
  idade: string;
  altura: string;
  peso: string;
  atividadeFisica: string | null;
  objetivo: string | null;
}

const INITIAL_STATE: StepsType = {
  step: 0,
  error: false,
  sexo: null,
  idade: "",
  altura: "",
  peso: "",
  atividadeFisica: null,
  objetivo: null,
};

const sliceSteps = createSlice({
  name: "step",
  initialState: INITIAL_STATE,
  reducers: {
    addSteps(state, { payload }: PayloadAction<number>) {
      return { ...state, step: payload };
    },
    addError(state, { payload }: PayloadAction<boolean>) {
      return { ...state, error: payload };
    },
    addSexo(state, { payload }: PayloadAction<string>) {
      return { ...state, sexo: payload };
    },
    addIdade(state, { payload }: PayloadAction<string>) {
      return { ...state, idade: payload };
    },
    addAltura(state, { payload }: PayloadAction<string>) {
      return { ...state, altura: payload };
    },
    addPeso(state, { payload }: PayloadAction<string>) {
      return { ...state, peso: payload };
    },
    addAtividadeFisica(state, { payload }: PayloadAction<string>) {
      return { ...state, atividadeFisica: payload };
    },
    addObjetivo(state, { payload }: PayloadAction<string>) {
      return { ...state, objetivo: payload };
    },
  },
});

export default sliceSteps.reducer;
export const { addSteps } = sliceSteps.actions;

export const useSteps = (state: any) => {
  return state.steps as StepsType;
};
