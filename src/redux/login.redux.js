const LOGIN = 'LOGIN';
const LONOUT = 'LONOUT';
//reducer
export function auth(state={ isAuth:false,user:'张隆基' }, action) {
    switch(action.type){
        case LOGIN:
            return { ...state,isAuth:true };
        case LONOUT:
            return { ...state,isAuth:false };
        default:
            return state
    }
}
//action creator
export function login() {
    return {type:LOGIN}
}
export function logout() {
    return {type:LONOUT}
}