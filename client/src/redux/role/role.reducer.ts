import { RoleAction, RoleActionTypes } from "./role.types";

interface RoleState {
    role: string;
}

const defaultState = {
    role: "",
}

export const roleReducer = (state: RoleState = defaultState, action: RoleAction): RoleState => {
    switch(action.type) {
        case RoleActionTypes.GET:
            return {
                ...state,
                role: action.payload,
        }; 
        default:
            return state;
    }
}