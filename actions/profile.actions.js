import { SET_BIRTHDAY_IN_PROFILE, SET_SEX_IN_PROFILE, CLEAR_PROFILE_DATA } from '../constants/types';

export const setBirthdayInProfile = birthday => {
    return { type: SET_BIRTHDAY_IN_PROFILE, payload: birthday };
}

export const setSexInProfile = sex => {
    return { type: SET_SEX_IN_PROFILE, payload: sex };
}

export const clearProfileData = () => {
    return { type: CLEAR_PROFILE_DATA };
}