// import { createStore } from "vuex";
// import auth from "./modules/auth/index";

// export default createStore({
//   modules: {
//     auth
//   },
//   state: {},
//   mutations: {},
//   actions: {}
// });

// // import { createStore } from "vuex";
// // import auth from "./modules/auth/index";

// // export const store = createStore({
// //   modules: {
// //     auth
// //   },
// //   state: {},
// //   mutations: {},
// //   actions: {}
// //   // modules: {}
// // });

import { createStore } from "vuex";
import { IRootState } from "@/store/interfaces";
import { CounterStoreModuleTypes } from "./modules/counter/types";
import { AuthStoreModuleTypes } from "./modules/auth/types";
import { RootStoreModuleTypes } from "./modules/root/types";

import root from "./modules/root";

export const store = createStore<IRootState>(root);

type StoreModules = {
  counter: CounterStoreModuleTypes;
  auth: AuthStoreModuleTypes;
  root: RootStoreModuleTypes;
};

export type Store = CounterStoreModuleTypes<Pick<StoreModules, "counter">> &
  AuthStoreModuleTypes<Pick<StoreModules, "auth">> &
  RootStoreModuleTypes<Pick<StoreModules, "root">>;
