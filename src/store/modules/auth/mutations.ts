import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { AuthStateTypes, AuthMutationsTypes } from "./../../interfaces";

export const mutations: MutationTree<AuthStateTypes> & AuthMutationsTypes = {
  [MutationTypes.SET_USER](state: AuthStateTypes, payload: object) {
    state.user = payload;
  },
  [MutationTypes.RESET_USER](state: AuthStateTypes) {
    state.user = {};
  },
};
