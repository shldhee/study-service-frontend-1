import { ActionTypes as counterTypes } from "./modules/counter/action-types";
import { ActionTypes as AuthTypes } from "./modules/auth/action-types";
import { ActionTypes as rootATypes } from "./modules/root/action-types";

export const AllActionTypes = {
  ...counterTypes,
  ...AuthTypes,
  ...rootATypes
};
