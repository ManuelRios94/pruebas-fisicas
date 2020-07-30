
import { SET_BIRTHDAY_IN_PROFILE, SET_GENDER_IN_PROFILE, CLEAR_PROFILE_DATA } from '../constants/types';
import { profileInitialState } from "./initialStates";

const profileReducer = (state = profileInitialState, action) => {
    switch(action.type) {
        case SET_BIRTHDAY_IN_PROFILE:
            return {
                ...state,
                birthday: action.payload
            }
        case SET_GENDER_IN_PROFILE:
            return {
                ...state,
                gender: action.payload
            }
        case CLEAR_PROFILE_DATA:
            return {
                ...profileInitialState
            }
        default:
            return state
    }
}

export default profileReducer;