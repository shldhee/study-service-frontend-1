// // export type State = { user: null };
// export const state = {
//   user: null
// };

// // export const actions = {
// //   // eslint-disable-next-line no-unused-vars
// //   resultNumberAction({commit, dispatch} , payload) {
// //       commit(`setResultNumber`, payload);
// //   },
// // };

// // // mutation
// // export const mutations = {
// // setResultNumber(state, payload) {
// //       state.resultNumber = payload.resultNumber;
// // },
// // };

// // // getter
// // export const getters = {
// //   // eslint-disable-next-line no-unused-vars
// //   resultNumber(state, getters, rootState) {
// //       return state.resultNumber;
// //   },

// //   rootState(state, getters, rootState) {
// //       return rootState.rootTest;
// //   }
// // };

// export default {
//   namespaced: true,
//   state
//   // actions,
//   // mutations,
//   // getters
// };

import { Module } from "vuex";
import { AuthStateTypes, IRootState } from "@/store/interfaces";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";

// Module
const auth: Module<AuthStateTypes, IRootState> = {
  state,
  getters,
  mutations,
  actions
};

export default auth;
