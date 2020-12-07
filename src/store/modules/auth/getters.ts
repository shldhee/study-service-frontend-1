import { GetterTree } from "vuex";
import {
  AuthGettersTypes,
  AuthStateTypes,
  IRootState,
} from "./../../interfaces";

export const getters: GetterTree<AuthStateTypes, IRootState> &
  AuthGettersTypes = {
  getCurrentUser: (state: AuthStateTypes) => {
    return state.user || {};
  },
  // welcomeUser: (state: AuthStateTypes) => {
  //   return state.user + "Welcome";
  // }
};

// import { GetterTree } from "vuex";
// import { AuthGettersTypes, AuthState } from "./../../interfaces";

// export const getters: GetterTree<AuthState, AuthState> & IAuthGettersTypes = {
//   getCurrentUser: (state: IAuthState): object => {
//     return state.user;
//   },
// };
