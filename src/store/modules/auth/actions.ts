import { ActionTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import {
  AuthStateTypes,
  AuthActionTypes,
  IRootState
} from "@/store/interfaces";
import { AllActionTypes } from "@/store/action-types";

export const actions: ActionTree<AuthStateTypes, IRootState> &
  AuthActionTypes = {
  [AllActionTypes.SET_USER_DISPATCH]({ commit }, payload: string) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit(MutationTypes.SET_USER, payload);
        resolve(payload);
      }, 500);
    });
  },
  [AllActionTypes.GET_USER_DISPATCH]({ dispatch }) {
    debugger;
    dispatch(AllActionTypes.CALL_COUNTER, true, { root: true });
  }
};
