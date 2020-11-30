/* eslint-disable @typescript-eslint/interface-name-prefix */
import { ActionContext } from "vuex";
import { MutationTypes as CounterMTypes } from "./modules/counter/mutation-types";
import { ActionTypes as CounterATypes } from "./modules/counter/action-types";
import { MutationTypes as AuthMTypes } from "./modules/auth/mutation-types";
import { ActionTypes as AuthATypes } from "./modules/auth/action-types";
import { MutationTypes as RootMTypes } from "./modules/root/mutation-types";
import { ActionTypes as RootATypes } from "./modules/root/action-types";

export interface IRootState {
  root: boolean;
  version: string;
}

export interface IMergedState extends IRootState {
  counterModule: CounterStateTypes;
  AuthModule: AuthStateTypes;
}

export interface IRootGettersTypes {
  getVersion(state: IRootState): string;
}

export type RootMutationsTypes<S = IRootState> = {
  [RootMTypes.UPDATE_VERSION](state: S, payload: string): void;
};

type AugmentedActionContextRoot = {
  commit<K extends keyof RootMutationsTypes>(
    key: K,
    payload: Parameters<RootMutationsTypes[K]>[1]
  ): ReturnType<RootMutationsTypes[K]>;
} & Omit<ActionContext<IRootState, IRootState>, "commit">;

export interface RootActionsTypes {
  [RootATypes.UPDATE_VERSION](
    { commit }: AugmentedActionContextRoot,
    payload: string
  ): void;
  [RootATypes.USER_CHECK]({ commit }: AugmentedActionContextRoot): void;
}

/*********************** COUNTER1 MODULE TYPES  ***********************/

export interface AuthStateTypes {
  user?: string;
}

export interface AuthGettersTypes {
  welcomeUser(state: AuthStateTypes): string;
  currentUser(state: AuthStateTypes): string;
}

export type AuthMutationsTypes<S = AuthStateTypes> = {
  [AuthMTypes.SET_USER](state: S, payload: string): void;
  [AuthMTypes.RESET_USER](state: S): void;
};

type AugmentedActionContextCounter1 = {
  commit<K extends keyof AuthMutationsTypes>(
    key: K,
    payload: Parameters<AuthMutationsTypes[K]>[1]
  ): ReturnType<AuthMutationsTypes[K]>;
} & Omit<ActionContext<AuthStateTypes, IRootState>, "commit">;

export interface AuthActionTypes {
  [AuthATypes.SET_USER_DISPATCH](
    { commit }: AugmentedActionContextCounter1,
    payload: string
  ): Promise<string>;
  [AuthATypes.GET_USER_DISPATCH]({
    commit
  }: AugmentedActionContextCounter1): void;
}

/*********************** COUNTER MODULE TYPES  ***********************/
export interface CounterStateTypes {
  counter?: number;
  rootDispatch?: boolean;
}

export interface CounterGettersTypes {
  doubledCounter(state: CounterStateTypes): number;
  counterValue(state: CounterStateTypes): number;
  getRootDispatch(state: CounterStateTypes): boolean;
}

export type CounterMutationsTypes<S = CounterStateTypes> = {
  [CounterMTypes.SET_COUNTER](state: S, payload: number): void;
  [CounterMTypes.RESET_COUNTER](state: S): void;
  [CounterMTypes.SET_ROOT_DISPATCH](state: S, payload?: boolean): void;
};

export type AugmentedActionContext = {
  commit<K extends keyof CounterMutationsTypes>(
    key: K,
    payload: Parameters<CounterMutationsTypes[K]>[1]
  ): ReturnType<CounterMutationsTypes[K]>;
} & Omit<ActionContext<CounterStateTypes, IRootState>, "commit">;

export interface CounterActionsTypes {
  [CounterATypes.GET_COUNTER](
    { commit }: AugmentedActionContext,
    payload: number
  ): void;
  [CounterATypes.SET_ROOT_DISPATCH](
    { commit }: AugmentedActionContext,
    payload: number
  ): void;
  [CounterATypes.CALL_COUNTER](
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void;
}

export interface StoreActions
  extends RootActionsTypes,
    CounterActionsTypes,
    AuthActionTypes {}
export interface StoreGetters
  extends IRootGettersTypes,
    CounterGettersTypes,
    AuthGettersTypes {}
