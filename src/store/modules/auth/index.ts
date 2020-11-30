// export type State = { user: null };
import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { ActionTypes } from "./action-types";
import { ActionTree, ActionContext } from "vuex";
// import { GetterTree } from "vuex";

export type Mutations<S = State> = {
  [MutationTypes.SET_USER](state: S, payload: object): void;
};

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

export interface Actions {
  [ActionTypes.GET_USER](
    { commit }: AugmentedActionContext,
    payload: object
  ): Promise<object>;
}

// type Getters = {
//   getUserAge(state: State): number;
// };

export const state = {
  user: {},
};

export type State = typeof state;

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_USER](state, payload: object) {
    state.user = payload;
  },
};

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.GET_USER]({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = {
          name: "lee",
          age: 34,
        };
        commit(MutationTypes.SET_USER, user);
        resolve(user);
      }, 500);
    });
  },
};

// export const getters: GetterTree<State, State> & Getters = {
//   getUserAge: (state) => {
//     return state.user.age;
//   },
// };

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  // getters,
};

// export const actions = {
//   // eslint-disable-next-line no-unused-vars
//   resultNumberAction({commit, dispatch} , payload) {
//       commit(`setResultNumber`, payload);
//   },
// };

// // mutation
// export const mutations = {
// setResultNumber(state, payload) {
//       state.resultNumber = payload.resultNumber;
// },
// };

// // getter
// export const getters = {
//   // eslint-disable-next-line no-unused-vars
//   resultNumber(state, getters, rootState) {
//       return state.resultNumber;
//   },

//   rootState(state, getters, rootState) {
//       return rootState.rootTest;
//   }
// };
