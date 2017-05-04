import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

export function endCall (peer, user, time, language) {
    axios
        .put(`${ROOT}users/${user}/${language}?Talktime=${time}`)
        .then(res => {
        console.log(res);
        })
        .catch(err => {
        console.log(err);
        });
    return {
        type: types.END_CALL,
        data: peer
    };
}

export function startCall () {
    return {
        type: types.START_CALL
    };
}

export function resetCall () {
    return {
        type: types.RESET_CALL
    };
}