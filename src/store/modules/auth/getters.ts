import { GetterTree } from "vuex";
import {
  AuthGettersTypes,
  AuthStateTypes,
  IRootState
} from "./../../interfaces";

export const getters: GetterTree<AuthStateTypes, IRootState> &
  AuthGettersTypes = {
  currentUser: (state: AuthStateTypes) => {
    return state.user + "current";
  },
  welcomeUser: (state: AuthStateTypes) => {
    return state.user + "Welcome";
  }
};
